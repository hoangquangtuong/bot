module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Resident Evil",
    description: "Xem thông tin admin, user, vv...",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args,Currencies}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    var uid = event.senderID;
    const money = (await Currencies.getData(uid)).money;
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`🌸 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘀𝗮𝘂 🌸:\n\n${prefix}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${prefix}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${prefix}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, djt nhau,...)\n\n${prefix}${this.config.name} user box [ uid | tid ]:\n\n${prefix}${this.config.name} admin => Thông tin cá nhân của Admin Bot`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "Kh";
       if(!imgg) api.sendMessage(`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "Kh";
          if(!img) api.sendMessage(`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`👀 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.threadName}\n🌸 𝗧𝗜𝗗: ${args[1]}\n🦋 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n🐤 𝗘𝗺𝗼𝗷𝗶: ${threadInfo.emoji}\n🌈 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻: \n» ${threadInfo.participantIDs.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀ ${threadInfo.adminIDs.length} 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻.\n» 𝗚𝗼̂̀𝗺 ${nam} 𝗻𝗮𝗺 𝘃𝗮̀ ${nu} 𝗻𝘂̛̃.\n» 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`🌸 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘀𝗮𝘂 🌸:\n\n${prefix}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${prefix}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${prefix}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, djt nhau,...)\n\n${prefix}${this.config.name} user box [ uid | tid ]:\n\n${prefix}${this.config.name} admin => Thông tin cá nhân của Admin Bot`, event.threadID, event.messageID);
    if (args[0] == "admin") {
        var link = [
"https://i.imgur.com/TPsPOGY.mp4"
  ];
      var callback = () => api.sendMessage(
  {body:`ㅤㅤ🌸 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 🌸\n
👀 𝐓𝐞̂𝐧: Hoàng Quang Tường
❎ 𝐓𝐮𝐨̂̉𝐢: 9
👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝗡𝗮𝗺
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 𝐜𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠: 𝟭𝗺𝟳𝟱/𝟱𝟳𝗸𝗴
💘 𝐌𝐨̂́𝐢 𝐪𝐮𝐚𝐧 𝐡𝐞̣̂: 𝗙.𝗔
🌎 𝐐𝐮𝐞̂ 𝐪𝐮𝐚́𝐧: 𝗖𝗮̂̀𝗻 𝗧𝗵𝗼̛
👫 𝐆𝐮: 𝗕𝗶𝗲̂́𝘁 𝗻𝗮̂́𝘂 𝗰𝗼̛𝗺
🌸 𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡: 𝗖𝗵𝗼́ 𝗱𝗮̣𝗶
🌀 𝐒𝐨̛̉ 𝐭𝐡𝐢́𝐜𝐡: 𝗖𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲, 𝘅𝗲𝗺 𝗽𝗵𝗶𝗺 𝟭𝟴+ 𝗯𝗹𝗮𝗯𝗹𝗮, 𝗮̆𝗻, 𝗻𝗴𝘂̉
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝗦𝗗𝗧 & 𝗭𝗮𝗹𝗼: 0399259628
🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/hoangquangtuong.User 🐰`,
    attachment: fs.createReadStream(__dirname + "/cache/113.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/113.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/113.mp4")).on("close",() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "không !" : data[id].isFriend == true ? "có !" : "Đéo";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var callback = () => api.sendMessage({body:`👤 𝗧𝗲̂𝗻: ${name}` + `\n🔗 𝗟𝗶𝗻𝗸: ${url}` + `\n🌸 𝗨𝗜𝗗: ${id}\n🦋 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n❄️ 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗕𝗼𝘁: ${b}\n💸 𝗠𝗼𝗻𝗲𝘆: ${money}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "không !" : data[mentions].isFriend == true ? "có !" : "Đéo";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var callback = () => api.sendMessage({body:`👤 𝗧𝗲̂𝗻: ${name}` + `\n🔗 𝗟𝗶𝗻𝗸: ${url}` + `\n🌸 𝗨𝗜𝗗: ${id}\n🦋 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n❄️ 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗕𝗼𝘁: ${b}\n💸 𝗠𝗼𝗻𝗲𝘆: ${money}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "không !" : data[args[1]].isFriend == true ? "có !" : "Đéo";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var callback = () => api.sendMessage({body:`👤 𝗧𝗲̂𝗻: ${name}` + `\n🔗 𝗟𝗶𝗻𝗸: ${url}` + `\n🌸 𝗨𝗜𝗗: ${id}\n🦋 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${gender}\n❄️ 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝗕𝗼𝘁: ${b}\n💸 𝗠𝗼𝗻𝗲𝘆: ${money}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
   
    
     }


      }





  