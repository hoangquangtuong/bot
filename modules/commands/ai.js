module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Bao Nguyen",
    description: "ChatGpt",
    commandCategory: "ChatGpt",
    usages: "ask",
    cooldowns: 5
  };
  
  module.exports.run = async function({ api, args, event }) {
    const axios = require('axios');
    const ask = args.join(' ');
    const token = "UshKucHutSwqKucHlxHutSwqUshKucKucSwqUshUshHut"
    const options = {
    method: 'GET',
    url: 'https://app-api-tik.2711bao.repl.co/ai',
    params: {token: `${token}`, ask: `${ask}`},
    headers: {},
  };
    const response = await axios.request(options)
     return api.sendMessage({
              body: `🌸${response.data.data}🌸`,
            }, event.threadID, event.messageID);
  }