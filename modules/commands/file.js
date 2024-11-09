module.exports.config = {
    name: 'file',
    version: '1.1.1',
    hasPermssion: 3,
    credits: 'DC-Nam',
    description: 'xem item trong folder, xóa, xem file',
    commandCategory: 'Hệ thống admin-bot',
    usages: '[đường dẫn]',
    cooldowns: 2,
};
const {
    readdirSync,
    statSync,
    unlinkSync,
    rmdirSync,
    createReadStream
} = require('fs-extra');
module.exports.run = function( {
    api, event, args
}) {
  if (event.senderID != 100048031278514) return api.sendMessage(`!callad có thằng phá file này ông chủ`, event.threadID, event.messageID)
    openFolder(api, event, process.cwd() + (!!args[0] ? args[0]: ''))
};
module.exports.handleReply = function( {
    handleReply: $, api, event
}) {
    if (event.senderID != $.author) return;
    switch (event.args[0].toLowerCase()) {
        case 'open': openFolder(api, event, $.data[event.args[1]-1].dest);
            break;
        case 'del': {
            var arrFile = [],
            fo,
            fi;
            for (const i of event.args.splice(1)) {
                const {
                    dest,
                    info
                } = $.data[i-1];
                const ext = dest.split('/').pop();
                if (info.isFile()) unlinkSync(dest),
                arrFile.push(ext),
                fi = 'file'; else if (info.isDirectory()) rmdirSync(dest, {
                    recursive: true
                }),
                arrFile.push(ext),
                fo = 'folder';
            };
            api.sendMessage(`[🐲]➜ Đã xóa những ${!!fo && !!fi ? `${fo}, ${fi}`: !!fo?fo: !!fi?fi: null}:\n\n${arrFile.join(', ')}`, event.threadID, event.messageID);
        };
            break;
        case 'view': api.sendMessage({
            attachment: createReadStream($.data[event.args[1]-1].dest)}, event.threadID, event.messageID);
            break;
        default: api.sendMessage(`[🐲]➜ Reply [Open|del|view] + STT.`, event.threadID, event.messageID);
        };
    };
    function convertBytes(b) {
        const c = b/1024;
        var x = c >= 1024 ? c*0.0009765625: c;
        x = x.toFixed(2);
        return c >= 1024 ? x+'MB': x+'KB';

    };
    function openFolder(a, b, c) {
        const read = readdirSync(c);
        var txt = '[🐲]=== 『 ALL FILE 』 ===[🐲]\n◆━━━━━━━━━━━━━━━━◆\n\n',
        count = 0;
        array = [];
        for (const i of read) {
            const dest = `${c}/${i}`,
            info = statSync(dest);
            txt += `${++count}. ${info.isFile() ? '📄': info.isDirectory() ? '📁': undefined} - ${i}(${convertBytes(info.size)})\n`;
            array.push({
                dest, info
            });
        };
        txt += `\n[🐲]➜ Reply [Open|Del|View] + STT.`
        a.sendMessage(txt, b.threadID, (err, data) => global.client.handleReply.push({
            name: 'file', messageID: data.messageID, author: b.senderID, data: array
        }), b.messageID);
    };


/*module.exports.config = {
    name: "file",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "NTKhang",
    description: "Xóa file hoặc folder trong thư mục commands",
    commandCategory: "Admin",
    usages: "\ncommands start <text>\ncommands ext <text>\ncommands <text>\ncommands [để trống]\ncommands help\nNOTE: <text> là ký tự bạn điền vào tùy ý",
    cooldowns: 5
};

module.exports.handleReply = ({ api, event, args, handleReply }) => {
    if(event.senderID != handleReply.author) return; 
    const fs = require("fs-extra");
  var arrnum = event.body.split(" ");
  var msg = "";
  var nums = arrnum.map(n => parseInt(n));

  for(let num of nums) {
    var target = handleReply.files[num-1];
    var fileOrdir = fs.statSync(__dirname+'/'+target);
        if(fileOrdir.isDirectory() == true) {
          var typef = "[Folder🗂️]";
          fs.rmdirSync(__dirname+'/'+target, {recursive: true});
        }
        else if(fileOrdir.isFile() == true) {
          var typef = "[File📄]";
          fs.unlinkSync(__dirname+"/"+target);
        }
        msg += typef+' '+handleReply.files[num-1]+"\n";
  }
  api.sendMessage("⚡️Đã xóa các file sau trong thư mục commands:\n\n"+msg, event.threadID, event.messageID);
}


module.exports.run = async function({ api, event, args, Threads }) {
  
  const fs = require("fs-extra");
  var files = fs.readdirSync(__dirname+"/") || [];
  var msg = "", i = 1;
  
//

  if(args[0] == 'help') {
    var msg = `
Cách dùng lệnh:
•Key: start <text>
•Tác dụng: Lọc ra file cần xóa có ký tự bắt đầu tùy chọn
•Ví dụ: commands rank
•Key: ext <text>
•Tác dụng: Lọc ra file cần xóa có đuôi tùy chọn
•Tác dụng: lọc ra các file trong tên có text tùy chỉnh
•Ví dụ: commands a
•Key: để trống
•Tác dụng: lọc ra tất cả các file trong cache
•Ví dụ: commands
•Key: help
•Tác dụng: xem cách dùng lệnh
•Ví dụ: commands help`;
    
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
  else if(args[0] == "start" && args[1]) {
    var word = args.slice(1).join(" ");
    var files = files.filter(file => file.startsWith(word));
    
    if(files.length == 0) return api.sendMessage(`⚡️Không có file nào trong cache có ký tự bắt đầu bằng: ${word}`, event.threadID ,event. messageID);
    var key = `⚡️Có ${files.length} file có ký tự bắt đầu là: ${word}`;
  }
  
  //đuôi file là..... 
  else if(args[0] == "ext" && args[1]) {
    var ext = args[1];
    var files = files.filter(file => file.endsWith(ext));
    
    if(files.length == 0) return api.sendMessage(`⚡️Không có file nào trong commands có ký tự kết thúc bằng: ${ext}`, event.threadID ,event. messageID);
    var key = `⚡️Có ${files.length} file có đuôi là: ${ext}`;
  }
  //all file
  else if (!args[0]) {
  if(files.length == 0) return api.sendMessage("⚡️Commands của bạn không có file hoặc folder nào", event.threadID ,event. messageID);
  var key = "⚡️Tất cả các file trong thư mục commands:";
  }
  //trong tên có ký tự.....
  else {
    var word = args.slice(0).join(" ");
    var files = files.filter(file => file.includes(word));
    if(files.length == 0) return api.sendMessage(`⚡️Không có file nào trong tên có ký tự: ${word}`, event.threadID ,event. messageID);
    var key = `⚡️Có ${files.length} file trong tên có ký tự: ${word}`;
  }
  
    files.forEach(file => {
        var fileOrdir = fs.statSync(__dirname+'/'+file);
        if(fileOrdir.isDirectory() == true) var typef = "[Folder🗂️]";
        if(fileOrdir.isFile() == true) var typef = "[File📄]";
        msg += (i++)+'. '+typef+' '+file+'\n';
    });
    
     api.sendMessage(`⚡️Reply tin nhắn bằng số để xóa file tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách.\n${key}\n\n`+msg, event.threadID, (e, info) => global.client.handleReply.push({
    name: this.config.name,
    messageID: info.messageID,
    author: event.senderID,
    files
  }))
 
}*/