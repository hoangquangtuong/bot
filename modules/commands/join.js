module.exports.config = {
    name: "join",
    eventType: ['log:subscribe'],
    version: "1.0.0",
    credits: "Mirai-Team",//inspire by miraibot
    description: "GROUP UPDATE NOTIFICATION"
};
const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download'
module.exports.circle = async (image) => {
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
  }
module.exports.run = async function({ api, event, Users }) {
   var fullYear = global.client.getTime("fullYear");
    var getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "Đ𝐞̂𝐦 𝐊𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐁𝐮𝐨̂̉𝐢 𝐒𝐚́𝐧𝐠 𝐒𝐨̛́𝐦" : getHours < 12 ? "𝐁𝐮𝐨̂̉𝐢 𝐓𝐫𝐮̛𝐚" : getHours < 17 ? "𝐁𝐮𝐨̂̉𝐢 𝐂𝐡𝐢𝐞̂̀𝐮" : getHours < 23 ? "𝐁𝐮𝐨̂̉𝐢 𝐓𝐨̂́𝐢" : "Đ𝐞̂𝐦 𝐊𝐡𝐮𝐲𝐚"}`
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`『 ${global.config.PREFIX} 』➾ ${(!global.config.BOTNAME) ? "MAKA BY TÂN ĐZ" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage("", event.threadID, () => api.sendMessage({ body: `⎔ 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 ......! ⎔\n
▭▭▭▭ [ 𝐋𝐔̛𝐔 𝐘́  ] ▭▭▭▭\n
➾『🌎』𝐓𝐡𝐢𝐞̂́𝐭 𝐋𝐚̣̂𝐩 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐁𝐚̆𝐧𝐠 𝐍𝐡𝐨́𝐦 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 Đ𝐨̣𝐜 𝐍𝐡𝐮̛̃𝐧𝐠 𝐋𝐮̛𝐮 𝐘́ 𝐒𝐚𝐮 Đ𝐚̂𝐲 😼
➾『📱』𝐃𝐮̀𝐧𝐠 /𝐌𝐞𝐧𝐮 𝐀𝐥𝐥 Đ𝐞̂̉ 𝐗𝐞𝐦 𝐍𝐡𝐮̛̃𝐧𝐠 𝐋𝐞̣̂𝐧𝐡 𝐂𝐨́ 𝐓𝐫𝐞̂𝐧 𝐅𝐢𝐥𝐞
➾『❌』𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐮̛̉𝐢 𝐁𝐨𝐭 𝐊𝐡𝐨̂𝐧𝐠 𝐒𝐩𝐚𝐦 𝐁𝐨𝐭 𝐒𝐞̃ 𝐀𝐮𝐭𝐨𝐛𝐚𝐧 !
➾『❗』𝐂𝐨́ 𝐕𝐚̂́𝐧 Đ𝐞̂̀ 𝐃𝐮̀𝐧𝐠 /𝐂𝐚𝐥𝐥𝐚𝐝 𝐊𝐞̀𝐦 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠 Đ𝐞̂̉ 𝐆𝐮̛̉𝐢 Đ𝐞̂́𝐧 𝐀𝐝𝐦𝐢𝐧 🦖
➾『🔊』𝐓𝐫𝐚́𝐧𝐡 /𝐂𝐚𝐥𝐥𝐚𝐝 𝐍𝐡𝐚̃𝐦 Đ𝐞̂̉ 𝐓𝐫𝐚́𝐧𝐡 𝐓𝐢̀𝐧𝐡 𝐓𝐫𝐚̣𝐧𝐠 𝐀𝐝𝐦𝐢𝐧 𝐁𝐚̣𝐧 𝟐𝟒𝐇 👻
➾『📝』𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 𝐕𝐮𝐢 𝐕𝐞̉💕
➾『☎』𝐌𝐨̣𝐢 𝐓𝐡𝐚̆́𝐜 𝐌𝐚̆́𝐜 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐢𝐧𝐛𝐨𝐱 𝐓𝐫𝐮̛̣𝐜 𝐓𝐢𝐞̂́𝐩 𝐂𝐡𝐨 𝐀𝐝𝐦𝐢𝐧\n
▭▭▭▭ [ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎  ] ▭▭▭▭\n
➾『📱』𝐙𝐚𝐥𝐨: 𝟎𝟑𝟗𝟕𝟕𝟓𝟐𝟐𝟔𝟗
➾『🌐』𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧: 𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐱.𝐩𝐫𝐨𝐟𝐢𝐥𝐞𝐭𝐫𝐢𝐞𝐮𝐭𝐚𝐢𝐭𝐚𝐧.𝐱`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/1.mp4") }, threadID));
  }
  else {
    try {
        if(!fs.existsSync(__dirname+`/cache/Semi.ttf`)) { 
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname+`/cache/Semi.ttf`, Buffer.from(getfont, "utf-8"));
        };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
     // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for(o = 0; o < event.logMessageData.addedParticipants.length; o++){
    let pathImg = __dirname + `/cache/${o}.png`;
  let pathAva = __dirname + `/cache/fbcover2.png`;
  let avtAnime = (await axios.get(encodeURI(
    `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=1371688333316058|yqnZCV_SATCp9jPHNUQZaj5_C_Y`,{
      headers:{
        cookie:'xs=13%3AlajUELLXiJWSGA%3A2%3A1670218018%3A-1%3A6326;c_user=100026039134645;fr=04yhWc9aZ2jCK6WYB.AWX6H8d2OYiFMQa_tmHEcMP9bNY.BjjYEe.-o.AAA.0.0.BjjYEi.AWW2404AO5I;sb=HoGNYx-MLHOu0FOMeC8kqttW;datr=HoGNY-xBBNLJjRghcnhN1hWA;'
      }
    }), { responseType: "arraybuffer" })).data;
    var ok = [
      'https://i.imgur.com/dDSh0wc.jpeg',
'https://i.imgur.com/UucSRWJ.jpeg',
'https://i.imgur.com/OYzHKNE.jpeg',
'https://i.imgur.com/V5L9dPi.jpeg',
'https://i.imgur.com/M7HEAMA.jpeg'
             ]
  let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
  fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    var avatar = await this.circle(pathAva);
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  registerFont(__dirname+`/cache/Semi.ttf`, {
        family: "Semi"
    });
  let canvas = createCanvas(1902, 1082);
    console.log(canvas.width, canvas.height)
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
  ctx.fillStyle = "#FFF";
  ctx.textAlign = "center";
  ctx.font = `155px Semi`;
  ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20 , canvas.height / 2 + 100);
  ctx.save();
  ctx.font = `75px Semi`;
  ctx.fillText(`Chào mừng ${threadName}`, canvas.width / 2 - 15 , canvas.height / 2 + 235)
  ctx.fillText(`Thành viên thứ ${participantIDs.length - o}`, canvas.width / 2 - 15 , canvas.height / 2 + 350)
  ctx.restore();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  abx.push(fs.createReadStream(__dirname + `/cache/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "⎔ 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 ⎔\n➾ 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀: {time}\n➾ 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢 𝐂𝐮̉𝐚 𝐂𝐡𝐮́𝐧𝐠 𝐓𝐚 !!!\n▭▭▭▭ [ 𝐈𝐍𝐅𝐎 ] ▭▭▭▭\n⋄ 𝐍𝐚𝐦𝐞: {name} \n⋄ 𝐔𝐫𝐥 𝐅𝐁: https://www.facebook.com/{iduser}\n⋄ 𝐁𝐚̣𝐧 𝐀̂́𝐲 𝐋𝐚̀ 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐒𝐨̂́ {soThanhVien} 𝐂𝐮̉𝐚 {threadName} !!\n⋄ 𝐂𝐡𝐮́𝐜 {name} 𝐁𝐮𝐨̂̉𝐢 {buoi} 𝐕𝐮𝐢 𝐕𝐞̉ 𝐌𝐨𝐚𝐡𝐡 🍒\n▭▭▭▭▭▭▭▭▭▭▭▭\n◈ {name} 𝐕𝐚̀𝐨 𝐍𝐡𝐨́𝐦 𝐁𝐨̛̉𝐢 𝐋𝐨̛̀𝐢 𝐌𝐨̛̀𝐢 𝐂𝐮̉𝐚 {author}\n◈ 𝐔𝐫𝐥 𝐅𝐁: https://www.facebook.com/{uidAuthor}\n𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐫𝐚 đ𝐚̉𝐨 𝐨̛̉ 🍀" : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'Bạn' : 'BẠn')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
         .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time);
 
      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.png`)
    }
    } catch (e) { return console.log(e) };
  }
}
