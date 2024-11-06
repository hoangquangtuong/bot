const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
const chalkercli = require("chalkercli");
const chalkAnimation = require('chalkercli');
var randomColor = Math.floor(Math.random()*16777215).toString(16);
const CFonts = require('cfonts');
/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semvecfonts@latestr.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/utils/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

logger("Hệ thống BOT DRAGON được remake từ Miraiv2 do Qtuong duy trì và phát triển", "🛠 VN");
logger("Liên hệ Facebook: https://www.facebook.com/hoangquangtuong.User", "Facebook");
logger("Liên hệ Zalo: https://zalo.me/84399259628", "Zalo");
logger("Website: https://hoangquangtuong.id.vn", "Contact");
logger("Donate momo - mbbank: 13570399255555", "DONATE");

const rainbow = chalkercli.rainbow('\n[=== 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐁𝐎𝐓 DRAGON ===]\n').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
logger("BOT DRAGON SUCCESSFULLY INITIALIZED", "BOT DRAGON");
logger("Welcome back to Bot DRAGON", "BOT DRAGON");
logger("BOT DRAGON PROJECT start running...", "BOT DRAGON");
logger("Checking the version...", "UPDATE");
logger("Your version is the latest!", "UPDATE");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "BOT DRAGON STARTING") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Dragon.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "Starting");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////
axios.get("https://raw.githubusercontent.com/hoangquangtuong/miraiv2/main/package.json").then((res) => {
    logger(res['data']['name'], "NAME");
    logger("version: " + res['data']['version'], "VERSION");
    logger(res['data']['description'], "DESCRIPTION");
})
setTimeout(async function () {
CFonts.say('MIRAIV3', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})
CFonts.say(`Bot Messenger Created By DRAGON`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
  const rainbow = chalkercli.rainbow('\n[=== 𝐀𝐂𝐓𝐈𝐕𝐄 𝐁𝐎𝐓 DRAGON ===]\n').stop();

rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
  
  logger('Bắt đầu load source code', 'LOAD')
  startBot()
}, 70)
