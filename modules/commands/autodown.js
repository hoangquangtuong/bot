let axios = require('axios');
let fs = require('fs');

let is_url = url=>/^http(s|):\/\//.test(url);
let stream_url = (url, type)=>axios.get(url, {
  responseType: 'arraybuffer'
}).then(res=> {
  let path = __dirname+'/cache/'+Date.now()+'.'+type;

  fs.writeFileSync(path, res.data);
  setTimeout(p=>fs.unlinkSync(p), 1000*60, path);

  return fs.createReadStream(path);
});
let data = {};
let path = __dirname+'/cache/status_auto_down.json';
let save = ()=>fs.writeFileSync(path, JSON.stringify(data));

if (!fs.existsSync(path))save(); else data = require(path);

let all_app = [
  'tiktok',
  'facebook',
  'instagram',
  'youtube',
  'pinterest',
  'imgur'
];

exports.config = {
  name: 'autodown',
  version: '0.0.1',
  hasPermssion: 2,
  credits: 'DC-Nam',
  description: '.',
  commandCategory: 'Hệ Thống',
  usages: '[]',
  cooldowns: 3
};
exports.run = function(o) {
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
  send(`[====[ AUTO ]====]\n\n${all_app.map(($, i)=>`${i+1}. ${$}`).join('\n')}\n\n-> Reply STT on/off (STT có thể cách nhau để on/off cùng lúc)`, (err, res)=> {
    res.name = exports.config.name,
    res.event = o.event;
    global.client.handleReply.push(res);
  });

};
exports.handleEvent = async function(o) {
  try {
    let status = data[o.event.threadID] || {};
    let a = o.event.args[0];
    let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
    let head = app=>`[====[ ${app.toUpperCase()} AUTO DOWN ]====]\n\n`;

    if (!is_url(a))return;
    if (!!status.tiktok && /tiktok\.com/.test(a)) {
      let res = await axios.post(`https://www.tikwm.com/api/`, {
        url: a
      });
      if (res.data.code != 0)throw res;

      let tiktok = res.data.data;
      let attachment = [];

      if (typeof tiktok.images == 'object')for (let image_url of tiktok.images)attachment.push(await stream_url(image_url, 'jpg')); else attachment.push(await stream_url(tiktok.play, 'mp4'));

      send({
        body: `${head('tiktok')}- Tiêu Đề: ${tiktok.title}\n- Lượt Thích: ${tiktok.digg_count}\n- Thời Lượng: ${(tiktok.duration)} Giây\n- Tác Giả: ${tiktok.author.nickname} (${tiktok.author.unique_id})`,
        attachment,
      });
    } else
      if (!!status.facebook && /facebook\.com/.test(a)) {
      let res = await axios.get(`https://apidown.site/api/down/media?url=${a}`);
      let fb = res.data;
      let fb_vd = fb.attachment.filter($=>$.__typename == 'Video');
      let fb_img = fb.attachment.filter($=>$.__typename == 'Photo');

      if (fb_vd.length > 0) {
        let form_msg = {};
        form_msg.body = fb.message;
        form_msg.attachment = [];
        for (let vd of fb_vd)form_msg.attachment.push(await stream_url(vd.playable_url_quality_hd, 'mp4'));

        send(form_msg);
      };
      if (fb_img.length > 0) {
        let form_msg = {};
        form_msg.body = fb.message;
        form_msg.attachment = [];
        for (let img of fb_img)form_msg.attachment.push(await stream_url((img.photo_image || img.image).uri, 'jpg'));

        send(form_msg);
      };
    } else
      if (!!status.youtube && /youtube\.com/.test(a)) {} else
      if (!!status.instagram && /instagram\.com/.test(a)) {} else
      if (!!status.pinterest && /(pinterest|pinimg)\.com/.test(a)) {
      if (/\.[^/]+$/.test(a)) {
        send({
          body: `${head('pinterest')}`,
          attachment: await stream_url(a, a.split('.').pop())
        });
      } else {
        let src = (await axios.get(a)).data.replace(/^[^]+,"image":"/, '').split('"')[0];
        send({
          body: `${head('pinterest')}- Link: ${src}`,
          attachment: await stream_url(src, src.split('.').pop()),
        });
      };

    } else
      if (!!status.imgur && /imgur\.com/.test(a)) {
      send({
        body: head('imgur'),
        attachment: await stream_url(a, a.split('.').pop()),
      })
    }

  }catch(e) {
    console.log(e);
  };
};
exports.handleReply = function(o) {
  let _ = o.handleReply;
  let t = o.event.threadID;
  let send = (msg, callback)=>o.api.sendMessage(msg, t, callback, o.event.messageID);

  if (o.event.senderID != _.event.senderID)return;
  if (!data[t])data[t] = {};

  let status_input = o.event.args.pop();

  for (let i of o.event.args)data[t][all_app[i-1]] = status_input == 'on'?true: false;

  save();
  send(`Hoàn tất.`);
};
// const fs = require("fs-extra"),
//     axios = require("axios")
// module.exports.config = {
//     name: "autodown",
//     version: "1.0.0",
//     hasPermssion: 0,
//     credits: "Thiệu Trung Kiên",
//     description: "Tự động tải xuống ảnh/video trong nhóm",
//     commandCategory: "tiện ích",
//     usages: "autodown",
//     cooldowns: 5
// }
// module.exports.run = async function () { }

// module.exports.handleEvent = async function ({ api, event }) {
//     if (this.checkLink(event.body)) {
//         var { type, url } = this.checkLink(event.body);
//         this.downLoad(url, type, api, event);
//     }
// }

// module.exports.downLoad = function (url, type, api, event) {
//     var time = Date.now();
//     var path = __dirname + `/cache/${time}.${type}`;
//     this.getLink(url).then(res => {
//         if (type == 'mp4') url = res.result.video.hd || res.result.video.sd || res.result.video.nowatermark || res.result.video.watermark;
//         else if (type == 'mp3') url = res.result.music.play_url
//         axios({
//             method: "GET",
//             url: url,
//             responseType: "arraybuffer"
//         }).then(res => {
//             fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
//             if (fs.statSync(path).size / 1024 / 1024 > 25) return api.sendMessage("File quá lớn, không thể gửi", event.threadID, () => fs.unlinkSync(path), event.messageID);
//             api.sendMessage({attachment: fs.createReadStream(path)
//             }, event.threadID, () => fs.unlinkSync(path), event.messageID);
//         });
//     }).catch(err => console.log(err));
// }

// module.exports.getLink = function (url) {
//     return new Promise((resolve, reject) => {
//         axios({
//             method: "GET",
//             url: `https://apidown.site/api/down/media?url=${url}`
//         }).then(res => resolve(res.data)).catch(err => reject(err));
//     });
// }

// module.exports.checkLink = function (url) {
//     const regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
//     const found = (url).match(regex);
//     var media = ['tiktok', 'facebook', 'douyin', 'youtube', 'youtu', 'twitter', 'instagram', 'kuaishou', 'fb']
//     if (this.isVaildUrl(String(found))) {
//         if (media.some(item => String(found).includes(item))) {
//             return {
//                 type: "mp4",
//                 url: String(found)
//             };
//         }
//         else if (String(found).includes("soundcloud") || String(found).includes("zingmp3")) {
//             return {
//                 type: "mp3",
//                 url: String(found)
//             }
//         }
//     }
//     return !1;
// }

// module.exports.isVaildUrl = function (url) {
//     var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
//     if (url.match(regex) == null) return !1;
//     return !0;
// }

// module.exports.handleEvent = async function ({ api, event }) {
//     if (this.checkLink(event.body)) {
//         var { type, url } = this.checkLink(event.body);
//         this.downLoad(url, type, api, event);
//     }}

  