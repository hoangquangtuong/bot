module.exports.config = {

  name: "goibot",

  version: "1.0.1",

  hasPermssion: 0,

  credits: "Mirai Team",//lụm bởi quangtuong

  description: "goibot",

  commandCategory: "Không cần dấu lệnh",

  usages: "noprefix",

  cooldowns: 5,

};

module.exports.handleEvent = function({ api, event, args, Threads }) {

  var { threadID, messageID, reason } = event;

  const moment = require("moment-timezone");

  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");

  var idgr = `${event.threadID}`;

  var tl = ["chào bạn tôi là bot của Tường", "bạn gọi tôi có việc gì?", "tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Chồng gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "Yêu Tường nhất💟", "Yêu thương admin nhất", "Anh ấy là phụ trợ của admin", "Sao thế công chúa", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Làm đĩ không ạ? dui lắm", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Em dthw như chủ của em ạ", "Đừng khen em ngại quá hí hí" ,"Làm chồng em không ạ?", "Đừng spam em nha :<<, cô chủ em mệt lắm ời", "Cút ra", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Spam cc cút", "Yêu em không?", "Chồng em đây rồi", "Mày bị làm sao í @@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Chần chờ gì vợ ơi anh đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "500k bao phòng!!!", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp chồng của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Đây là trang web thông tin của admin, có gì liên hệ qua web này:ahihi", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭", "Kêu làm gì", "Bộ bị ngu hả kêu tao?", "Rồi kêu cặc gì nói lẹ", "Chơi bê đê hong", "Kêu con cặc", "Ú mai gót", "Con đĩ nào kêu tao đấy!", "Em nứng hả em?", "Tiếc quá mày đã bị ban","tao có mấy câu này á cứ kêu tao không biết mày thiểu năng à ?", "Em đây~~~~", "Admin seen kìa đĩ", "Tao mệt!", "Dễ thương không có trong danh sách của mày", "Ultr?", "Có giấy súc không?","Dùng callad đi kêu tao có con cặc gì đâu?", "Đừngg sướng lắm anh ơi", "Rên với em nhé a á á á", "ớ ớ ớ ớ á á á á", "Con chim bé uwu", "Vl con này thích tao m ạ", "Đụ với anh nè em", "Tao báo công an", "Xin lỗi :( ", "4 nháy 1 đêm chịu nổi k" ,"Êyyyyyyyyyy đồ nồn lừng", "Đang cho bạn con cu", "Đút tutu thôi em đau :'(", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Gì đó thánh bú liếm", "Lên giường k em??"];

  var rand = tl[Math.floor(Math.random() * tl.length)]

 

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("Chó nào vừa nói xấu tao đấy, muốn chết hả😠", threadID);

  };

if ((event.body.toLowerCase() == "qq") || (event.body.toLowerCase() == "qq nè")) {

    return api.sendMessage("Mày thích qq không :v tao chỉ cho tải app qq live về nghịch :V", threadID);

  };

  if ((event.body.toLowerCase() == "câm") || (event.body.toLowerCase() == "im") || (event.body.toLowerCase() == "nín") || (event.body.toLowerCase() == "im mồm") ) {

    return api.sendMessage("Láo à :V mày bảo ai vậy :v", threadID);

  };
  
if ((event.body.toLowerCase() == "!tt") || (event.body.toLowerCase() == "! tt")) {

    return api.sendMessage("Check tương tác hoài mài :v rank đồng nát mà cứ thích check tương tác là thế đéo nào =))", threadID);

  };
  
  if ((event.body.toLowerCase() == "buồn") || (event.body.toLowerCase() == "buồn")) {

    return api.sendMessage("Vui lên đi cho kẹo nè", threadID);

  };

 

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {

    return api.sendMessage("Ôi cc lo mà tương tác đi :)", threadID);

  };

    if ((event.body.toLowerCase() == "yêu em") || (event.body.toLowerCase() == "yeu em")) {

    return api.sendMessage("Em cũng yêu anh ❤️", threadID);

  };


  if ((event.body.toLowerCase() == "tán") || (event.body.toLowerCase() == "tán tỉnh") || (event.body.toLowerCase() == "tán gái") || (event.body.toLowerCase() == "tan gai") || (event.body.toLowerCase() == "chỉ cách tán gái đi")) {

    return api.sendMessage("Dạ xin chào người yêu tương lai của anh.✌️😘 Nói nghe này nè nhar , nghe xong phãi đồng ý á nhar.😊 Anh thương em lắm á.🙈 Hôm nay anh lấy hết can đảm để viết dess tỏ tình với em.☺️☺️ Em ăn gì mà xênh đệp dễ thương cả đáng yêu giữ vậy , làm rụng tim anh mất rồi.😊 Em ơi! Em coá đồng ý làm người yêu anh không ?! Em nói chuyện đáng yêu lắm làm anh say nắng , say mưa rồi.😔😔 Anh không muốn em là của người khác đâu >< Làm người yêu cuối cùng của anh nhar .Anh sẽ nghe lời của em nè không làm em buồn đâu.😚 Anh sẽ ngoan nè luôn luôn yêu thương em nè.😚 ! Làm osin cho em hết đời luôn.💋 Làm người yêu anh rồi anh sẽ nhường tất cả những điều tốt đẹp cho em thôi.💜 Anh sẽ không làm em buồn đâu. Nếu mà anh làm em buồn thì anh sẽ cho em đánh đòn nhar.😂 Anh sẽ làm người yêu thw em nhất nè , luôn bên cạnh em nè và mang đến cho em hạnh phúc nè.😍😍 Cưới em về rồi anh sẽ làm tất cả mọi việc nhà như : Lau nhà , quét nhà , rửa chén , giặt đồ , nấu cơm .v.v.v.. Em chỉ việc ngồi sinh baby 👶 cho anh thôi Ahihi.🙈 Vậy em coá đồng ý cho anh yêu thương , chăm sóc cho em không !? 😞 Cho anh cơ hội nhar ?! 👌 Vì anh thương em mất rồi.😘😍 Làm người yêu anh đi nhar anh cho trái tim đủ màu lunz nè ❤️💛💚💙💜 Em trả lời nhanh đi để anh còn có thời gian bên cạnh và chăm sóc cho em và rước em về làm cô dâu 👰 làm chủ của anh nữa chứ.👏❕ Loveyeww .... 😍💜 .................... 💋💏😍💓. Dạ xin chào người yêu tương lai của anh.✌️😘 Nói nghe này nè nhar , nghe xong phãi đồng ý á nhar.😊 Anh thương em lắm á.🙈 Hôm nay anh lấy hết can đảm để viết dess tỏ tình với em.☺️☺️ Em ăn gì mà xênh đệp dễ thương cả đáng yêu giữ vậy , làm rụng tim anh mất rồi.😊 Em ơi! Em coá đồng ý làm người yêu anh không ?! Em nói chuyện đáng yêu lắm làm anh say nắng , say mưa rồi.😔😔 Anh không muốn em là của người khác đâu >< Làm người yêu cuối cùng của anh nhar .Anh sẽ nghe lời của em nè không làm em buồn đâu.😚 Anh sẽ ngoan nè luôn luôn yêu thương em nè.😚 ! Làm osin cho em hết đời luôn.💋 Làm người yêu anh rồi anh sẽ nhường tất cả những điều tốt đẹp cho em thôi.💜 Anh sẽ không làm em buồn đâu. Nếu mà anh làm em buồn thì anh sẽ cho em đánh đòn nhar.😂 Anh sẽ làm người yêu thw em nhất nè , luôn bên cạnh em nè và mang đến cho em hạnh phúc nè.😍😍 Cưới em về rồi anh sẽ làm tất cả mọi việc nhà như : Lau nhà , quét nhà , rửa chén , giặt đồ , nấu cơm .v.v.v.. Em chỉ việc ngồi sinh baby 👶 cho anh thôi Ahihi.🙈 Vậy em coá đồng ý cho anh yêu thương , chăm sóc cho em không !? 😞 Cho anh cơ hội nhar ?! 👌 Vì anh thương em mất rồi.😘😍 Làm người yêu anh đi nhar anh cho trái tim đủ màu lunz nè ❤️💛💚💙💜 Em trả lời nhanh đi để anh còn có thời gian bên cạnh và chăm sóc cho em và rước em về làm cô dâu 👰 làm chủ của anh nữa chứ.👏❕ Loveyeww .... 😍💜 .................... 💋💏😍💓", threadID);

  };

 

 if ((event.body.toLowerCase() == "luật bot") || (event.body.toLowerCase() == "luat bot")) {

    return api.sendMessage("[🧸] 𝐑𝐔𝐋𝐄 𝐎𝐍 𝐔𝐒𝐄 𝐎𝐅 𝐁𝐎𝐓 [🧸]\n\n[🐥] Dùng .resend 2 lần để tắt lặp lại tin nhắn đã gỡ. ✅\n[⚠️] Các thành viên lưu ý: Chửi + Spam đều sẽ bị ban. ⚠️\n\n✨ Thứ nhất ✨\n[🐰] Do sự thiếu hiểu biết của thành viên trong nhóm hoặc do cả quản trị viên cũng đéo có ý thức nên chả ai quản được để thành ra bot bị ăn block tin nhắn hoặc có thể pay acc bot :))\n✨ Thứ hai ✨\n[🐰] Do một số thành phần ngu si, thiếu hiểu biết, không biết cách dùng bot mà đi chửi bot ngu hay bot dỡm =)) Thì tự đi tạo bot hay kiếm bot khác sịn mà dùng :))\n✨ Thứ ba ✨\n[🐰] Tự ý thêm bot vào các group rồi kick bot hay thậm chí là spam bot, phá bot thì hãm lồn vừa thôi nhé :)))\n✨ Thứ tư ✨\n[🐰] Nhiều thành phần có 1,2 lệnh cách 5s spam một lần máy cũng không chịu nổi._. ( lúc đấy mà bị ban rồi đừng có réo lên mà chửi ).\n✨ Thứ năm ✨\n[🐰] Có 1 số thành phần bảo dùng máy vippro no 1 ip12prx samsung abcxyz gì đó xong bảo bot vào nhắn tin lag hết cả máy thì tao nghĩ nên đi thay máy mới hoặc đập cmn đi .-.\n✨ Thứ sáu ✨\n[🐰] Admin sẽ vào kiểm tra đột xuất nếu box nào dưới 10 người và không có ảnh hoặc tên thì auto out box.\n✨ Thứ bảy ✨\n[🐰] Một box chỉ sài 1 bot thôi nhé nhiều bot dẫn đến loãng box và ảnh hưởng đến các bot phát hiện có 2 bot hoặc bla bla thì out + ban.\n✨ Thứ tám ✨\n[🐥] Và lần cuối ai sài được bot thì sài không sài thì không ép đừng kiểu thêm vô box rồi chê đủ kiểu bảo bot dởm xong chửi đòi war với bot .-. ✅\n\n[⚜️] Nếu phát hiện các hành vi vi phạm những điều trên vui lòng dùng callad hoặc liên hệ trực tiếp với admin để báo cáo.✅\nThis bot make by SuSu🐰.  Thanks you for using❤️. Xin cảm ơn đã đọc UwU.", threadID);

  };

 

  if ((event.body.toLowerCase() == "chửi thề") || (event.body.toLowerCase() == "chửi thề") || (event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "đ mm")) {

    return api.sendMessage("Trời đất dung hoa, vạn vật sinh sôi Con mẹ mày lôi thôi, đầu xanh mỏ đỏ Gặm cỏ thay cơm, đầu tóc bờm xờm Khạc đờm tung tóe, tao địt con mẹ mày  Như lồn trâu lồn chó, lồn bó xi măng Lồn chằng mạng nhện mà lồn bện là khoai Lồn quai lá mít, lồn đít lồn cơm Lồn tơm lồn đậm, lồn đười ươi nó địt Lồn con vịt nó phang, lồn giang mai lồn ỉa chảy Lồn nhảy hiphop, lồn hàng xốp làm hàng hiệu Lồn hàng triệu con súc vật, mà tao địt con đĩ mẹ mày Đứng từ trên cao, mà lao đầu xuống đất Địt lất phất như mưa rơi, địt tơi bởi như bom đạn Địt lãng mạn như Romeo và Juliet Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm Địt đứng tim phổi, địt cặp mắt nai Mà địt chai lỗ đít, địt khít cái lỗ lồn  Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày Như gà mái mổ giun, như chó càn cắn dậu Thằng cậu mày hiếp dâm, tao bật cái cánh cửa Cho con mẹ mày nằm ngửa, bửa nát tử cung Khai thông buồng trứng, hứng full tinh trùng Địt bồi hồi cảm xúc, địt như bánh đúc ra lò Địt như mấy con phò bên hồ Hoàn Kiếm Địt như mấy con điếm bên chợ Đồng Xuân  Địt đằng chân mà lên đằng đầu Địt sập cầu sập cống Địt con mẹ mày sống Địt con mẹ mày chết Cho con mẹ mày AIDS Cho con mẹ mày sida Mà tao địt từ Nga, mà qua tới Pháp  Tao lại địt về Việt Nam mà ra hàng Cỏ  Và một trăm thằng da đỏ, một nghìn thằng da đen Nó lại bem vào cái lỗ lồn con đĩ mẹ mày Địt vô đầu gối Địt thối màng trinh Địt bất thình lình Địt kiểu âu tướng Địt hướng mặt trời Địt chơi địt bời Địt rakiểu mới Địt tới địt lui Địt búi cả đầu Địt đâu cũng chết Địt bết cả lồn Địt kiểu teo kiểu héo Kiểu ngang kiểu dọc Kiểu không cần khoa học Cũng chọc thủng lồn con đĩ mẹ mày Cái thằng đâm cha chém chú Bóp vú chị dâu Cạo đầu em nhỏ Bắn bỏ em trai Kì lồn em gái Đái ỉa ra sông Như công xỉa cánh Như đánh chó hoang Đập đầu chó thiến Chiềng hàng chiềng trại Bắn hại chim non Đập đầu chim cú Bú lồn chim sẻ Bẻ lồn chim ri Kì lồn chim cắt Và đút buồi vào chim trâu Địt cái lồn mẹ mày Đi với phật thì mặc áo cà sa Đi với mà thìmặc áo giấy Mà cái lồn con đĩ mẹ mày không đầy chấy thì cũng đầy ve mà giữa cái hột le", threadID);

  };

if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "bot đĩ")) {

    return api.sendMessage("Trời đất dung hoa, vạn vật sinh sôi Con mẹ mày lôi thôi, đầu xanh mỏ đỏ Gặm cỏ thay cơm, đầu tóc bờm xờm Khạc đờm tung tóe, tao địt con mẹ mày  Như lồn trâu lồn chó, lồn bó xi măng Lồn chằng mạng nhện mà lồn bện là khoai Lồn quai lá mít, lồn đít lồn cơm Lồn tơm lồn đậm, lồn đười ươi nó địt Lồn con vịt nó phang, lồn giang mai lồn ỉa chảy Lồn nhảy hiphop, lồn hàng xốp làm hàng hiệu Lồn hàng triệu con súc vật, mà tao địt con đĩ mẹ mày Đứng từ trên cao, mà lao đầu xuống đất Địt lất phất như mưa rơi, địt tơi bởi như bom đạn Địt lãng mạn như Romeo và Juliet Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm Địt đứng tim phổi, địt cặp mắt nai Mà địt chai lỗ đít, địt khít cái lỗ lồn  Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày Như gà mái mổ giun, như chó càn cắn dậu Thằng cậu mày hiếp dâm, tao bật cái cánh cửa Cho con mẹ mày nằm ngửa, bửa nát tử cung Khai thông buồng trứng, hứng full tinh trùng Địt bồi hồi cảm xúc, địt như bánh đúc ra lò Địt như mấy con phò bên hồ Hoàn Kiếm Địt như mấy con điếm bên chợ Đồng Xuân  Địt đằng chân mà lên đằng đầu Địt sập cầu sập cống Địt con mẹ mày sống Địt con mẹ mày chết Cho con mẹ mày AIDS Cho con mẹ mày sida Mà tao địt từ Nga, mà qua tới Pháp  Tao lại địt về Việt Nam mà ra hàng Cỏ  Và một trăm thằng da đỏ, một nghìn thằng da đen Nó lại bem vào cái lỗ lồn con đĩ mẹ mày Địt vô đầu gối Địt thối màng trinh Địt bất thình lình Địt kiểu âu tướng Địt hướng mặt trời Địt chơi địt bời Địt rakiểu mới Địt tới địt lui Địt búi cả đầu Địt đâu cũng chết Địt bết cả lồn Địt kiểu teo kiểu héo Kiểu ngang kiểu dọc Kiểu không cần khoa học Cũng chọc thủng lồn con đĩ mẹ mày Cái thằng đâm cha chém chú Bóp vú chị dâu Cạo đầu em nhỏ Bắn bỏ em trai Kì lồn em gái Đái ỉa ra sông Như công xỉa cánh Như đánh chó hoang Đập đầu chó thiến Chiềng hàng chiềng trại Bắn hại chim non Đập đầu chim cú Bú lồn chim sẻ Bẻ lồn chim ri Kì lồn chim cắt Và đút buồi vào chim trâu Địt cái lồn mẹ mày Đi với phật thì mặc áo cà sa Đi với mà thìmặc áo giấy Mà cái lồn con đĩ mẹ mày không đầy chấy thì cũng đầy ve mà giữa cái hột le", threadID);

  };
  
 if ((event.body.toLowerCase() == "contact") || (event.body.toLowerCase() == "liên hệ") || (event.body.toLowerCase() == "profile")) {

    return api.sendMessage("[🌐]→ Link fb: https://www.facebook.com/hoangquangtuong.User\nzalo: 0399259628", threadID);

  };

  if ((event.body.toLowerCase() == "donate") || (event.body.toLowerCase() == "Link donate")) {

    return api.sendMessage("[💵]→ Link: https://www.facebook.com/hoangquangtuong.User", threadID);
  };

  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {

    return api.sendMessage("Ối cailon biết tương tác ko :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {

    return api.sendMessage("Ơi cc gì :)? Ơi gì tương tác hộ con :>>>", threadID);

  };

 

  if ((event.body.toLowerCase() == "ỏ") || (event.body.toLowerCase() == "oi")) {

    return api.sendMessage("Ỏ cc thích ỏ ko :>> Tương tác lẹ", threadID);

  };

 

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {

    return api.sendMessage("Ừm :>>> Tương tác cho tốt nhé ><", threadID);

  };

 

  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {

    return api.sendMessage("À..... cc tương tác lẹ, ko tt bố kick mày bây giờ :)?", threadID);

  };

 

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {

    return api.sendMessage("Ừ à :)? biết dạ ko? Láo à , bố đấm vêu mõm giờ :)))", threadID);

  };

 

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {

    return api.sendMessage("Ừa à :)? biết dạ ko? Láo à :)))", threadID);

  };

 

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {

    return api.sendMessage("Ừ à :)? biết dạ ko? Láo à :)))", threadID);

  };

 

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {

    return api.sendMessage("Ngoan đấy tặng cậu 1 bao cao su :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {

    return api.sendMessage("Yêu cc, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê yêu sau", threadID);

  };

 

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dmm")) {

    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);

  };

 

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {

    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);

  };

 

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {

    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);

  };

 

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "bot láo")) {

    return api.sendMessage("Chửi cc gì thích đấm nhau ko mà sồn sồn lên thế :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {

    return api.sendMessage("Địt cc thích đụ ko :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {

    return api.sendMessage("À mày thích địt à cởi quần ra đụ lẹ nào :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "tường") || (event.body.toLowerCase() == "tuong") || (event.body.toLowerCase() == "từn")) {

    return api.sendMessage("Có gì liên hệ qua fb: https://www.facebook.com/hoangquangtuong.User", threadID);

  };

 

  if ((event.body.toLowerCase() == "tường ơi") || (event.body.toLowerCase() == "tuong oi")) {

    return api.sendMessage("Có gì liên hệ qua fb: https://www.facebook.com/hoangquangtuong.User", threadID);

  };
 

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {

    return api.sendMessage("Sủa lẹ, tao còn phải phục vụ các box khác nữa :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {

    return api.sendMessage("Hmm... tán đổ thì yêu nhé... 😍", threadID);

  };

 

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {

    return api.sendMessage("Anh cũng yêu em <3", threadID);

  };


  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {

    return api.sendMessage("Hí chào bạn <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "chửi cặc :)") || (event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {

    return api.sendMessage("Trời đất dung hoa, vạn vật sinh sôi Con mẹ mày lôi thôi, đầu xanh mỏ đỏ Gặm cỏ thay cơm, đầu tóc bờm xờm Khạc đờm tung tóe, tao địt con mẹ mày  Như lồn trâu lồn chó, lồn bó xi măng Lồn chằng mạng nhện mà lồn bện là khoai Lồn quai lá mít, lồn đít lồn cơm Lồn tơm lồn đậm, lồn đười ươi nó địt Lồn con vịt nó phang, lồn giang mai lồn ỉa chảy Lồn nhảy hiphop, lồn hàng xốp làm hàng hiệu Lồn hàng triệu con súc vật, mà tao địt con đĩ mẹ mày Đứng từ trên cao, mà lao đầu xuống đất Địt lất phất như mưa rơi, địt tơi bởi như bom đạn Địt lãng mạn như Romeo và Juliet Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm Địt đứng tim phổi, địt cặp mắt nai Mà địt chai lỗ đít, địt khít cái lỗ lồn  Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày Như gà mái mổ giun, như chó càn cắn dậu Thằng cậu mày hiếp dâm, tao bật cái cánh cửa Cho con mẹ mày nằm ngửa, bửa nát tử cung Khai thông buồng trứng, hứng full tinh trùng Địt bồi hồi cảm xúc, địt như bánh đúc ra lò Địt như mấy con phò bên hồ Hoàn Kiếm Địt như mấy con điếm bên chợ Đồng Xuân  Địt đằng chân mà lên đằng đầu Địt sập cầu sập cống Địt con mẹ mày sống Địt con mẹ mày chết Cho con mẹ mày AIDS Cho con mẹ mày sida Mà tao địt từ Nga, mà qua tới Pháp  Tao lại địt về Việt Nam mà ra hàng Cỏ  Và một trăm thằng da đỏ, một nghìn thằng da đen Nó lại bem vào cái lỗ lồn con đĩ mẹ mày Địt vô đầu gối Địt thối màng trinh Địt bất thình lình Địt kiểu âu tướng Địt hướng mặt trời Địt chơi địt bời Địt rakiểu mới Địt tới địt lui Địt búi cả đầu Địt đâu cũng chết Địt bết cả lồn Địt kiểu teo kiểu héo Kiểu ngang kiểu dọc Kiểu không cần khoa học Cũng chọc thủng lồn con đĩ mẹ mày Cái thằng đâm cha chém chú Bóp vú chị dâu Cạo đầu em nhỏ Bắn bỏ em trai Kì lồn em gái Đái ỉa ra sông Như công xỉa cánh Như đánh chó hoang Đập đầu chó thiến Chiềng hàng chiềng trại Bắn hại chim non Đập đầu chim cú Bú lồn chim sẻ Bẻ lồn chim ri Kì lồn chim cắt Và đút buồi vào chim trâu Địt cái lồn mẹ mày Đi với phật thì mặc áo cà sa Đi với mà thìmặc áo giấy Mà cái lồn con đĩ mẹ mày không đầy chấy thì cũng đầy ve mà giữa cái hột le", threadID);

  };

 

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "có link ko")) {

    return api.sendMessage("Link bao nhiêu phút á cho e xem với nào 🤤", threadID);

  };

 

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {

    return api.sendMessage("Cúu cc ngu thì chết khôn thì sống cậu chủ tường đẹp chai bảo tao thế <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {

    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);

  };

 

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {

    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);

  };

 

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {

    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);

  };  

 

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {

    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);

  };

 

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {

    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);

  };  

 

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {

    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe lchat", threadID);

  };


  if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "vcut") || (event.body.toLowerCase() == "vcuc")) {

    return api.sendMessage("️Cứt đâu :v", threadID);
  };
    
  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "con cac")) {

    return api.sendMessage("️Đm móc ra bố check hàng :))) xem có to ko hay bé bằng quả ớt", threadID);

  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {

    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);

  };

 

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "lozz")) {

    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);

  };

 

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clm bot")) {

    return api.sendMessage("️Chửi gì đấy con dog :) bố mày nhịn mày lâu lắm rồi đấy nhá", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot như cc")) {

    return api.sendMessage("️Chửi gì đấy con dog :) bố mày nhịn mày lâu lắm rồi đấy nhá", threadID);

  };

 
  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot láo quá")) {

    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);

  };

 

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {

    return api.sendMessage("️Haha dui quá ha :>> cười cặc :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {

    return api.sendMessage("️cười clmm à :>> cười cặc :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {

    return api.sendMessage("️đâu chụp coi🤤", threadID);

  };


 

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lol")) {

    return api.sendMessage("️Mày có ko ? :) lôi ra", threadID);

  };

 

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {

    return api.sendMessage("️cha sinh mẹ đẻ mà nói vậy là dở r", threadID);

  };

 

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {

    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);

  };

 

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {

    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);

  };

 if ((event.body.toLowerCase() == "?") || (event.body.toLowerCase() == "???")) {

    return api.sendMessage("Chấm hỏi cc, mày thích chấm ko, tao chấm ngay đầu mày giờ", threadID);

  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clm")) {

    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ", threadID);

  };

 

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {

    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {

    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {

    return api.sendMessage("Có, yêu cô ấy nhất nên đừng hòng cướp của tôi", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {

    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "im di")) {

    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nứng hay gì bảo t im :>>", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {

    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {

    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {

    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {

    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {

    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {

    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {

    return api.sendMessage("Có <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {

    return api.sendMessage("Có <3", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {

    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ nha <3\nLink : https://www.facebook.com/hoangquangtuong.User", threadID);

  };

 

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {

    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);

  };

 

  if ((event.body.toLowerCase() == "Bot ngủ ngon ") ||  (event.body.toLowerCase() == "ngủ ngon")) {

    return api.sendMessage("Chúc em yêu ngủ ngon, lên giường với anh nhé❤️❤️", threadID);

  };

 

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {

    return api.sendMessage("À ý mày bảo mày là chó á hả sủa đi tao nghe :)", threadID);

  };

 

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {

    var msg = {

      body: rand

    }

    return api.sendMessage(msg, threadID, messageID);

  };

 

}

 

module.exports.run = async function ( { api, event } ) {

api.sendMessage(`[⚜️]➜ Tự động trả lời khi có chữ bot dầu tiên`,event.threadID,event.messageID)

}
/*module.exports.config = {
    name: "goibot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot autoreply",
    commandCategory: "tiện ích",
    usages: "gọi bot",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    Users: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
  const data = [
      "526220108111421",
    "526220308111401",
    "526220484778050",
    "526220691444696",
    "526220814778017",
    "526220978111334",
    "526221104777988",
    "526221318111300",
    "526221564777942",
    "526221711444594",
    "526221971444568"
  ];
  const sticker = data[Math.floor(Math.random() * data.length)];
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = ["Yêu em <3", "Em là con bot cute nhất <3", `Hi,${g} chào con vợ bé:3`, "Vợ gọi có việc gì không?", `Dạ ${g} có em đây, yêu em không mà gọi <3. hmm...`, `${g}, sử dụng callad để liên lạc với admin!`, `${g}, gọi em có việc gì thế`, `${g}, yêu em ko mà gọi 🥲`, `${g}, tôi yêu bạn vl ❤`, `${g}, yêu nhau không?`, `${g}, bạn có yêu tôi không ❤`, `${g}, dạ có em đây:3`, `${g}, Bảo bao nhiêu lần ròi đừng gọi bot mà :< đang mệt chetme đây`, `${g}, yêu em ❤`, `${g}, ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc !!!`, `${g}, Em đây`, "chào bạn tôi là bot của NTN", "bạn gọi tôi có việc gì?", "tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Chồng gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "Yêu anh  nhất💟", "Yêu thương admin nhất", "Anh ấy là phụ trợ của admin", "Sao thế công chúa", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Làm đĩ không ạ? dui lắm", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Em dthw như chủ của em ạ", "Đừng khen em ngại quá hí hí" , "Đừng spam em nha :<<, cô chủ em mệt lắm ời", "Cút ra", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Spam cc cút", "Yêu em không?", "Mày bị làm sao í@@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Chần chờ gì vợ ơi anh đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp vợ của admin :))", "Anh quát em à?\nNói to thế á?", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "cccccccccccccccccccc", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭"],
        u = l[Math.floor(Math.random() * l.length)];
    ["bot", "bot ơi", "bot oi", "yêu bot", "bot đâu", "bot à", "bot đâu rồi", "bot đâu r"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "[=== GỌI BOT ===]\n", console.log(modules, e + "|", t, h), a = u,  void o.sendMessage(a, n, s) 
        }
        var a
    }))
}, module.exports.languages = {
    vi: {
        on: "Bật",
        off: "Tắt",
        successText: "goibot thành công"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};*/