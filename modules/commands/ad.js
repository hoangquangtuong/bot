const request = require('request');

const fs = global.nodemodule["fs-extra"]

module.exports.config = {

  name: "ad",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "JRT",

  description: "Kiểm tra thông tin adminbot",

  commandCategory: "Thông tin",

  usages: "ad",

  cooldowns: 0,

  dependencies: {

"request": ""

}

};
module.exports.run = async({api,event,args,Users,global,Currencies}) => {

var callback = () => api.sendMessage(

  {body:`=== 『𝑻𝒉𝒐̂𝒏𝒈 𝑻𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 𝑩𝒐𝒕』 ===\n

[👀]→ Tên: Hoàng Quang Tường 
[💮]→ Biệt danh: Qtuong  
[❎]→ Ngày tháng năm sinh: 25/06
[👤]→ Giới tính: Nam
[💫]→ Chiều cao cân nặng: 1m70 x 60kg
[❤️]→ Tên duyên phận: 
[💥]→ Ngày sinh: 
[💘]→ Mối quan hệ: ế bền vững
[🌎]→ Quê quán: Quảng trị
[🌸]→ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀]→ Sở thích: Thích cái đẹp, đi phượt, chơi game, thưởng thức các món ẩm thực khác nhau

=== 『CONTACT』 ===

[👉]→ Information: 
[☎]→ SĐT & Zalo: 0399259628
[🌐]→ Facebook: https://www.facebook.com/copyrightQuangTuong.Developers
[✉️]→ Email:   || 

=== 『DONATE』 ===

[💵]→ Momo: 0399259628

[💵]→ Mbbank: 13570399255555 / 

=== 『PROBLEM』 ===

[❗]→ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌]→ Hãy đồng hành cùng BOT KTH và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]→ Bot được điều hành bởi Quang Tường `,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://graph.facebook.com/${100078004367335}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };