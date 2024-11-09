module.exports.config = {
  name: "aicover",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "hphuong",
  description: "xem các ai đồ cover",
  commandCategory: "THÀNH VIÊN",
  usages: "số thứ tự",
  cooldowns: 0,
  envConfig: {
    cooldownTime: 1200000
  }
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "aicover.jpg")) request("https://i.imgur.com/T5FZNko.jpeg").pipe(fs.createWriteStream(dirMaterial + "aicover.jpg"));
}
module.exports.run = async function ({ event, api , args, Users, Threads}){
  const fs = require("fs");
  let name1 = await Users.getNameUser(event.senderID)
  var name = ["Sexy", "Gái nga", "Ganyu", "Twitter", "LGBT", "Loli", "Blackpink", "Tát", "Wallpaper", "Trai", "Jack", "Nude", "Instagram", "Kiss", "Ngực", "Meme", "Hentai", "Gái", "Mông", "Cosplay", "Kurumi", "Liên quân", "Lucy", "Sagiri", "Chitanda", "Rem", "Anime", "Naughty", "Wibu", "Beo", "Ausand", "Shiba", "Khánh Huyền", "Ngọc Trinh", "Linh Ngọc Đàm", "Jimmy", "Lê Bống", "Sex", "Độ Mixi", "Cặp đôi", "Streamer Hanna", "Nobra", "Gái Sexy", "Gái Xinh", "Trai đẹp", "Background 4K", "Anime Hot", "Gái Japan", "Gái China", "Hololive", "Hot Twitter", "Hot Instagram", "Gái VSBG", "Ảnh Phan TrầnAnh Tâm", "Ảnh Sex 18+", "Japan", "VSBG Hot"]
  var b = name.length;
  var page = 1;
  page = parseInt(args[0]) || 1;
  page < -1 ? page = 1 : "";
  var limit = 10;
  var numPage = Math.ceil(b / limit);
  var msg = `✅===「 𝗔𝗜 𝗖𝗢𝗩𝗘𝗥 」===✅\n━━━━━━━━━━\n`;
  var x = 1;
  for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
      if (i >= b) break;
      msg += ``;
  }
  msg += `𝟭. 𝗦𝗼̛𝗻 𝗧𝘂̀𝗻𝗴 𝗠-𝗧𝗣\n𝟮. 𝗗𝗲𝗻 𝗩𝗮̂𝘂\n𝟯. 𝗝𝗮𝗰𝗸 - 𝗝𝟵𝟳\n𝟰. 𝗗𝗼𝗻𝗹𝗱 𝗝 𝗧𝗿𝘂𝗺𝗽\n𝟱. 𝗣𝘂𝘁𝗶𝗻\n𝟲. 𝗝𝗼𝗲 𝗯𝗶𝗱𝗲𝗻\n\n━━━━━━━━\n${name1} 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝗻𝗵𝗮 🎎`;
  return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/aicover.jpg`)}, event.threadID, (error, info) =>
  {
    global.client.handleReply.push(
    {
      name: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
      type: "choose"
    });
  }, event.messageID);
}
module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
  const axios = require("axios");

          if(event.body == "1"){
       var url = "https://apiapihoangphuong.cutecana.repl.co/sontung"
}
       else if(event.body == "2"){
       var url = "https://apiapihoangphuong.cutecana.repl.co/denvau"
}
       else if(event.body == "3"){
       var url = "https://apiapihoangphuong.cutecana.repl.co/jack"
}
        else if(event.body == "4"){
        var url = "https://apiapihoangphuong.cutecana.repl.co/donld"
}
        else if(event.body == "5"){
        var url = "https://apiapihoangphuong.cutecana.repl.co/putin"
}
       else if(event.body == "6"){
        var url = "https://apiapihoangphuong.cutecana.repl.co/joe"
}

  switch(handleReply.type){
  case "choose":{
    //
    let { author, answer, messageID } = handleReply;
  if (event.senderID != author) return api.sendMessage("xin lỗi bạn không phải người dùng lệnh 🧸", event.threadID, event.messageID);
    //phần này để cho bot ngăn thằng khác chọn dùm
  api.unsendMessage(handleReply.messageID);
  const res = await axios.get(url);
  const fs = require ("fs");
  let name = await Users.getNameUser(event.senderID)
  const data = res.data.url;
  const download = (await axios.get(data, {
      responseType: "stream"
  })).data;
 return api.sendMessage({body: `đây😘  ( ${name} )`, attachment : download}, event.threadID)
}
  }};
                                                             