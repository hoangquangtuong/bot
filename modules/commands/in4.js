module.exports.config = {
    name: "in4",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "BraSL",
    description: ".hee",
    commandCategory: "tiện ích",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, client }) {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];
    const { threadID, messageID, senderID, mentions, type, messageReply } = event;
    let targetID = senderID;
    if (type == 'message_reply') {
        targetID = messageReply.senderID;
    } else if (Object.keys(mentions).length > 0) {
        targetID = Object.keys(mentions)[0];
    }
    var data = await api.getUserInfoV2(targetID);
    var name = data.name
    //name = 'No name'
    //(e, i) => if(e) name = 'noname'

    var username = data.username
    var follow = data.follow
    var uid = targetID
    var about = data.about
    var gender = data.gender == 'male' ? "Nam" : data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = data.birthday
    var love = data.relationship_status
    var rela = data.love.name
    var id = data.love.id
    var location = data.location.name
    var place = data.location.id
    var hometown = data.hometown.name
    var home = data.hometown.id
    var url_profile = data.link
    var web = data.website
    var quotes = data.quotes
    var link = data.avatar

    var callback = () => api.sendMessage({ body: `[👤] Tên: ${name}\n[🍁] UserName: ${username}\n[🔎] UID: ${uid}\n[👀] Follow: ${follow}\n[👭] Giới tính: ${gender}\n[🎂] Sinh Nhật: ${birthday}\n[💌] Mối quan hệ: ${love}\n[💞] Love name: ${rela}\n[💓] UID love: ${id}\n[🏡] Sống tại: ${location}\n[🌆] ID Place: ${home}\n[🌏] Đến từ: ${hometown}\n[🏙️] ID Hometown: ${home}\n[📌] URL cá nhân: ${url_profile}`, attachment: fs.createReadStream(__dirname + "/cache/1.png") }, threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"), messageID);
    return request(link).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close',
        () => callback());

}