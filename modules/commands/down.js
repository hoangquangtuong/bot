class downloadFromUrl {
  get config() {
    return {
      name: "down",
      hasPermssion: 2,
      version: "1.0", // thay xong đừng hỏi nó hư như nào
      credits: "Sơnkb", // thích làm gì thì làm
      description: "Tải và lưu mọi dạng file",
      commandCategory: "Admin",
      usages: "[url]",
      cooldowns: 5
    }
  }
  async handleReply({ api, event, handleReply }) {
    var { messageID, author, type, url } = handleReply;
    var { threadID, senderID } = event;
    if (author != senderID) return;
    switch (type) {
      case "reply": {
        api.unsendMessage(messageID);
        try {
          await global.utils.downloadFile(url, __dirname + "/../../" + event.body.toLowerCase());
          return api.sendMessage("Success", threadID);
        } catch (e) {
          return api.sendMessage(e.message, threadID);
        }
      };
        break;
    }
  }
  async run({ api, event, args }) {
    var { senderID, threadID, messageReply } = event;
    if (messageReply) {
      if (messageReply.body.indexOf("https://") == 0) return api.sendMessage({
        body: "Reply nơi lưu"
      }, threadID, (e, i) => {
        global
          .client.handleReply.push({
            name: this.config.name,
            type: "reply",
            author: senderID,
            messageID: i.messageID,
            url: messageReply.body
          });
      });
      return api.sendMessage({
        body: "Reply nơi lưu"
      }, threadID, (e, i) => {
        global
          .client.handleReply.push({
            name: this.config.name,
            type: "reply",
            author: senderID,
            messageID: i.messageID,
            url: messageReply.attachments[0].url
          });
      });
    }
    if (!args[0]) return api.sendMessage("Thiếu dữ liệu", threadID);
    return api.sendMessage({
      body: "Reply nơi lưu"
    }, threadID, (e, i) => {
      global.client.handleReply.push({
        name: this.config.name,
        type: "reply",
        author: senderID,
        messageID: i.messageID,
        url: args[0]
      });
    });
  }
}
module.exports = new downloadFromUrl();