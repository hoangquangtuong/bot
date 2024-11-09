const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `datr=72N8Y2RGIDfS7o8zJuZraqtz;sb=72N8Yyr7UchIpKy6CRC_jKEc;fr=0xNh2mMnFnanHAMQs.AWUE48nqWrT6MJkSXLZrlr60RSE.BjfGPv.ob.GN8.0.0.Bji_Xm.AWXY8MZ3p7s;c_user=100080119130803;xs=42%3Amn8YUH0FcN8KFw%3A2%3A1670116838%3A-1%3A15370;m_page_voice=100080119130803;m_pixel_ratio=1.5;x-referer=eyJyIjoiL2Jvb2ttYXJrcy8%2FcGFpcHY9MCZlYXY9QWZhc3NVSmZZN0ZaSUFWcTNOYzhuTm56SU5KY21TYW9xSzllNUdicGJYOXl6eUNpV05JRDJ0RFQ0NS1IRHdYV214USIsImgiOiIvYm9va21hcmtzLz9wYWlwdj0wJmVhdj1BZmFzc1VKZlk3RlpJQVZxM05jOG5ObnpJTkpjbVNhb3FLOWU1R2JwYlg5eXp5Q2lXTklEMnREVDQ1LUhEd1hXbXhRIiwicyI6Im0ifQ%3D%3D;dpr=1.5;wd=980x1421;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1670146282158%2C%22v%22%3A1%7D;
`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=1438aa&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `Ây dô xong rồi nè ${name}`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
          }