module.exports.config = {
    name: 'xsmb',
    version: 'beta',
    hasPermssion: 0,
    credits: 'DC-Nam',// Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '5:27:00 PM',
    message: ['\n{abc}']
},
             {
    timer: '5:56:00 PM',
    message: ['test']
}];
module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
     const axios = require('axios');
  const res = await axios.get(`https://thieutrungkien.dev/xsmb`);
    var abc = `${res.data.data.date}\nGiải Đặc Biệt: ${res.data.data.giaidacbiet}`;
      
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
  const res = await axios.get(`https://thieutrungkien.dev/xsmb`);
  const bokk = res.data.data;
  var text = `${res.data.data.date}\n\nGiải Đặc Biệt: ${res.data.data.giaidacbiet}`;
  for (let i = 0; i < 5; i++) {
    text += `\nGiải ${i+1}: ${bokk.giai1}`
  };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
  }