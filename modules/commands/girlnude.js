module.exports.config = {
  name: "girlnude",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Random Ảnh Nude Gái Xinh Cực Bổ Mắt",
  commandCategory: "ramdom-images",
  usages: "girlnude",
  cooldowns: 22
};
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
 axios.get('https://apigirlnude.haminh2.repl.co/index.php').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `Mấy ba khoái lắm..!`,
            attachment: fs.createReadStream(__dirname + `/cache/girlnude.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/girlnude.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/girlnude.${ext}`)).on("close", callback);
      })
}