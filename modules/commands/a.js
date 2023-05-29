/*module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "sơnkb", // gửi tặng huy cho cái mdl này kkk thay credit đi :v
	description: "bài thơ",
	commandCategory: "Game",
	usages: "thathinh",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const moment = require("moment-timezone"); 
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
const t = Date.parse("January 23, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  const time = process.uptime(),
		ttoan = Math.floor(time / (60 * 60)),
		ne = Math.floor((time % (60 * 60)) / 60),
		hehe = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  if (thu == 'Sunday') thu = '𝐂𝐇Ủ 𝐍𝐇Ậ𝐓'
  if (thu == 'Monday') thu = '𝐓𝐡ứ 𝐡𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐇Ứ 𝐁𝐀'
  if (thu == 'Wednesday') thu = '𝐓𝐇Ứ 𝐓Ư'
  if (thu == "Thursday") thu = '𝐓𝐇Ứ 𝐍Ă𝐌'
  if (thu == 'Friday') thu = '𝐓𝐇Ứ 𝐒Á𝐔'
  if (thu == 'Saturday') thu = '𝐓𝐇Ứ 𝐁Ả𝐘'
       const getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đê𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐁𝐮𝐨̂̉𝐢 𝐒𝐚́𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉" : getHours < 12 ? "𝐁𝐮𝐨̂̉𝐢 𝐓𝐫𝐮̛𝐚 𝐓𝐨̂́𝐭 𝐋𝐚̀𝐧𝐡" : getHours < 17 ? "𝐁𝐮𝐨̂̉𝐢 𝐂𝐡𝐢𝐞̂̀𝐮 𝐁𝐢̀𝐧𝐡 𝐀𝐧" : getHours < 23 ? "𝐁𝐮𝐨̂̉𝐢 𝐓𝐨̂́𝐢 𝐕𝐮𝐢 𝐕𝐞̉" : "Đ𝐞̂𝐦 𝐊𝐡𝐮𝐲𝐚 𝐘𝐞̂𝐧 𝐁𝐢̀𝐧𝐡"}` 
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var thơ = (await axios.get("https://API-VD.miraiprofile2005.repl.co/tn/tantrai")).data.data;

    axios.get('https://bb.banglon.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            
                     body: `→ 𝐓𝐢𝐦𝐞 ${gio}🧸\n➞ 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}🖤\n●━━●『 Huy 』●━━●\n→ 「 𝙏𝙝𝙞́𝙣𝙝 」: 『 ${thơ} 』 \n→ 𝐇𝐚̃𝐲 𝐭𝐚̣̂𝐧 𝐡𝐮̛𝐨̛̉𝐧𝐠 𝐩𝐡𝐮́𝐭 𝐠𝐢𝐚̂𝐲 𝐜𝐡𝐢𝐥𝐥 𝐧𝐡𝐞́🥰\n→ 𝐍𝐡𝐚̣𝐜 𝐨̛̉ 𝐝𝐮̛𝐨̛́𝐢 đ𝐚̂𝐲👇`, 
						
            attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
  }*/