module.exports.config = {
 name: "ascii",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "JRT",
 description: "Create Text",
 commandCategory: "tiện ích",
 dependencies: {"figlet": ""},
 usages: "ascii <text>",
 cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
 const figlet = global.nodemodule["figlet"];
 let p = args.join(" ");
 figlet(p, function(err, data) {
    if (err) {
        api.sendMessage('Something went wrong...', event.threadID, event.messageID);
        console.dir(err);
        return;
    }
    api.sendMessage(data, event.threadID, event.messageID);
});
  }