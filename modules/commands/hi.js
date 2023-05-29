/*let fs = require("fs-extra");
module.exports.config = {
    name: "hi",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "Kanichi fix by TTK",
    description: "dùng đi rồi biết :v",
    commandCategory: "Gọi bot",
    usages: "[on/off]",
    cooldowns: 5,
    denpendencies: {
        axios: "",
        "moment-timezone": "",
        "fs-extra": ""
    }
}, module.exports.onLoad = () => {
    let request = require("request"),
        dirMaterial = __dirname + "/noprefix/";
    fs.existsSync(dirMaterial + "noprefix") || fs.mkdirSync(dirMaterial, {
        recursive: !0
    }), fs.existsSync(dirMaterial + "bai.gif") || request("https://i.imgur.com/uVALChk.gif").pipe(fs.createWriteStream(dirMaterial + "bai.gif")), fs.existsSync(dirMaterial + "ngủ.gif") || request("https://i.pinimg.com/originals/0f/e1/16/0fe1161b019a6d11f39d267c284ec67d.gif").pipe(fs.createWriteStream(dirMaterial + "ngủ.gif"))
}, module.exports.handleEvent = async ({
    event,
    api,
    Users
}) => {
    let {
        get: get
    } = require("axios"), {
        threadID: threadID,
        senderID: senderID
    } = event, m = (await get("https://apimyjrt.nguyenhaidang.ml/hololive.php")).data.data, cc = (await get(m, {
        responseType: "stream"
    })).data, moment = require("moment-timezone"), data2 = ["𝒕𝒐̂́𝒕 𝒍𝒂̀𝒏𝒉 🥰", "𝒗𝒖𝒊 𝒗𝒆̉ 😄", "𝒉𝒂̣𝒏𝒉 𝒑𝒉𝒖́𝒄 ❤️", "𝒚𝒆̂𝒖 đ𝒐̛̀𝒊 😘"], text = data2[Math.floor(Math.random() * data2.length)], hours = moment.tz("Asia/Ho_Chi_Minh").format("HHmm"), session = hours > 0 && hours <= 400 ? "𝒔𝒂́𝒏𝒈 𝒕𝒊𝒏𝒉 𝒎𝒐̛" : hours > 401 && hours <= 700 ? "𝒔𝒂́𝒏𝒈 𝒔𝒐̛́𝒎" : hours > 701 && hours <= 1e3 ? "𝒔𝒂́𝒏𝒈" : hours > 1001 && hours <= 1200 ? "𝒕𝒓𝒖̛𝒂" : hours > 1201 && hours <= 1700 ? "𝒄𝒉𝒊𝒆̂̀𝒖" : hours > 1701 && hours <= 1800 ? "𝒄𝒉𝒊𝒆̂̀𝒖 𝒕𝒂̀" : hours > 1801 && hours <= 2100 ? "𝒕𝒐̂́𝒊" : hours > 2101 && hours <= 2400 ? "𝒕𝒐̂́𝒊 𝒎𝒖𝒐̣̂𝒏" : "lỗi", name = await Users.getNameUser(senderID), msg = {
        body: `𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ${name}, 𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}`,
        attachment: cc
    }, msg2 = {
        body: `𝐁𝐚𝐢 𝐛𝐚̣𝐧 ${name}, 𝐒𝐞𝐞 𝐲𝐨𝐮 𝐧𝐞𝐱𝐭 𝐭𝐢𝐦𝐞❤️`,
        attachment: cc
    }, msg3 = {
        body: `𝑪𝒉𝒖́𝒄 ${name} 𝒏𝒈𝒖̉ 𝒏𝒈𝒐𝒏 𝒏𝒉𝒆́ 😘`,
        attachment: cc
    };
    if (1 == config.autoSend) {
        if (["hi", "chào", "hello", "Hello", "Hi", "Chào", "hey", "Hey", "Hí", "hí", "Hí ae", "hí ae", "hi mng", "Hí mng"].find((i => i == event.body))) return api.sendMessage(msg, threadID, ((error, info) => {
            setTimeout((() => {
                api.unsendMessage(info.messageID)
            }), 6e4)
        }));
        if (["bye", "bai", "tạm biệt", "Bye", "pp", "Pp", "Bai", "Tạm biệt"].find((i => i == event.body))) return api.sendMessage(msg2, threadID, ((error, info) => {
            setTimeout((() => {
                api.unsendMessage(info.messageID)
            }), 6e4)
        }));
        if (["ngủ", "đi ngủ đây", "nn", "ngủ ngon", "g9", "nn nha", "Ngủ", "Đi ngủ đây", "Nn", "Ngủ ngon", "G9", "Nn nha", "nnmsd", "Nnmsd", "nnmd", "Nnmd"].find((i => i == event.body))) return api.sendMessage(msg3, threadID, ((error, info) => {
            setTimeout((() => {
                api.unsendMessage(info.messageID)
            }), 6e4)
        }))
    }
}, module.exports.run = async function({
    event,
    api,
    args,
    Threads
}) {
    let fs = require("fs-extra"),
        {
            configPath: configPath
        } = global.client,
        {
            threadID: threadID
        } = event,
        threadSetting = (await Threads.getData(String(threadID))).data || {},
        prefix = threadSetting.hasOwnProperty("PREFIX") ? threadSetting.PREFIX : global.config.PREFIX,
        config = require(process.cwd() + "/config.json");
    if (!args[0]) return api.sendMessage(`Bạn có thể dùng\n==> ${prefix}${this.config.name} on/o để bật thông báo\n==> ${prefix}${this.config.name} off/of để tắt thông báo`, threadID);
    if ("on" != args[0].toLowerCase() && "off" != args[0].toLowerCase() && "o" != args[0].toLowerCase() && "of" != args[0].toLowerCase()) return api.sendMessage("Chỉ xài on/off hoặc o/of", threadID);
    switch (args[0]) {
        case "o":
        case "on":
            0 == config.autoSend && (config.autoSend = !0, api.sendMessage("[⚜️] Bật thành công gửi lời chào đến thành viên", threadID)), fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");
            break;
        case "of":
        case "off":
            1 == config.autoSend && (config.autoSend = !1, api.sendMessage("[⚜️] Tắt thành công gửi lời chào đến thành viên", threadID)), fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");
            break;
        default:
            return global.utils.throwError(this.config.name, threadID)
    }
};*/




/*let fs = require("fs-extra");
module.exports.config = {
    name: "hi",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "Kanichi fix by TTK",// lụm bởi Qtuong
    description: "dùng đi rồi biết :v",
    commandCategory: "Gọi bot",
    usages: "[on/off]",
    cooldowns: 5,
    denpendencies: {
        axios: "",
        "moment-timezone": "",
        "fs-extra": ""
    }
}, module.exports.onLoad = () => {
    let request = require("request"),
        dirMaterial = __dirname + "/noprefix/";
    fs.existsSync(dirMaterial + "noprefix") || fs.mkdirSync(dirMaterial, {
        recursive: !0
    }), fs.existsSync(dirMaterial + "bai.gif") || request("https://i.imgur.com/uVALChk.gif").pipe(fs.createWriteStream(dirMaterial + "bai.gif")), fs.existsSync(dirMaterial + "ngủ.gif") || request("https://i.pinimg.com/originals/0f/e1/16/0fe1161b019a6d11f39d267c284ec67d.gif").pipe(fs.createWriteStream(dirMaterial + "ngủ.gif"))
}, module.exports.handleEvent = async ({
    event,
    api,
    Users
}) => {
    let {
        get: get
    } = require("axios"), {
        threadID: threadID,
        senderID: senderID
    } = event, m = (await get("https://apimyjrt.nguyenhaidang.ml/hololive.php")).data.data, cc = (await get(m, {
        responseType: "stream"
    })).data, moment = require("moment-timezone"), data2 = ["𝒕𝒐̂́𝒕 𝒍𝒂̀𝒏𝒉 🥰", "𝒗𝒖𝒊 𝒗𝒆̉ 😄", "𝒉𝒂̣𝒏𝒉 𝒑𝒉𝒖́𝒄 ❤️", "𝒚𝒆̂𝒖 đ𝒐̛̀𝒊 😘"], text = data2[Math.floor(Math.random() * data2.length)], hours = moment.tz("Asia/Ho_Chi_Minh").format("HHmm"), session = hours > 0 && hours <= 400 ? "𝒔𝒂́𝒏𝒈 𝒕𝒊𝒏𝒉 𝒎𝒐̛" : hours > 401 && hours <= 700 ? "𝒔𝒂́𝒏𝒈 𝒔𝒐̛́𝒎" : hours > 701 && hours <= 1e3 ? "𝒔𝒂́𝒏𝒈" : hours > 1001 && hours <= 1200 ? "𝒕𝒓𝒖̛𝒂" : hours > 1201 && hours <= 1700 ? "𝒄𝒉𝒊𝒆̂̀𝒖" : hours > 1701 && hours <= 1800 ? "𝒄𝒉𝒊𝒆̂̀𝒖 𝒕𝒂̀" : hours > 1801 && hours <= 2100 ? "𝒕𝒐̂́𝒊" : hours > 2101 && hours <= 2400 ? "𝒕𝒐̂́𝒊 𝒎𝒖𝒐̣̂𝒏" : "lỗi", name = await Users.getNameUser(senderID), msg = {
        body: `𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ${name}, 𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}`,
        attachment: cc
    }, msg2 = {
        body: `𝐁𝐚𝐢 𝐛𝐚̣𝐧 ${name}, 𝐒𝐞𝐞 𝐲𝐨𝐮 𝐧𝐞𝐱𝐭 𝐭𝐢𝐦𝐞❤️`,
        attachment: cc
    }, msg3 = {
        body: `𝑪𝒉𝒖́𝒄 ${name} 𝒏𝒈𝒖̉ 𝒏𝒈𝒐𝒏 𝒏𝒉𝒆́ 😘`,
        attachment: cc
    };
    if (1 == config.autoSend) {
        if (["hi", "chào", "hello", "Hello", "Hi", "Chào", "hey", "Hey", "Hí", "hí", "Hí ae", "hí ae", "hi mng", "Hí mng"].find((i => i == event.body))) return api.sendMessage(msg, threadID, ((error, info) => {
            setTimeout((() => {
                api.unsendMessage(info.messageID)
            }), 6e4)
        }));
        if (["bye", "bai", "tạm biệt", "Bye", "pp", "Pp", "Bai", "Tạm biệt"].find((i => i == event.body))) return api.sendMessage(msg2, threadID, ((error, info) => {
            setTimeout((() => {
                api.unsendMessage(info.messageID)
            }), 6e4)
        }));
        if (["ngủ", "đi ngủ đây", "nn", "ngủ ngon", "g9", "nn nha", "Ngủ", "Đi ngủ đây", "Nn", "Ngủ ngon", "G9", "Nn nha", "nnmsd", "Nnmsd", "nnmd", "Nnmd"].find((i => i == event.body))) return api.sendMessage(msg3, threadID, ((error, info) => {
            setTimeout((() => {
                api.unsendMessage(info.messageID)
            }), 6e4)
        }))
    }
}, module.exports.run = async function({
    event,
    api,
    args,
    Threads
}) {
    let fs = require("fs-extra"),
        {
            configPath: configPath
        } = global.client,
        {
            threadID: threadID
        } = event,
        threadSetting = (await Threads.getData(String(threadID))).data || {},
        prefix = threadSetting.hasOwnProperty("PREFIX") ? threadSetting.PREFIX : global.config.PREFIX,
        config = require(process.cwd() + "/config.json");
    if (!args[0]) return api.sendMessage(`Bạn có thể dùng\n==> ${prefix}${this.config.name} on/o để bật thông báo\n==> ${prefix}${this.config.name} off/of để tắt thông báo`, threadID);
    if ("on" != args[0].toLowerCase() && "off" != args[0].toLowerCase() && "o" != args[0].toLowerCase() && "of" != args[0].toLowerCase()) return api.sendMessage("Chỉ xài on/off hoặc o/of", threadID);
    switch (args[0]) {
        case "o":
        case "on":
            0 == config.autoSend && (config.autoSend = !0, api.sendMessage("[⚜️] Bật thành công gửi lời chào đến thành viên", threadID)), fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");
            break;
        case "of":
        case "off":
            1 == config.autoSend && (config.autoSend = !1, api.sendMessage("[⚜️] Tắt thành công gửi lời chào đến thành viên", threadID)), fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");
            break;
        default:
            return global.utils.throwError(this.config.name, threadID)
    }
};*/






module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Sam",
  description: "hi gửi sticker",
  commandCategory: "Tiện ích",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "hello",
    "2",
    "hi",
    "hai",
    "chào",
    "hí",
    "híí",
    "hì",
    "hìì",
    "lô",
    "hii",
    "helo",
    "hê nhô",
    "hi mn"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "2523892817885618",
      "2523892964552270",
      "2523893081218925",
      "2523893217885578",
      "2523893384552228",
      "2523892544552312",
      "2523892391218994",
      "2523891461219087",
      "2523891767885723",
      "2523891204552446",
      "2523890691219164",
      "2523890981219135",
      "2523890374552529",
      "2523889681219265",
      "2523889851219248",
      "2523890051219228",
      "2523886944552872",
      "2523887171219516",
      "2523888784552688",
      "2523888217886078",
      "2523888534552713",
      "2523887371219496",
      "2523887771219456",
      "2523887571219476"
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "tốt lành",
      "vui vẻ"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "sáng tinh mơ" : 
    hours > 401 && hours <= 700 ? "sáng sớm" :
    hours > 701 && hours <= 1000 ? "sáng" :
    hours > 1001 && hours <= 1200 ? "trưa" : 
    hours > 1201 && hours <= 1700 ? "chiều" : 
    hours > 1701 && hours <= 1800 ? "chiều tà" : 
    hours > 1801 && hours <= 2100 ? "tối" : 
    hours > 2101 && hours <= 2400 ? "tối muộn" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Xin chào ${name}, chúc bạn một buổi ${session} ${text} ❤️`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
      }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
