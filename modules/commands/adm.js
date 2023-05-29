const fs = require("fs");
module.exports.config = {
name: "adm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "adm",
	commandCategory: "Không cần dấu lệnh",
	usages: "Prefix",
	cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("adm")==0 || 
event.body.indexOf("Adm")==0 ||
event.body.indexOf("admin")==0 ||
//event.body.indexOf("")==0 ||
event.body.indexOf("Admin")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://imgur.com/L7cMcYr.mp4",
"https://imgur.com/8mFSNay.mp4",
"https://imgur.com/pyfaF0e.mp4",
  ];
  var callback = () => api.sendMessage({body:`=====ADMIN=====
😊  𝑻𝒆̂𝒏:   Hoàng Quang Tường
💮 𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉: Qtuong cutiii
❎ 𝑻𝒖𝒐̂̉𝒊: 𝟏9+ 𝐓𝐮ổ𝐢
👤 𝑮𝒊𝒐̛́𝒊 𝒕𝒊́𝒏𝒉: 𝐧𝐚𝐦
💘 𝑴𝒐̂́𝒊 𝒒𝒖𝒂𝒏 𝒉𝒆̣̂: ế toàn tập
🌎 𝑸𝒖𝒆̂ 𝒒𝒖𝒂́𝒏: Quảng Trị
👫 𝑮𝒖: ???
🌸 𝑻𝒊́𝒏𝒉 𝒄𝒂́𝒄𝒉: 𝒏𝒉𝒂̂𝒚, 𝒗𝒖𝒊 𝒕𝒊́𝒏𝒉, 𝒉𝒐𝒂̀ 𝒅𝒐̂̀𝒏𝒈 :]]
🌀 𝑺𝒐̛̉ 𝒕𝒉𝒊́𝒄𝒉: 𝑪𝒉𝒐̛𝒊 𝒈𝒂𝒎𝒆, 𝒙𝒆𝒎 𝒑𝒉𝒊𝒎 𝒂𝒏𝒊𝒎𝒆 𝒃𝒍𝒂𝒃𝒍𝒂, 𝒂̆𝒏, 𝒏𝒈𝒖̉, :𝑫
💻𝑪𝒐𝒏𝒕𝒂𝒄𝒕💻
☎ 𝑺𝑫𝑻&𝒁𝒂𝒍𝒐:0399 259 628
🌐 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌:https://www.facebook.com/copyrightQuangTuong.Developers
✉️ 𝑬𝒎𝒂𝒊𝒍: 𝒉𝒐𝒏𝒈 𝒃𝒊́𝒄
------------
✔𝑫𝒐𝒏𝒂𝒕𝒆:
💳mb bank:13570399255555
💳momo:0399259628
----Quang Tuong ----`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };