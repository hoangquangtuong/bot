/*module.exports.config = {
	name: "autopaste",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: "Bot React",
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  try{
	var { threadID, messageID } = event;
    const axios = require('axios')
  const moment = require("moment-timezone");
    const hmm = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
const picture = (await axios.get(`https://i.imgur.com/WNz88la.jpeg`, { responseType: "stream"})).data
  
  body === undefined || !body.includes('https://pastebin.com/raw') ||
senderID == api.getCurrentUserID() || senderID == '') return; const userName = await Users.getNameUser(senderID); const { threadName } = await api.getThreadInfo(threadID); api.sendMessage(`📥=== [ 𝗟𝗜𝗡𝗞 𝗣𝗔𝗦𝗧𝗘𝗡𝗕𝗜𝗡 ] ===📥\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰:  ${hmm}\n⚙️ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗴𝘂̛̉𝗶 𝗹𝗶𝗻𝗸 𝗽𝗮𝘀𝘁𝗲𝗯𝗶𝗻\n💓 𝗧𝗶𝗲̂́𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗴𝘂̛̉𝗶 𝘃𝗲̂̀ 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗵𝘂́𝗽`,attachment: (picture)}, threadID, messageID);
    api.sendMessage({body: `📥=== [ 𝗟𝗜𝗡𝗞 𝗣𝗔𝗦𝗧𝗘𝗡𝗕𝗜𝗡 ] ===📥\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${hmm}\n👥 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: \n🌍 𝗡𝗵𝗼́𝗺: \n🌸 𝗩𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 𝗺𝗼̣̂𝘁 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗼́ 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸 𝗽𝗮𝘀𝘁𝗲𝗯𝗶𝗻\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸: ${event.body} `, attachment: (picture)}, '100048031278514');
  }
        }
  catch(e){
    console.log(e)
  }}
	module.exports.run = function({ api, event, client, o, __GLOBAL }) {
  }*/