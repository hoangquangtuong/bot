module.exports.config = {
	name: "load",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "D-Jukie",
	description: "tải lại file config",
	commandCategory: "hệ thống admin-bot",
	usages: "[]",
	cooldowns: 10
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("reloading config done", event.threadID, event.messageID);    
}