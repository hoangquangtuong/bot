module.exports.config = {
	name: "vdanime",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Sơnkb",
	description: "Xem Video Ảnh Anime",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies }) {
try {
  /*if(event.body.toLowerCase() == "vdanime"){
    let name = await Users.getNameUser(event.senderID);*/
  const moment = require("moment-timezone");
  const time = process.uptime();
		 var hours = Math.floor(time / (60 * 60));
		var minutes = Math.floor((time % (60 * 60)) / 60);
	var seconds = Math.floor(time % 60);
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐇Ủ 𝐍𝐇Ậ𝐓'
  if (thu == 'Monday') thu = '𝐓𝐡ứ 𝐡𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐇Ứ 𝐁𝐀'
  if (thu == 'Wednesday') thu = '𝐓𝐇Ứ 𝐓Ư'
  if (thu == "Thursday") thu = '𝐓𝐇Ứ 𝐍Ă𝐌'
  if (thu == 'Friday') thu = '𝐓𝐇Ứ 𝐒Á𝐔'
  if (thu == 'Saturday') thu = '𝐓𝐇Ứ 𝐁Ả𝐘'
       const getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đê𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮ổ𝐢 𝐬á𝐧𝐠" : getHours < 12 ? "𝐛𝐮ổ𝐢 𝐭𝐫ư𝐚" : getHours < 17 ? "𝐛𝐮ổ𝐢 𝐜𝐡𝐢ề𝐮" : getHours < 23 ? "𝐛𝐮ổ𝐢 𝐭ố𝐢" : "đê𝐦 𝐤𝐡𝐮𝐲𝐚"}`
  const axios = require('axios')
  var thơ = (await axios.get("https://API-VD.miraiprofile2005.repl.co/tn/tho")).data.data;
  let uid = event.senderID;
  const resp = (await axios.get('https://golike.com.vn/func-api.php?user=' + uid)).data
  return api.sendMessage({body:`=======𝐕𝐃𝐀𝐍𝐈𝐌𝐄=======\n𝐓𝐇Í𝐍𝐇 ${thơ}\n==================\nHôm Này Là Thứ ${thu}\nBầy Giờ Là ${gio}\nChúc Bạn Có Một ${session} Tốt Lành\n\nĐây Có Phải Là Ngày Giờ Bạn Tạo Tài Khoản Facebook Không?: ${resp.data.date}\nLink Facebook của Bạn\nhttps://www.facebook.com/${uid}\nĐã Online Được ${hours} Giờ ${minutes} Phút ${seconds} Giây!!`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://API-VD.miraiprofile2005.repl.co/images/videoanime')).data.data,
method: "GET",
responseType: "stream"
})).data                                      }, event.threadID, event.messageID)
} catch(e){
console.log(e)
}
}