module.exports.config = {
    name: "uocdie",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Minh Dương",
    description: "thôg tin adm",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "uocdie.mp4")) request("https://i.imgur.com/ztKjoAl.mp4").pipe(fs.createWriteStream(dirMaterial + "uocdie.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `🌸𝙐̛𝙤̛́𝙘 𝘿𝙞𝙚 𝘾𝙖́𝙞 𝙇𝙤̂̀𝙣 𝙈𝙚̣ 𝙈𝙖̀𝙮 !🌸`,
                attachment: fs.createReadStream(__dirname + `/noprefix/uocdie.mp4`)
            }
    if (event.body.toLowerCase() == "ước die"){
        return api.sendMessage(msg,event.threadID,event.messageID);} 
    if (event.body.toLowerCase() == "bố m ước đc die"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ước đc die"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "dame t đi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bố m ước die"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }