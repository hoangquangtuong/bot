module.exports.config = {
    name: '6',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'ADMIN',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '6:05:00 AM',
    message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n']
},
              {
     timer: '8:01:00 AM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']
        },
              {
     timer: '10:10:00 AM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}']
        },
              {
     timer: '12:05:00 AM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']
        },
    {
     timer: '2:10:00 PM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']     
    },
        {
     timer: '4:02:00 PM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']
        },
              {
     timer: '6:05:00 PM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']
        },
             {
     timer: '8:05:00 PM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']
        },
             {
     timer: '4:11:00 AM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n']
        },
        {
        timer: '4:11:00 PM',
        message: ['\n➝ Bot đã onl được : {hours} giờ {minutes} phút {seconds} giây\n\n{thinh}\n\n']
    }];
module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
        const attachment = (await global.nodemodule["axios"]({
            url: (await global.nodemodule["axios"]('https://caochungdat.me/docs/images/cosplaygenshin')).data.url,
            method: "GET",
            responseType: "stream"
        })).data;
        const res = await axios.get(`https://caochungdat.me/docs/other/thinh`);
var thinh = res.data.url;
         const time = process.uptime();
		 var hours = Math.floor(time / (60 * 60));
		var minutes = Math.floor((time % (60 * 60)) / 60);
	var seconds = Math.floor(time % 60);
        global.data.allThreadID.forEach(async i => await o.api.sendMessage({
            body: r(á.message)
            .replace(/{thinh}/g, thinh)
          .replace(/{hours}/g, hours).replace(/{minutes}/g, minutes).replace(/{seconds}/g, seconds), attachment
        }, i));
    };
}, 1000);
module.exports.run = o => {};