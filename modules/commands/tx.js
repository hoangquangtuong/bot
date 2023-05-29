/*module.exports.config = {
    name: "tx",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam mod D-Jukie and J-JRT",
    description: "Chơi tài xỉu ngay trên message",
    commandCategory: "Game",
    usages: "tx [xỉu/xiu/x || tai/tài/t] + [tiền cược/all/50%]",
    cooldowns: 0,
    envConfig: {
        timeout: 3000, // thời gian kết thục tung xí ngầu, 1000 = 1s
        core: 3, // số tiền cược nhân cho 3
        api_key: "JrT_Rosie_4100115343" // key dùng để dùng api
    }
}
module.exports.languages = {
    "vi": {
      "noOption1": "[⚜️]➜ Bạn phải cược Tài hoặc Xỉu + tiền cược",
        "InvalidSelection": "[⚜️]➜ Lựa chọn của bạn không hợp lệ\n[⚜️]➜ Các lựa chọn hợp lệ ↓↓💦\n • %5: %4, %5, %6\n • %1: %1, %2, %3",
        "noOption2": "[⚜️]➜ Bạn phải nhập số tiền cược hoặc all, 50%\n - all sẽ cược toàn bộ số tiền hiện có trong túi\n - 50% sẽ cược 50% số tiền hiện có",
        "InvalidBets": "[⚜️]➜ Tiền cược không hợp lệ hoặc nhỏ hơn %1$",
        "notEnoughMoney": "[⚜️]➜ Không đủ %1$ để bắt đầu cược, Bạn còn %2$ trong túi",
        "rollTheDice": "[⚜️]➜ 🎲 Tung xí ngầu...\n[⚜️]➜ Chúc bạn may mắn :))",
        "win": "[⚜️]➜ Nhà cái ra %1, bạn cược %2 => win\n - Thu về %3$\n - Tài sản còn: %4$",
        "lose": "[⚜️]➜ Nhà cái ra %1, bạn cược %2 => lose\n - Mất %3$\n - Tài sản còn: %4$",
        "error": "[⚜️]➜ %1, Đã xảy ra lỗi, vui lòng thử lại sau giây lát!"
    },
    "en": {}
}
const axios = require("axios")
module.exports.run = async ({ api, event, args, Currencies, getText }) => {
  const { threadID: tid, messageID: mid, senderID: sid } = event
    try {
      if (!args[0]) return api.sendMessage(getText("noOption1"), tid, mid)
        const { name, envConfig } = this.config
        const { timeout, core, api_key } = global.config[name]
        let get = (await axios.get(`https://docs-api.nguyenhaidang.ml/game/taixiu`)).data
        var moneyUsers = (await Currencies.getData(sid)).money
        var choose = args[0].toLowerCase()
        var bets = parseInt(args[1])
        var typeTai = ["tai", "tài", "t"]
        var typeXiu = ["xiu", "xỉu", "x"]
        var other = ["all", "50%"]
        var arrayNew = []
        if (!arrayNew.concat(typeTai, typeXiu).includes(choose)) return api.sendMessage(getText("InvalidSelection", typeXiu[0], typeXiu[1], typeXiu[2], typeTai[0], typeTai[1], typeTai[2]), tid, mid)
        if (!args[1]) return api.sendMessage(getText("noOption2"), tid, mid)
        if ((isNaN(bets) || bets < 100) && !other.includes(args[1])) return api.sendMessage(getText("InvalidBets", 100), tid, mid)
        if (bets > moneyUsers && !other.includes(args[1])) return api.sendMessage(getText("notEnoughMoney", ChangeCurrency(bets), ChangeCurrency(moneyUsers)), tid, mid)
        return api.sendMessage({
            body: getText("rollTheDice"),
            attachment: await DownLoad(get.gif)
        }, tid, (error, info) => {
            return setTimeout(CheckResult, (timeout || envConfig.timeout))
            async function CheckResult() {
              bets = args[1] == "all"? moneyUsers: args[1] == "50%"? moneyUsers / 2: bets
                api.unsendMessage(info.messageID)
                if (typeTai.includes(choose)) {
                    choose = "tài"
                } else choose = "xỉu"
                if (choose == get.result) {
                    msg = "win", as = "increaseMoney", bets = bets * (core || envConfig.core), moneyUser = moneyUsers + parseInt(bets)
                } else msg = "lose", as = "decreaseMoney", bets = bets, moneyUser = moneyUsers - parseInt(bets)
                return api.sendMessage({
                    body: getText(msg, get.result + ' ' + get.total, choose, ChangeCurrency(bets), ChangeCurrency(moneyUser)),
                    attachment: await DownLoad(get.images)
                }, tid, () => Currencies[as](sid, bets), mid)
            }
        }, mid)
    } catch (e) {
        api.sendMessage(getText("error", e), tid)
    }
}
function ChangeCurrency(number) {
  return number.toLocaleString("en-US")
  }
async function DownLoad(url) {
  if(typeof url == "object") {
    var attachment = [];
    for(let i of url) {
      var resp = (await axios.get(i, {
          responseType: "stream"
      })).data
      attachment.push(resp)
    }
    return attachment
  }
  return (await axios.get(url, {
      responseType: "stream"
  })).data
}*/
module.exports.config = {
	name: "txiu",
	version: "6.6.6",
	hasPermssion: 0,
	credits: "Yae Miko",
	description: "Tài xỉu trên hệ thống Raiden Pay đa dạng nhiều kiểu",
	commandCategory: "Trò Chơi",
    usages: "[tài/xỉu/b3gn/b2gn/cs/ct] [số tiền]",
    cooldowns: 5
};
const axios = require('axios');
var bdsd = true;
var tilethang = 2.53;
var tilethangb3dn = 10;
var tilethangb2dn = 5;
var timedelay = 2;
var haisogiong = 2;
var basogiong = 3;
var motsogiong = 1;
function replace(int){
    var str = int.toString();
    var newstr = str.replace(/(.)(?=(\d{3})+$)/g,'$1,');
    return newstr;
}
function getImage(number){
    switch (number){
        case 1: return "https://imgur.com/qn9PXUX.jpg";
        case 2: return "https://imgur.com/hbQISCE.jpg";
        case 3: return "https://imgur.com/gyskBsm.jpg";
        case 4: return "https://imgur.com/vHMWTc2.jpg";
        case 5: return "https://imgur.com/HvA4KVd.jpg";
        case 6: return "https://imgur.com/JVuky8r.jpg";
    }
}
function getRATE(tong){
    if(tong == 4) var rate = 40;
    if(tong == 5) var rate = 35;
    if(tong == 6) var rate = 33.33;
    if(tong == 7) var rate = 25;
    if(tong == 8) var rate = 20;
    if(tong == 9) var rate = 16.66;
    if(tong == 10) var rate = 14.28;
    if(tong == 11) var rate = 12.5;
    if(tong == 12) var rate = 11.11;
    if(tong == 13) var rate = 10;
    if(tong == 14) var rate = 9.09;
    if(tong == 15) var rate = 8.33;
    if(tong == 16) var rate = 7.69;
    if(tong == 17) var rate = 7.14;
    return rate
}
module.exports.run = async function ({ event, api, Currencies, Users, args }) {
    try{
    const moment = require("moment-timezone");
    const format_day = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
    const { increaseMoney , decreaseMoney } = Currencies;
    const { threadID, messageID, senderID } = event;
    const { sendMessage: HakiraSEND } = api;
    var name = await Users.getNameUser(senderID)
    var money = (await Currencies.getData(senderID)).money
    var bet = parseInt((args[1] == "allin" ? money : args[1]));
    var input = args[0];
    var tong = parseInt(args[2])
    if(!input) return HakiraSEND("[ ❗ ] 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗻𝗵𝗮̣̂𝗽 𝘁𝗮̀𝗶/𝘅𝗶̉𝘂/𝗯𝗼̣̂ 𝟯 𝗴𝗶𝗼̂́𝗻𝗴 𝗻𝗵𝗮𝘂/𝗯𝗼̣̂ 𝟮 𝗴𝗶𝗼̂́𝗻𝗴 𝗻𝗵𝗮𝘂/𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗼̂̉𝗻𝗴/𝗰𝘂̛𝗼̛̣𝗰 𝘀𝗼̂́", threadID, messageID);
    if(!bet) return HakiraSEND("Co Dau Buoi", threadID, messageID);
    if(bet < 1000) return HakiraSEND("[ 💸 ] 𝗕𝗮̣𝗻 𝗰𝗮̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗼̂́𝗶 𝘁𝗵𝗶𝗲̂̉𝘂 𝗹𝗮̀ 𝟭𝟬𝟬𝟬$", threadID, messageID);
    if(bet > money) return HakiraSEND("[ 💸 ] 𝗕𝗮̣𝗻 𝘁𝗵𝗶𝗲̂́𝘂 𝘁𝗶𝗲̂̀𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗰𝘂̛𝗼̛̣𝗰", threadID, messageID);
    if(input == "tài" || input == "Tài" || input == '-t') var choose = 'tài'
    if(input == "xỉu" || input == "Xỉu" || input == '-x') var choose = 'xỉu'
    if(input == 'b3gn' || input == 'bbgn' || input == 'btgn') var choose = 'b3gn'
    if(input == 'b2gn' || input == 'bdgn' || input == 'bhgn') var choose = 'b2gn'
    if(input == 'cuoctong' || input == 'ct') var choose = 'cuoctong'
    if(input == 'cuocso' || input == 'cs') var choose = 'cuocso'
    var tag = ['tài','xỉu','b3gn','b2gn','cuoctong','cuocso']
    if(!tag.includes(choose)) return HakiraSEND('[ ❗ ] 𝗕𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗽 𝘀𝗮𝗶 𝗹𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻, 𝗵𝗮̃𝘆 𝗰𝗵𝗼̣𝗻 𝘁𝗮̀𝗶/𝘅𝗶̉𝘂/𝗯𝟯𝗴𝗻/𝗯𝟮𝗴𝗻/𝗰𝘁/𝗰𝘀', threadID, messageID)
    if(choose == 'cuoctong' && (tong < 4 || tong > 17)) return HakiraSEND("[ 💸 ] 𝗧𝗼̂̉𝗻𝗴 𝗰𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", threadID, messageID);
    if(choose == 'cuocso' && (tong < 1 || tong > 6)) return HakiraSEND("[ ❗ ] 𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂ ?", threadID, messageID);
    const number = [], img = [], bodem = 0;
    for(let i = 1; i < 4; i++){
    var n = Math.floor(Math.random() * 6 + 1) 
    number.push(n)
    var img_ = (await axios.get(encodeURI(getImage(n)), { responseType: 'stream' })).data;
    img.push(img_)
    HakiraSEND(`[ 🎲 ] - 𝗟𝗮̂̀𝗻 𝗹𝗮̆́𝗰 𝘅𝘂́𝗰 𝘅𝗮̆́𝗰 𝘁𝗵𝘂̛́ ${i}: ${n}`, threadID, messageID)
      await new Promise(resolve => setTimeout(resolve, timedelay * 1000))
}
var total = number[0] + number[1] + number[2];
if(choose == 'cuocso'){
    if(number[0] == tong || number[1] == tong || number[2] == tong){
        var ans = `${tong}`
        var result = 'win'
        var mn = bet * motsogiong 
        var mne = money + mn
    }
    if(number[1] == tong && number[2] == tong || number[0] == tong && number[2] == tong || number[0] == tong && number[1] == tong){
        var ans = `${tong}`
        var result = 'win'
        var mn = bet * haisogiong
        var mne = money + mn
    }
    if(number[0] == tong && number[1] == tong && number[2] == tong){
        var ans = `${tong}`
        var result = 'win'
        var mn = bet * basogiong
        var mne = money + mn
    }
    if(number[0] != tong && number[1] != tong && number[2] != tong){
        var ans = `${tong}`
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }   
}
if(choose == 'cuoctong'){
    if(total == tong){
        var ans = "cược tổng"
        var result = 'win'
        var mn = bet * parseInt((getRATE(tong)))
        var mne = money + mn
    } else {
        var ans = `${total}`
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }
}
if(choose == 'b3gn' ){
    if(number[0] == number[1] && number[1] == number[2]) {
        var ans = "bộ ba đồng nhất"
        var result = 'win'
        var mn = bet * tilethangb3dn
        var mne = money + mn
    } else {
        var ans = (total >= 11 && total <= 18 ? "tài" : "xỉu") 
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }
}
if(choose == 'b2gn'){
    if(number[0] == number[1] || number[1] == number[2] || number[0] == number[2]) {
        var ans = "bộ hai đồng nhất"
        var result = 'win'
        var mn = bet * tilethangb2dn
        var mne = money + mn
    } else {
        var ans = (total >= 11 && total <= 18 ? "tài" : "xỉu") 
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }
}
if(choose == 'tài' || choose == 'xỉu') {
if(number[0] == number[1] && number[1] == number[2]){
var ans = "bộ ba đồng nhất"
} else {
var ans = (total >= 11 && total <= 18 ? "tài" : "xỉu") 
}
if(number[0] == number[1] && number[1] == number[2]) {
    var result = 'lose'
    var mn = bet
    var mne = money - mn
}
if(ans == choose) {
    var result = 'win'
    var mn = bet * tilethang
    var mne = mn + money
} else {
    var result = 'lose'
    var mn = bet
    var mne = money - mn
}
}
if(result =='lose'){
    decreaseMoney(senderID, mn)
} else if(result == 'win'){
    increaseMoney(senderID, mn)
}
var msg =   `===== 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨 =====` 
            + '\n' + 
            `[ ⏰ ] - 𝗧𝗶𝗺𝗲: ${format_day}`
            + '\n' +
            `[ 👤 ] - 𝗣𝗹𝗮𝘆𝗲𝗿: ${name}`
            + '\n' +
            `[ 🌸 ] - 𝗟𝘂̛̣𝗮 𝗖𝗵𝗼̣𝗻: ${choose}`
            + '\n' +
            `[ ⚜️ ] - 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉: ${ans}`
            + '\n' +
            `[ 🎲 ] - 𝗫𝘂́𝗰 𝗫𝗮̆́𝗰 𝟭: ${number[0]}`
            + '\n' + 
            `[ 🎲 ] - 𝗫𝘂́𝗰 𝗫𝗮̆́𝗰 𝟮: ${number[1]}`
            + '\n' +
            `[ 🎲 ] - 𝗫𝘂́𝗰 𝗫𝗮̆́𝗰 𝟯: ${number[2]}`
            + '\n' +
            `[ 🎲 ] - 𝗧𝗼̂̉𝗻𝗴 𝗫𝘂́𝗰 𝗫𝗮̆́𝗰: ${total}`
            + '\n' +
            `[ 🎰 ] - 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉: ${(result == 'win' ? 'Thắng' : 'Thua')}`
            + '\n' +
            `[ 💸 ] - 𝗧𝗶𝗲̂̀𝗻 𝗖𝘂̛𝗼̛̣𝗰: ${replace(bet)}`
            + '\n' +
            `[ 💵 ] - 𝗧𝗶𝗲̂̀𝗻 ${(result == 'win' ? 'Thắng' : 'Thua')}: ${replace(Math.floor(mn))}$`
            + '\n' +
            `[ ♻️ ] - 𝗧𝗿𝗮̣𝗻𝗴 𝗧𝗵𝗮́𝗶: ${(result == 'win' ? 'Đã Trả Thưởng' : 'Đã Trừ Tiền')}`
            + '\n' +
            `[ 💰 ] - 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻 𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̣𝗶: ${replace(mne)}$`
            + '\n' +
            `===== 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨 =====`
            HakiraSEND({body:msg,attachment: img}, threadID, messageID)
            if(bdsd == true) {
          var msg =  `𝓑𝓸𝓽 𝓓𝓻𝓪𝓰𝓸𝓷 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼, 𝗻𝗴𝗮̀𝘆 ${format_day}\n${(result == 'win') ? '𝗡𝗵𝗮̣̂𝗻 𝘁𝗶𝗲̂̀𝗻' : '𝗕𝗶̣ 𝘁𝗿𝘂̛̀ 𝘁𝗶𝗲̂̀𝗻'} 𝘁𝘂̛̀ 𝗱𝗶̣𝗰𝗵 𝘃𝘂̣ 𝗴𝗮𝗺𝗲 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂\n𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗻𝗵𝗮̣̂𝗻 𝘃𝗲̂̀ ${replace(mn)}\n𝗦𝗼̂́ 𝗱𝘂̛ 𝗸𝗵𝗮̉ 𝗱𝘂̣𝗻𝗴: ${replace(mne)}$\n𝗖𝗮̉𝗺 𝗼̛𝗻 𝘃𝗶̀ 𝘁𝗶𝗻 𝗱𝘂̀𝗻𝗴 𝗱𝗶̣𝗰𝗵 𝘃𝘂̣ 𝗰𝘂̉𝗮 𝓓𝓻𝓪𝓰𝓸𝓷𝗣𝗮𝘆 🌸`
            HakiraSEND({
                body: msg,
               // attachment: img
            }, senderID)
        }
} catch(e){
    console.log(e)
}}
