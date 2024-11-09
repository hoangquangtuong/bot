module.exports.config = {
  name: "duyetbox",
  version: "1.0.2",
  hasPermssion: 3,
  credits: "DungUwU",
  description: "Duyệt người dùng hoặc nhóm sử dụng Bot",
  commandCategory: "Hệ thống admin-bot",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const onPath = __dirname + "/cache/on.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
  if (!fs.existsSync(onPath)) fs.writeFileSync(onPath, JSON.stringify({ uwu : false }, null, 4));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;
  //if (event.senderID != 100078004367335) return api.sendMessage(`[🐲]➜ Donate Mbbank/Momo: 0914508691 nhé ❤️`, event.threadID, event.messageID)
  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));
  let on = JSON.parse(fs.readFileSync(onPath));
  
  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "list") {
    msg = "[🐲] MIRAI [🐲]\n[🐲]➜ Danh sách các nhóm đã duyệt";
    let count = 0;
    for (e of data) {
       let name = (await api.getThreadInfo(e)).name || "Nhóm Chat";
      msg += `\n[🐲]➜ ${count += 1}. ${name}\n[🐲]➜ ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "del") {
   let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage("[🐲] MIRAI [🐲]\n[🐲]➜ Không phải một con số", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage("[🐲] MIRAI [🐲]\n[🐲]➜ Nhóm không được duyệt từ trước", threadID, messageID);
    api.sendMessage(`[🐲] MIRAI [🐲]\n[🐲]➜ Nhóm ${threadName}\n[🐲]➜ ID: ${idBox} đã bị gỡ khỏi danh sách được phép sử dụng Bot`, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "pending") {
   
    msg = "[🐲] MIRAI [🐲]\n[🐲]➜ Danh sách nhóm đang chờ phê duyệt";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || "[🐲] Nhóm Chat [🐲]";
      msg += `\n[🐲]➜ ${count += 1}. ${name}\n[🐲] ➜ ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
     } else if (args[0] == "on") {
      on.uwu = true;
      fs.writeFileSync(onPath, JSON.stringify(on, null, 4));
      api.sendMessage("➜ Đã bật duyetbox.\n➜ Chỉ có các nhóm đã được duyệt mới có thể sử dụng bot", threadID, messageID);
    } else if (args[0] == "off") {
      on.uwu = false;
      fs.writeFileSync(onPath, JSON.stringify(on, null, 4));
      api.sendMessage("➜ Đã tắt duyetbox.\n➜ Mọi người có thể dùng thoải mái", threadID, messageID);
  }
  
  else if (isNaN(parseInt(idBox))) api.sendMessage("[🐲] MIRAI [🐲]\n[🐲]➜ ID bạn nhập không hợp lệ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`[🐲] MIRAI [🐲]\n[🐲]➜ ID ${idBox} đã được phê duyệt từ trước`, threadID, messageID);
  else api.sendMessage("[🐲] MIRAI [🐲]\n[🐲]➜ Nhóm đã được Admin duyệt để sử dụng", idBox, (error, info) => {
    if (error) return api.sendMessage("[🐲] MIRAI [🐲]\n[🐲]➜ Đã có lỗi xảy ra, đảm bảo rằng ID bạn nhập hợp lệ và Bot đang ở trong nhóm", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(`[🐲] MIRAI [🐲]\n[🐲]➜ Phê duyệt thành công nhóm: ${idBox}`, threadID, messageID);
    }
  });
}