module.exports.config = {
    name: 'thoitiet',
    version: 'beta',
    hasPermssion: 0,
    credits: 'DC-Nam',// Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'tiện ích',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '7:55:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '11:40:00 PM',
    message: ['khuya rồi ngủ sớm đi. Baiiii']
}];
module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
     const axios = require('axios');
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hà Nội')}`);
    var abc = `=====「 𝗧𝗵𝗼̛̀𝗶 𝗧𝗶𝗲̂́𝘁 」=====\n━━━━━━━━━━━━━━━━━━━━━━━━\n→ Cập nhật thời tiết tại: ${res.data[0].location.name}\n→ Vào lúc: ${res.data[0].current.day} ${res.data[0].current.date}\n→ Nhiệt độ: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n→ Mô tả: ${res.data[0].current.skytext}\n→ Độ ẩm:${res.data[0].current.humidity}\nHướng gió: ${res.data[0].current.winddisplay}\nGhi nhận lúc: ${res.data[0].current.observationtime} `;
      
   global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message).replace(/{abc}/g, abc), i));
    };
}, 1000);

module.exports.run = async o => {
  try{
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const { api, event, args } = o;
	const { threadID, messageID } = event;
  var bok = args.join(" ");
  if(!bok) return api.sendMessage("nhập tỉnh/tp cần xem thời tiết", threadID);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
  const a = res.data[0].forecast;
  var text = `Thời tiết của: ${bok} vào các ngày`;
  for (let i = 0; i < 5; i++) {
    text += `\n${i+1}-> ${a[i].day} ${a[i].date}\n=>Nhiệt độ dự báo: từ ${a[i].low} đến ${a[i].high}\n=>Mô tả: ${a[i].skytextday}\n=>Tỷ lệ mưa: ${a[i].precip}\n`
  };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
  }