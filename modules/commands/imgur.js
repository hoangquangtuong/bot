/*module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "cc",
    description: "",
    commandCategory: "Game",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
const res = await axios.get(`https://Ryanair-Soucre-Api.chauminhtri2022.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
    
}*/

module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "cc",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
const res = await axios.get(`https://api-dien.28nguyen-thanht.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
    
  }
