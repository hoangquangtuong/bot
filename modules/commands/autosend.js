module.exports.config = {
    name: 'auto',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'ADMIN',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '11:00:00 PM',
    message: ['==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat !callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat .help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/copyrightQuangTuong.Developers\nZL •0399259628', '==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat !callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/copyrightQuangTuong.Developers \nZL • 0399259628']
},
{
    timer: '5:00:00 PM',
    message: ['==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat .callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/copyrightQuangTuong.Developers\nZL • 0399259628', '==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat !callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/copyrightQuangTuong.Developers\nZL • 0399259628']
},
{
    /*timer: '5:30:00 AM',
    message: ['==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat .callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/kieutrunghieu207\nZL • 0914508691', '==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat !callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/kieutrunghieu207\nZL • 0914508691']
},
{*/
    timer: '11:30:00 AM',
    message: ['==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat !callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB •https://www.facebook.com/copyrightQuangTuong.Developers\nZL• 0399259628', '==== [ NOTE ] ====\n> Thuê Bot Liên Hệ FB - ZL\n> Mua File Bot Liên Hệ FB - ZL\n> Chat !callad Để Liên Lạc Với Bọn Admin Lỏk 😹\n> Chat !help Để Xem All Lệnh Trên Bot\n===============\nFB • https://www.facebook.com/copyrightQuangTuong.Developers \nZL • ']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};