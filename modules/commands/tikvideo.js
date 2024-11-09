module.exports.config = {
    name: "tikvideo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "",
    commandCategory: "tiện ích",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
		"axios": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) =>   {
  try {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
let text = args.join(" ")
  if (!text) return api.sendMessage('Vui nhập link video', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
 const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
const res = await axios.get
(`https://API-ThanhAli.thanhali.repl.co/tiktok/downloadvideo?url=${link}`);
const { play, author, digg_count, comment_count, play_count, share_count, download_count, title, duration, region } = res.data.data;


	 var callback = () => api.sendMessage({body:`=== 𝐕𝐈𝐃𝐄𝐎 𝐓𝐈𝐊𝐓𝐎𝐊 ===\n\n→ Quốc gia: ${region}\n→ Tiêu đề: ${title}\n→ Tên kênh: ${author.nickname}\n→ ID người dùng: ${author.unique_id}\n→ Lượt tim: ${digg_count}\n→ Tổng bình luận: ${comment_count}\n→ Lượt xem: ${play_count}\n→ Lượt chia sẻ: ${share_count}\n→ Lượt tải: ${download_count}\n→ Thời gian: ${duration} giây`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"), messageID);
        request(encodeURI(`${play}`)).pipe(fs.createWriteStream(__dirname + '/cache/tkvd.mp4')).on('close', () => callback());
       }
   catch (err) {
        console.log(err)
        return api.sendMessage("Không thể xử lý yêu cầu của bạn!", event.threadID);
    }  
}