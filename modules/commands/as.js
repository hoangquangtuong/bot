module.exports.config = {
  name: "sex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("sex")==0 || (event.body.indexOf("Sex")==0) || event.body.indexOf("Video sex")==0 ||
event.body.indexOf("video sex")==0 ||
event.body.indexOf("địt nhau")==0 ||
event.body.indexOf("Địt nhau")==0 ||
event.body.indexOf("18+")==0 ||
event.body.indexOf("thèm địt")==0 ||
event.body.indexOf("Thèm địt")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://imgur.com/kUaFs8L.mp4",
      "https://imgur.com/ME5nLzS.mp4",
      "https://imgur.com/9cK6TYL.mp4",
      "https://imgur.com/szi6tpT.mp4",
      "https://imgur.com/uiApf1Y.mp4",
      "https://imgur.com/3cyf3TO.mp4",
      "https://imgur.com/zL4dqJX.mp4",
      "https://imgur.com/kcAEH5D.mp4",
      "https://imgur.com/nESCubS.mp4",
      "https://imgur.com/1QDbHqT.mp4",
      "https://imgur.com/LQE17Hn.mp4",
      "https://imgur.com/qAzgtsf.mp4",
      "https://imgur.com/uCJ7rS8.mp4",
      "https://imgur.com/6529sSA.mp4",
      "https://imgur.com/wDZtaEQ.mp4",
      "https://imgur.com/LiIRCbS.mp4",
      "https://imgur.com/vMdPppo.mp4",
      "https://imgur.com/4siTDfy.mp4",
      "https://imgur.com/QikfmLL.mp4",
      "https://imgur.com/lgRSa59.mp4",
      "https://imgur.com/Yn9uzZT.mp4",
      "https://imgur.com/xpfWYNg.mp4",
      "https://imgur.com/93aqGeV.mp4",
      "https://imgur.com/8jihHf9.mp4",
      "https://imgur.com/qid4hLs.mp4",
      "https://imgur.com/VBH8qTj.mp4",
      "https://imgur.com/phRw9mM.mp4",
      "https://imgur.com/QR8jWIe.mp4",
            ];
     var callback = () => api.sendMessage({body:`𝐒𝐞̃ 𝐠𝐚̂̀𝐲 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐞 𝐥𝐨̂̀𝐧 𝐦𝐮́𝐩 𝐦𝐮̣𝐩 𝐜𝐮̉𝐚 𝐦𝐚̀𝐲 đ𝐚̂́𝐲 𝐬𝐮𝐨̂́𝐭 𝐧𝐠𝐚̀𝐲 𝐬𝐮̣𝐜 𝐜𝐮 𝐜𝐨́ 𝐧𝐠𝐚̀𝐲 𝐠𝐚̃𝐲 𝐜𝐚̣̆𝐜😏\n\n-> Thả icon(😠) để được gỡ video `,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };