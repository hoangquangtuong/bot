module.exports.config = {
    name: 'checktt3',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Đếm và kiểm tra tương tác',
    commandCategory: 'Thống kê',
    usages: 'checktt3 [tag|all|reply]',
    cooldowns: 2
};
const {
    readFileSync,
    writeFileSync,
    existsSync,
    mkdirSync
} = require('fs-extra');
const {get} = require('axios');
const dirM = __dirname + '/cache/count-messenger';
const sortCompare = k => (a, b) => (a[k] > b[k] ? 1: a[k] < b[k] ? -1: 0)*-1;
const localeStr = n => ((+n).toLocaleString()).replace(/,/g, '.');
module.exports.onLoad = function() {
    if (!existsSync(dirM)) mkdirSync(dirM);
};
module.exports.handleEvent = async function({
    api, event, Users
}) {
    const pathGr = `${dirM}/${event.threadID}.json`;
    if (!existsSync(pathGr)) writeFileSync(pathGr, '{}');
    const data = JSON.parse(readFileSync(pathGr));
    if (!data.user) data.user = [];
    if (data.user.length != event.participantIDs.length) {
        for (const uid of event.participantIDs) if (!data.user.find(i => i.uid == uid)) {
            const _User = await Users.getData(uid) || {};
            data.user.push({
                uid, name: _User.name, countMsg: 0
            });
        };
    };
    const _user = data.user.find(i => i.uid == event.senderID);
    if (!!_user) ++_user.countMsg;
    writeFileSync(pathGr, JSON.stringify(data, null, 4));
};
module.exports.run = async function({
    api, event, args, Currencies
}) {
    const uid = event.type == 'message_reply' ? event.messageReply.senderID: Object.keys(event.mentions).length != 0 ? Object.keys(event.mentions)[0]: event.senderID;
    var data = JSON.parse(readFileSync(`${dirM}/${event.threadID}.json`));
    data = data.user.filter(i => event.participantIDs.includes(i.uid));
    data.sort(sortCompare('countMsg'));
    const index = data.findIndex(i => i.uid == uid);
    const {name, countMsg} = data[index];
    const {threadName} = global.data.threadInfo.get(event.threadID);
    switch (args[0]) {
        case 'all': {
            var txt = '[⚜️]=== 『𝑪𝒉𝒆𝒄𝒌 𝑰𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒊𝒗𝒆 𝑨𝒍𝒍』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n'.toUpperCase();
            for (var i = 0; i < data.length; i++) txt += `${i+1} ➜ 『 ${data[i].name} 』\n[⚜️]➜ Messenger: ${localeStr(data[i].countMsg)}\n\n`;
            txt += `\n[⚜️]=> Bạn đứng top ${index+1}`;
            api.sendMessage(txt, event.threadID);
        }; break;
        default: {
            //const {[uid]: info = {}} = await api.getUserInfo(uid);
            var vanity = null;
            //vanity = info.vanity;
            const response = await get(`https://nguyenmanh.name.vn/api/fbInfo?id=${uid}&apikey=fLVDI8p3`);
            vanity = response.status != 200 ? uid: response.data.result.vanity;
            const {money = 0} = await Currencies.getData(uid);
            api.sendMessage(`[⚜️]➜ Name: ${name}\n[⚜️]➜ Box: ${threadName}\n[⚜️]➜ Fb: www.facebook.com/${vanity}\n[⚜️]➜ User ID: ${uid}\n[⚜️]➜ Money: ${localeStr(money)}\n[⚜️]➜ Messenger: ${localeStr(countMsg)}\n[⚜️]➜ Rank: ${index+1}`, event.threadID);
        };
       };
};