module.exports.config = {
  name: "gái1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Toàn",
  description: "Kiểm tra thông tin fb admin .",
  commandCategory: "Thông tin admin",
  usages: "fb",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/5GO8wOS.mp4",
"https://i.imgur.com/HhD9Pw7.mp4",
"https://i.imgur.com/0lKNNvA.mp4",
"https://i.imgur.com/eVEoKmb.mp4",
"https://i.imgur.com/fu5IEDX.mp4",
"https://i.imgur.com/ogEiBC9.mp4",
"https://i.imgur.com/awxwjWw.mp4",
"https://i.imgur.com/GF2xE7b.mp4",
"https://i.imgur.com/tjEKHN3.mp4",
"https://i.imgur.com/RV9Kf0i.mp4",
"https://i.imgur.com/CmKjPtb.mp4",
"https://i.imgur.com/PuHerYZ.mp4",
"https://i.imgur.com/oJQT2G9.mp4",
"https://i.imgur.com/3xSF7ci.mp4",
"https://i.imgur.com/p1CGRgZ.mp4",
"https://i.imgur.com/eRk430q.mp4",
"https://i.imgur.com/T6Ebv5p.mp4",
"https://i.imgur.com/rwS4xzp.mp4",
"https://i.imgur.com/deWuoEx.mp4",
"https://i.imgur.com/Lk2kChp.mp4",
"https://i.imgur.com/HMX0nKd.mp4",
"https://i.imgur.com/44AVXmi.mp4",
"https://i.imgur.com/KzLNZH9.mp4",
"https://i.imgur.com/pAsGMfg.mp4",
"https://i.imgur.com/IgTrpCR.mp4",
"https://i.imgur.com/yGRJC3P.mp4",
"https://i.imgur.com/8aRAdEt.mp4",
"https://i.imgur.com/P9FEJuy.mp4",
"https://i.imgur.com/sizyrj9.mp4",
"https://i.imgur.com/Xj0zuKJ.mp4",
"https://i.imgur.com/YZFKZXa.mp4",
"https://i.imgur.com/blwauOy.mp4",
"https://i.imgur.com/ttaHtVa.mp4",
"https://i.imgur.com/zb8AmwW.mp4",
"https://i.imgur.com/tER3Lyw.mp4",
"https://i.imgur.com/cul5kHs.mp4",
"https://i.imgur.com/BlXzK9Y.mp4",
"https://i.imgur.com/A7jwSvB.mp4",
"https://i.imgur.com/rWwZRbo.mp4",
"https://i.imgur.com/P2lGzUP.mp4",
"https://i.imgur.com/v7vhGup.mp4",
"https://i.imgur.com/BbIjHX4.mp4",
"https://i.imgur.com/dhHWgTK.mp4",
"https://i.imgur.com/RqHUF5K.mp4",
"https://i.imgur.com/pLnLojs.mp4",
"https://i.imgur.com/TcGQ0vq.mp4",
"https://i.imgur.com/zFGivf3.mp4",
"https://i.imgur.com/YusC0xr.mp4",
"https://i.imgur.com/tsWOUFA.mp4"
];
  var callback = () => api.sendMessage({body:`𝘀𝘂𝗼̂́𝘁 𝗻𝗴𝗮̀𝘆 𝗴𝗮́𝗶 𝗴𝗮́𝗶😼 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };