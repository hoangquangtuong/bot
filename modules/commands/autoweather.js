module.exports.config = {
  name: 'autott',
  version: '10.02',
  hasPermssion: 2,
  credits: 'DC-Nam', // Bok idea thời tiết
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'Hệ thống support-bot',
  usages: 'autott',
  cooldowns: 3
};
const nam = [{

  timer: '6:00:00 AM',
  message: ['\n{abc}']
},
  {
    timer: '12:00:00 PM',
  message: ['\n{abc}']
},
           {
  timer: '6:00:00 PM',
  message: ['\n{abc}']
},
           {
  timer: '10:00:00 PM',
  message: ['\n{abc}']
},
           {
  timer: '0:00:00 PM',
  message: ['\n{abc}']
},
           {
  }];
module.exports.onLoad = o => setInterval(async() => {
  const r = a => a[Math.floor(Math.random()*a.length)];
  if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
const axios = require('axios');
const time = process.uptime();
   var hours = Math.floor(time / (60 * 60));
  var minutes = Math.floor((time % (60 * 60)) / 60);
var seconds = Math.floor(time % 60);
var msg = r(á.message);
const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hồ Chí Minh')}`);
  var abc =`[🐲]=== 『 NOTIFICATION WEATHER 』 ===[🐲]\n◆━━━━━━━━━━━━━━━━◆\n\n[🐲]➜ 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗼̛̀𝗶 𝘁𝗶𝗲̂́𝘁 𝘁𝗮̣𝗶 ${res.data[0].location.name}\n[🐲]➜ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.day} ${res.data[0].current.date}\n[🐲]➜ 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n[🐲]➜ 𝗠𝗼̂ 𝘁𝗮̉: ${res.data[0].current.skytext}\n[🐲]➜ đ𝗼̣̂ 𝗮̂̉𝗺: ${res.data[0].current.humidity}\n[🐲]➜ 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗴𝗶𝗼́: ${res.data[0].current.winddisplay}\n[🐲]➜ 𝗚𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.observationtime} \n\n[🐲]➜ 𝐍𝐡𝐚̣̂𝐩 ${global.config.PREFIX}weather 𝐭𝐢̉𝐧𝐡/𝐭𝐡𝐚̀𝐧𝐡 𝐩𝐡𝐨̂́ đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̛̀𝐢 𝐭𝐢𝐞̂́𝐭 𝐧𝐡𝐞́!!!!`;
  msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
msg = msg.replace(/{minutes}/g, minutes)
msg = msg.replace(/{seconds}/g, seconds)
  msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/hearing?apikey=JRTvip_2200708248`)).data.data)
          msg = {
              body: msg, attachment: (await axios.get((await axios.get(`https://docs-api.jrtxtracy.repl.co/images/girl?apikey=JRTvip_2200708248`)).data.data, {
                  responseType: 'stream'
              })).data
          };
 global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
  };
}, 1000);

module.exports.run = async o => {
  try {
      const axios = global.nodemodule["axios"];
      const fs = global.nodemodule["fs-extra"];
      const request = global.nodemodule["request"];
      const { api, event, args } = o;
      const { threadID, messageID } = event;
      var bok = args.join(" ");
      if (!bok) return api.sendMessage("[🐲]➜ Nhập tỉnh/tp cần xem thời tiết", threadID);
      const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
      const bokk = res.data[0].forecast;
      var text = `[🐲]➜ Thời tiết của: ${bok} vào các ngày`;
      for (let i = 0; i < 5; i++) {
          text += `\n${i + 1}. ${bokk[i].day} ${bokk[i].date}\n[🐲]➜ Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n[🐲]➜ Mô tả: ${bokk[i].skytextday}\n[🐲]➜ Tỷ lệ mưa: ${bokk[i].precip}\n`
      };
      api.sendMessage(text, threadID, messageID)
  } catch (err) { api.sendMessage(`${err}`, threadID) }
}  