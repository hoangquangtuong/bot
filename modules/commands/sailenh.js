module.exports.config = {
    name: "\n",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "",
    description: "nhấn dấu lệnh sẽ random thơ và ảnh gái",
    commandCategory: "admin",
    usages: "",
    cooldowns: 0
};
module.exports.run = async function ({ api, event, args}) {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');
  const { threadID, messageID } = event;
  const data = [
"Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình",
"Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?",
"Chớ nghe lời phỉnh tiếng phờ\nThò tay vào lờ, mắc kẹt cái hom",
"Măng chua nấu cá ngạch nguồn\nSự đời đắp đổi, khi buồn khi vui.",
"Yêu nhau xé lụa may quần\nGhét nhau kể nợ kể nần nhau ra",
"Ai ơi chớ vội cười nhau\nCây nào mà chẳng có sâu chạm cành",
"Khi giàu chẳng có đỡ ai\nĐến khi hoạn nạn chẳng ai đỡ mình",
"Ở sao cho vừa lòng người\nỞ rộng người cười, ở hẹp người chê.",
"Chim khôn chưa bắt đã bay,\nNgười khôn ít nói, ít hay trả lời",
"Ăn cứt đá bô",
"Ăn quả nhớ kẻ trồng cây,\nĂn khoai nhớ kẻ cho dây trồng khoai",
"Gió mùa thu anh ru em ngủ\nEm ngủ rồi……anh cạy tủ anh đi",
"Những đêm dài ngồi chơi vi tính\nBỗng bàng hoàng khi nhìn thấy roi mây",
"Trước mắt em anh là thằng hai lúa\nSau lưng em anh là chúa giang hồ",
"Nhớ quá khứ buồn rơi nước mắt\nNhìn tương lai lạnh toát mồ hôi.",
"Ta về ta tắm ao ta\nSảy chân chết đuối có người nhà vớt lên",
"Ta về ta tắm ao ta\nDù trong dù đục vẫn là cái ao",
"Bình tĩnh tự tin không cay cú\nÂm thầm chịu đựng trả thù sau.",
"Má ơi đừng gả con xa\nGả con qua Úc,Canada được rồi\nMá ơi đừng gả con xa\nChim kêu vượn hú biết nhà má đâu\nMá ơi đừng gả con gần\nCon qua mượn gạo nhiều lần má la",
"Tình chỉ đẹp khi còn dang dở\nCưới nhau về tắt thở càng nhanh",
"Vẽ hình em lên cát\nRồi hôn em một phát\nÔi cuộc đời chua chát\nToàn là đất với cát",
"Anh có thể chịu được sự lạnh giá.\nNhưng không thể chịu được sự lạnh nhạt của em",
"Đông lạnh chăn ấm nệm êm.\nKhông bằng một phút êm đềm bên em",
"Trời nay lạnh đến thế.\nLại còn lất phất mưa.\nTớ thích cậu nhiều thế.\nCậu đã động lòng chưa.",
"Mùa đông thì lạnh.\nÁo quần mong manh.\nĐiều em muốn nhất.\nLà gần bên anh.",
"Ngoài kia gió rét sương sa.\nVề đây có nắng, có nhà, có em",
"Son màu đỏ, cỏ màu xanh, trời trở lạnh.\nMình yêu dần đi anh",
"Đông về cây buồn rụng hết lá.\nEm buồn vì lạnh giá chẳng có ai",
"Anh ơi gió lạnh gần kề, anh mau thu xếp mà về bên em",
"Chạy đâu cho khỏi mưa rào.\nChạy đâu cho khỏi sà vào tay em",
"Nhìn nắng thì anh chói, nhìn em thì anh đói.",
"Anh ơi nắng ấm xa dần.\nĐông sang gió lạnh em cần anh thôi.",
"Ngoài đường trời mưa tầm tã, cho em ngã vào lòng anh được không?",
"Sẽ thật tuyệt vời nếu rơi vào một chiều Đông,\nem cưa chị đổ chị gọi em là Phi Công",
" Gió đưa cành trúc la đà\nChào anh em mới đứng đây tới chiều\nĐứng hoài chẳng thấy anh đâu\nHoa ra anh ở trong tim em rồi.",
"Hôm nay nhà nấu cháo lòng\nCháo em ăn hết, để lòng nhớ anh.",
"Thích em anh để trong lòng\nNói ra nước dãi thòng lòng kém sang.",
"Râu tôm nấu với ruột bầu\nEm đây thì muốn có bầu với anh.",
"Người ta vì thiên hạ mà điên đảo\nTa vì chàng mà phiền não quanh năm.",
"Dí dầu cầu ván đóng đinh\nCầu tre lắc lẽo, gập ghềnh thương em.",
"Anh ơi trà sữa em mời\nNhưng anh phải hứa cả đời thương em",
"Bầu ơi thương lấy bí cùng\nTuy rằng khác giới, nhưng chung 1 giường",
"Em hỏi câu này có lấy anh không?",
"Chẳng cần nghiêng nước nghiêng thành\nNghiêng sao cho đủ lòng anh là vừa",
"Con cừu non nhảy ra miệng chén\nTình chúng mình yêu lén mẹ cha\nKhông ngờ mẹ biết mẹ la\nAnh đem sính lễ đến nhà cưới em",
"Nếu chúa phán yêu nhau là hủy hoại\nThì con tin nhân loại chẳng còn ai\nNếu chúa phán yêu nhau là có tội\nThì con xin chịu tội để được yêu",
"EM ơi trái đất dẫu tròn,\nEm trốn không kịp là còn gặp anh",
"Hoa chỉ nở khi có người tưới nước.\nEm chỉ cười khi đứng trước người em yêu",
"Đừng gọi em là thiếu nữ.\nTrong khi thứ em thiếu là đàn ông",
"Nhà em gần miếu, gần chùa.\nAnh không yêu, em cũng bỏ bùa cho yêu",
"Em yêu anh không hề nói phét.\nTình chúng mình căng đét phải không anh?",
"Hôm nay em bận yêu đời.\nHẹn anh hôm khác chúng mình yêu nhau",
"Trời không xanh\nMây cũng không trắng\nEm không say nắng\nNhưng lại say anh",
"Bao nhiêu cân thính cho vừa\nBao nhiêu cân bả mới lừa được em",
"Thiếu 500 nghìn là em tròn một củ\nThiếu anh nữa là em đủ một đôi",
"Đố ai quyét sạch được lá rừng\nĐố ai khuyên được em ngừng yêu anh",
"Cho anh một cốc trà đào\nTiện cho em hỏi lối vào tim anh",
"Trung thu anh vẫn một mình\nNếu em vẫn vậy thì mình đi chung",
"Cành cây còn có lá\nChú cá còn đang bơi\nSao em cứ mải chơi\nChẳng chịu nhìn em thế",
"Anh có một siêu năng lượng\nĐó là siêu thích em",
"Quyết không tiêu từ giờ đến tết Để dành tiền mua hết trái tim anh",
"Người ta dính phốt ngoại tình. Còn tôi dính phốt một mình lâu năm",
"Nắng nơi em nắng hoài không tắt. Yêu anh rồi yêu mãi không thôi",
"Cây đa giếng nước sân đình. Bao giờ em mới hết một mình đây anh",
"Em thiếu anh như hoa thiếu nắng\nCó anh rồi nắng chết hết cả hoa.\nMuốn yêu cô gái dịu hiền\nAlo nhấc máy gọi liền cho em",
"Em đây rất thích đồng hồ.\nThích luôn cả việc làm bồ của anh",
"Tim em đã bật đèn xanh.\nMà sao anh cứ đạp phanh thế này",
"Anh biến tất cả mọi điều.\nNhưng vẫn luôn rảnh để nhớ đến em",
"Ao thì có bờ, sông thì có bến.\nCòn em một mình thì ai đến với em đây",
"Trái Đất quay quanh Mặt Trời.\nCòn em thì quay mãi trong tâm trí anh",
"Đi đi kẻo lỡ đèn xanh.\nYêu đi kẻo lỡ tình anh bây giờ",
"Đôi khi bạn yêu một thành phố.\nKhông phải vì nó có gì, mà vì nó có em",
"Lồng thì để anh nhốt chim.\nCon em anh nhốt ở trong tim nè",
"Anh có tin vào duyên số không.\nNếu không thì anh đưa số điện thoại đây",
"Nhiều khi muốn nhớ một người.\nSuy đi tính lại thấy lười nên thôi",
"Vertor chỉ có một chiều.\nAnh dân chuyên toán chỉ yêu 1 người",
"Bạn có biết, Nguyễn Thành Nhân rất đẹp traii"
                
 ]; //thêm ngồn từ gì tùy bạn
  const daoly = data[Math.floor(Math.random() * data.length)];
  var anh = [
      "https://i.imgur.com/iSAejSB.jpg",
"https://i.imgur.com/bDgHtLv.jpg",
"https://i.imgur.com/e8pPmPv.jpg",
"https://i.imgur.com/FZNZrmg.jpg",
"https://i.imgur.com/8qk4gq0.jpg",
"https://i.imgur.com/0dM5C3z.jpg",
"https://i.imgur.com/DjPVuUm.jpg",
"https://i.imgur.com/Yuxe71d.jpg",
"https://i.imgur.com/Ud5cEFq.jpg",
"https://i.imgur.com/vCKIb0O.jpg",
"https://i.imgur.com/JkIl50k.jpg",
"https://i.imgur.com/6ABwS7i.jpg",
"https://i.imgur.com/Ye7qlbw.jpg",
"https://i.imgur.com/gryzOen.jpg",
"https://i.imgur.com/NP0sdUc.jpg",
"https://i.imgur.com/q0rKNsr.jpg",
"https://i.imgur.com/YVLjuVV.jpg",
"https://i.imgur.com/X24SK2G.jpg",
"https://i.imgur.com/eSAueQz.jpg",
"https://i.imgur.com/oRVOR0W.jpg",
"https://i.imgur.com/EkHWUpa.jpg",
"https://i.imgur.com/p2HzsXQ.jpg",
"https://i.imgur.com/vm0Sq3F.jpg",
"https://i.imgur.com/qKVZs8U.jpg",
"https://i.imgur.com/v3Zyyob.jpg",
"https://i.imgur.com/hNbsZ43.jpg",
"https://i.imgur.com/kVQx8Za.jpg",
"https://i.imgur.com/KO6rtui.jpg",
"https://i.imgur.com/EHSF0cM.jpg",
"https://i.imgur.com/SkouUM6.jpg",
"https://i.imgur.com/gnIHYP4.jpg",
"https://i.imgur.com/NJPvfEg.jpg",
"https://i.imgur.com/Q0NiO3V.jpg",
"https://i.imgur.com/Js4PDKC.jpg",
"https://i.imgur.com/KJuO7fI.jpg",
"https://i.imgur.com/jdoPS0o.jpg",
"https://i.imgur.com/IWm8yiW.jpg",
"https://i.imgur.com/6pchJmm.jpg",
"https://i.imgur.com/ptmUUKZ.jpg",
"https://i.imgur.com/5hWZts5.jpg",
"https://i.imgur.com/2cNXMs8.jpg",
"https://i.imgur.com/aCa5OMy.jpg",
"https://i.imgur.com/bkAhQ9N.jpg",
"https://i.imgur.com/qNCbsbB.jpg",
"https://i.imgur.com/GtsceRX.jpg",
"https://i.imgur.com/knpwcJz.jpg",
"https://i.imgur.com/4tYwzr1.jpg",
"https://i.imgur.com/1oy8l4D.jpg",
"https://i.imgur.com/l1VPp1w.jpg",
"https://i.imgur.com/JiWVLKb.jpg",
"https://i.imgur.com/DoCnERH.jpg",
"https://i.imgur.com/HlbIwkQ.jpg",
"https://i.imgur.com/MfMSEU2.jpg",
"https://i.imgur.com/3nKvsP4.jpg",
"https://i.imgur.com/IfeE7Sv.jpg",
"https://i.imgur.com/UVc7zzE.jpg",
"https://i.imgur.com/PijhNE3.jpg",
"https://i.imgur.com/xAbHS9o.jpg",
"https://i.imgur.com/JFA1uj3.jpg",
"https://i.imgur.com/eWDRrWW.jpg",
"https://i.imgur.com/pJSbboG.jpg",
"https://i.imgur.com/puvzf9A.jpg",
"https://i.imgur.com/kW0eOV7.jpg",
"https://i.imgur.com/BFvIw8e.jpg",
"https://i.imgur.com/a9mB7u1.jpg",
"https://i.imgur.com/0wWCX3A.jpg",
"https://i.imgur.com/wmuIp2v.jpg",
"https://i.imgur.com/HsAErrS.jpg",
"https://i.imgur.com/WbF0OlG.jpg",
"https://i.imgur.com/gwFrHEI.jpg",
"https://i.imgur.com/otFFsWa.jpg",
"https://i.imgur.com/Y5kMtPx.jpg",
"https://i.imgur.com/SYZG96w.jpg",
"https://i.imgur.com/UyZTIsY.jpg",
"https://i.imgur.com/ElhzeLV.jpg",
"https://i.imgur.com/oqmN63X.jpg",
"https://i.imgur.com/MOdMOK0.jpg",
"https://i.imgur.com/FvfHdOA.jpg",
"https://i.imgur.com/cZlLEEu.jpg",
"https://i.imgur.com/D2sPVkC.jpg",
"https://i.imgur.com/FNRRTy7.jpg",
"https://i.imgur.com/GDEBTl2.jpg",
"https://i.imgur.com/dOZwgSd.jpg",
"https://i.imgur.com/Sh0kRwG.jpg",
"https://i.imgur.com/M0AYNug.jpg",
"https://i.imgur.com/vmU9UAM.jpg",
"https://i.imgur.com/QIcueNQ.jpg",
"https://i.imgur.com/xAU0nhF.jpg",
"https://i.imgur.com/YrfpgRK.jpg",
"https://i.imgur.com/gZzXhlI.jpg",
"https://i.imgur.com/m6pQwFY.jpg",
"https://i.imgur.com/g4VArWU.jpg",
"https://i.imgur.com/5j5OboX.jpg",
"https://i.imgur.com/DrjPCxZ.jpg",
"https://i.imgur.com/k5nG1hR.jpg",
"https://i.imgur.com/tpqGDGf.jpg",
"https://i.imgur.com/Q8VLAUw.jpg",
"https://i.imgur.com/lyPc2A8.jpg",
"https://i.imgur.com/ATOUNQL.jpg",
"https://i.imgur.com/iGzMHrV.png",
"https://i.imgur.com/jppLuim.jpg",
"https://i.imgur.com/GORiYUe.jpg",
"https://i.imgur.com/vmwkLa2.jpg",
"https://i.imgur.com/zv8RhN7.jpg",
"https://i.imgur.com/jUMfLcS.jpg",
"https://i.imgur.com/l17Ory1.jpg",
"https://i.imgur.com/DE1TKsQ.jpg",
"https://i.imgur.com/mosyDBJ.jpg",
"https://i.imgur.com/BQu1WQ8.jpg",
"https://i.imgur.com/wof8jon.jpg",
"https://i.imgur.com/IMZGA08.jpg",
"https://i.imgur.com/bW0lHwr.jpg",
  "https://i.imgur.com/YdB116g.jpg",
"https://i.imgur.com/ZMQXntv.jpg",
"https://i.imgur.com/x3Zqf83.jpg",
"https://i.imgur.com/ZAzfpHm.jpg",
"https://i.imgur.com/jb0VcXf.jpg",
"https://i.imgur.com/vSnK0kM.jpg",
"https://i.imgur.com/lLe52T9.jpg",
"https://i.imgur.com/y9Obelj.jpg",
"https://i.imgur.com/W9D70jS.jpg",
"https://i.imgur.com/iakSOjj.jpg",
"https://i.imgur.com/B0LZTMK.jpg",
"https://i.imgur.com/s897YGf.jpg",
"https://i.imgur.com/jI1HEbN.jpg",
"https://i.imgur.com/aYyFibI.jpg",
"https://i.imgur.com/RJsE4Oa.jpg",
"https://i.imgur.com/TREw7IL.jpg",
"https://i.imgur.com/qoTa0Vb.jpg",
"https://i.imgur.com/N3aAEbZ.jpg",
"https://i.imgur.com/NXBaIdB.jpg",
"https://i.imgur.com/81BvAiO.jpg",
"https://i.imgur.com/W5UJSht.jpg",
"https://i.imgur.com/1bDdrg7.jpg",
"https://i.imgur.com/YvQJjfm.jpg",
"https://i.imgur.com/UqNk5f7.jpg",
"https://i.imgur.com/WxByvKt.jpg",
"https://i.imgur.com/kLS1rwl.jpg",
"https://i.imgur.com/c8IBlUp.jpg",
"https://i.imgur.com/CxDWgHU.jpg",
"https://i.imgur.com/puzRInv.jpg",
"https://i.imgur.com/1BU76Ng.jpg",
"https://i.imgur.com/SQd1OXQ.jpg",
"https://i.imgur.com/AvI3Drc.jpg",
"https://i.imgur.com/iQTGasd.jpg",
"https://i.imgur.com/tiMeCSn.jpg",
"https://i.imgur.com/TDyXVVj.jpg",
"https://i.imgur.com/VkhdV4h.jpg",
"https://i.imgur.com/4VhTdbP.jpg",
"https://i.imgur.com/U9ftFDu.jpg",
"https://i.imgur.com/4wfIPs0.jpg",
"https://i.imgur.com/QsO5H6i.jpg",
"https://i.imgur.com/wkvNpCk.jpg",
"https://i.imgur.com/x43qLFC.jpg",
"https://i.imgur.com/qllZqSB.jpg",
"https://i.imgur.com/JEqtMow.jpg",
"https://i.imgur.com/x8SaFe0.jpg",
"https://i.imgur.com/YHrj0mP.jpg",
"https://i.imgur.com/LaWUKeu.jpg",
"https://i.imgur.com/uXNlEj6.jpg",
"https://i.imgur.com/Fe8rWdH.jpg",
"https://i.imgur.com/Ivl5h47.jpg",
"https://i.imgur.com/uvPpHbU.jpg",
"https://i.imgur.com/NI63VZY.jpg",
"https://i.imgur.com/nZSa3tk.jpg",
"https://i.imgur.com/qOFQl3C.jpg",
"https://i.imgur.com/7qdehdr.jpg",
"https://i.imgur.com/IWAyiGn.jpg",
"https://i.imgur.com/49vhusE.jpg",
"https://i.imgur.com/vlV54lD.jpg",
"https://i.imgur.com/wZ7LDFW.jpg",
"https://i.imgur.com/vS1GiIe.jpg",
"https://i.imgur.com/nqH7IAX.jpg",
"https://i.imgur.com/eYmNQhs.jpg",
"https://i.imgur.com/nBnPQwZ.jpg",
"https://i.imgur.com/hUf5v8Y.jpg",
"https://i.imgur.com/eyxM6q7.jpg",
"https://i.imgur.com/0cJo1nx.jpg",
"https://i.imgur.com/SPWSUwh.jpg",
"https://i.imgur.com/e9Mvc4c.jpg",
"https://i.imgur.com/hbNk85R.jpg",
"https://i.imgur.com/7kLnZsk.jpg",
"https://i.imgur.com/O7IsjI3.jpg",
"https://i.imgur.com/Yew39ZD.jpg",
"https://i.imgur.com/ds5q7jW.jpg",
"https://i.imgur.com/rkmYWLn.jpg",
"https://i.imgur.com/vryQZ9G.jpg",
"https://i.imgur.com/uoGBtCC.jpg",
"https://i.imgur.com/GQMZxv5.jpg",
"https://i.imgur.com/5OvUypA.jpg",
"https://i.imgur.com/01UU21y.jpg",
"https://i.imgur.com/8ZJZU11.jpg",
"https://i.imgur.com/5ooypOX.jpg",
"https://i.imgur.com/iakSOjj.jpg",
"https://i.imgur.com/eDYVqkO.jpg",
"https://i.imgur.com/EVMGI2n.jpg",
"https://i.imgur.com/m54Ysjh.jpg",
"https://i.imgur.com/zuz2B0A.jpg",
"https://i.imgur.com/tjeycE2.jpg",
"https://i.imgur.com/anUEh28.jpg",
"https://i.imgur.com/gnqJV4Z.jpg",
"https://i.imgur.com/gs1nesp.jpg",
"https://i.imgur.com/KCA4GGC.jpg",
"https://i.imgur.com/ECPGHlL.jpg",
"https://i.imgur.com/dcMv2MD.jpg",
"https://i.imgur.com/uiwa3j9.jpg",
"https://i.imgur.com/2q5UkHd.jpg",
"https://i.imgur.com/Si0dI7h.jpg",
"https://i.imgur.com/laVT74F.jpg",
"https://i.imgur.com/uVEEneY.jpg",
"https://i.imgur.com/SsSJSos.jpg",
"https://i.imgur.com/MG0QwXD.jpg",
"https://i.imgur.com/vebktLl.jpg",
"https://i.imgur.com/kFBCo1i.jpg",
"https://i.imgur.com/LaOZhbr.jpg",
"https://i.imgur.com/XQAeEYh.jpg",
"https://i.imgur.com/oY8wsrz.jpg",
"https://i.imgur.com/pNuHmiW.jpg",
"https://i.imgur.com/qHdWPbH.jpg",
"https://i.imgur.com/jP03R4C.jpg",
"https://i.imgur.com/vRO7n2S.jpg",
"https://i.imgur.com/s748ISG.jpg",
"https://i.imgur.com/Ko8QtHj.jpg",
"https://i.imgur.com/gy0Dvrg.jpg",
"https://i.imgur.com/lauNOpj.jpg",
"https://i.imgur.com/cxGZwD0.jpg",
"https://i.imgur.com/UToPhpq.jpg",
"https://i.imgur.com/qlzNJB5.jpg",
"https://i.imgur.com/grRBLAk.jpg",
"https://i.imgur.com/4dNXQBk.jpg",
"https://i.imgur.com/5fM8xTm.jpg",
"https://i.imgur.com/rge1ZQY.jpg",
"https://i.imgur.com/EWDV2BK.jpg",
"https://i.imgur.com/3UaD4Or.jpg",
"https://i.imgur.com/Y1kpWnt.jpg",
"https://i.imgur.com/qofhw1D.jpg",
"https://i.imgur.com/0Izr2Tq.jpg",
"https://i.imgur.com/gZuHJz9.jpg",
"https://i.imgur.com/xce2KcF.jpg",
"https://i.imgur.com/DDIDbzh.jpg",
"https://i.imgur.com/U8sUreM.jpg",
"https://i.imgur.com/azgCALW.jpg",
"https://i.imgur.com/nKxFD1C.jpg",
"https://i.imgur.com/L4kLPru.jpg",
"https://i.imgur.com/pId9AoN.jpg",
"https://i.imgur.com/blXUFiK.jpg",
"https://i.imgur.com/fBeF3Q2.jpg",
"https://i.imgur.com/Npk0gDW.jpg",
"https://i.imgur.com/Rw2ZDBT.jpg",
"https://i.imgur.com/3cpxLqz.jpg",
"https://i.imgur.com/XIEn3VI.jpg",
"https://i.imgur.com/IDNKxjo.jpg",
"https://i.imgur.com/8AGUs7K.jpg",
"https://i.imgur.com/0wXSFpu.jpg",
"https://i.imgur.com/XkvgLD5.jpg",
"https://i.imgur.com/fi82843.jpg",
"https://i.imgur.com/jGszoDk.jpg",
"https://i.imgur.com/n3oJs04.jpg",
"https://i.imgur.com/dITwUdX.jpg",
"https://i.imgur.com/eCxQrjD.jpg",
"https://i.imgur.com/MWook9m.jpg",
"https://i.imgur.com/zjdNbJz.jpg",
"https://i.imgur.com/93BCKPt.jpg",
"https://i.imgur.com/35ECnYg.jpg",
"https://i.imgur.com/Ska8X5c.jpg",
"https://i.imgur.com/Gp0EzXY.jpg",
"https://i.imgur.com/MA3FVWQ.jpg",
"https://i.imgur.com/BSRo9NR.jpg",
"https://i.imgur.com/sDEdj3t.jpg",
"https://i.imgur.com/9Da2Sb7.jpg",
"https://i.imgur.com/9ySACkt.jpg",
"https://i.imgur.com/Jq2RotK.jpg",
"https://i.imgur.com/RsAwAwP.jpg",
"https://i.imgur.com/7oLjxHS.jpg",
"https://i.imgur.com/ffh8Ee4.jpg",
"https://i.imgur.com/Uy9lMxZ.jpg",
"https://i.imgur.com/GwtYMyl.jpg",
"https://i.imgur.com/UppzfSr.jpg",
"https://i.imgur.com/L3WLuEL.jpg",
"https://i.imgur.com/k82bFWl.jpg",
"https://i.imgur.com/88tKnbK.jpg",
"https://i.imgur.com/xNPiqmC.jpg",
"https://i.imgur.com/JvY5eJX.jpg",
"https://i.imgur.com/91Q0q5G.jpg",
"https://i.imgur.com/STs1qC8.jpg",
"https://i.imgur.com/tWBMBDR.jpg",
"https://i.imgur.com/hiDp9PU.jpg",
"https://i.imgur.com/mOdZ0E5.jpg",
"https://i.imgur.com/vvivedS.jpg",
"https://i.imgur.com/uVu6etm.jpg",
"https://i.imgur.com/TOLTEah.jpg",
"https://i.imgur.com/wZLtGsf.jpg",
"https://i.imgur.com/xTC1pyu.jpg",
"https://i.imgur.com/uvAcIKL.jpg",
"https://i.imgur.com/b3ghnMi.jpg",
"https://i.imgur.com/kRO4pIp.jpg",
"https://i.imgur.com/q9CcPJF.jpg",
"https://i.imgur.com/eVjwD8o.jpg",
"https://i.imgur.com/bdukKE3.jpg",
"https://i.imgur.com/JcrKENB.jpg",
"https://i.imgur.com/21pwJri.jpg",
"https://i.imgur.com/x42x40R.jpg",
"https://i.imgur.com/FEeTbee.jpg",
"https://i.imgur.com/6oWf6zk.jpg",
"https://i.imgur.com/ZroomZD.jpg",
"https://i.imgur.com/LNA5iMq.jpg",
"https://i.imgur.com/cqw5kSi.jpg",
"https://i.imgur.com/Jcfg6Uh.jpg",
"https://i.imgur.com/9F7fape.jpg",
"https://i.imgur.com/ZHMq4Zh.jpg",
"https://i.imgur.com/sklmxXT.jpg",
"https://i.imgur.com/W0FTa1r.jpg",
"https://i.imgur.com/nES0wz3.jpg",
"https://i.imgur.com/kQdFWzP.jpg",
"https://i.imgur.com/RkTEc6S.jpg",
"https://i.imgur.com/OHNE1RD.jpg",
"https://i.imgur.com/4St4vcW.jpg",
"https://i.imgur.com/0DQScC0.jpg",
"https://i.imgur.com/eUPBWNj.jpg",
"https://i.imgur.com/cfviZxn.jpg",
"https://i.imgur.com/2qvteYC.jpg",
"https://i.imgur.com/l6t5Ukt.jpg",
"https://i.imgur.com/aWYw8Ac.jpg",
"https://i.imgur.com/lMnRzjw.jpg",
"https://i.imgur.com/yaVJK54.jpg",
"https://i.imgur.com/o2eoLMW.jpg",
"https://i.imgur.com/HzvbktH.jpg",
"https://i.imgur.com/LKkw8SL.jpg",
"https://i.imgur.com/4s3mcVi.jpg",
"https://i.imgur.com/qeUGDRD.jpg",
"https://i.imgur.com/VvnyJcu.jpg",
"https://i.imgur.com/MNeIS35.jpg",
"https://i.imgur.com/VbUVHVF.jpg",
"https://i.imgur.com/nNGFhXk.jpg",
"https://i.imgur.com/NHIAFNo.jpg",
"https://i.imgur.com/sPmRGf6.jpg",
"https://i.imgur.com/4gR4ZfU.jpg",
"https://i.imgur.com/VeSlJtD.jpg",
"https://i.imgur.com/OUm8mul.jpg",
"https://i.imgur.com/hnPUaKC.jpg",
"https://i.imgur.com/mMLIQYQ.jpg",
"https://i.imgur.com/OwHoUKt.jpg",
"https://i.imgur.com/x4F1y2O.jpg",
"https://i.imgur.com/emFHYCx.jpg",
"https://i.imgur.com/GXC7cAh.jpg",
"https://i.imgur.com/eRjpucB.jpg",
"https://i.imgur.com/66XImpV.jpg",
"https://i.imgur.com/J3URs2M.jpg",
"https://i.imgur.com/Voigdvh.jpg",
"https://i.imgur.com/URc4Sy1.jpg",
"https://i.imgur.com/Y51X4Sj.jpg",
"https://i.imgur.com/liPfLZv.jpg",
"https://i.imgur.com/5ZTJgJv.jpg",
"https://i.imgur.com/s452O6A.jpg",
"https://i.imgur.com/wMeXTzs.jpg",
"https://i.imgur.com/YZ8cn2a.jpg",
"https://i.imgur.com/MaCNEgU.jpg",
"https://i.imgur.com/VaMrFuv.jpg",
"https://i.imgur.com/j47cZ1N.jpg",
"https://i.imgur.com/rAgLdxV.jpg",
"https://i.imgur.com/X09ucxg.jpg",
"https://i.imgur.com/6sDGXwQ.jpg",
"https://i.imgur.com/FGeqdaJ.jpg",
"https://i.imgur.com/cAdwW9E.jpg",
"https://i.imgur.com/GHwhmhc.jpg",
"https://i.imgur.com/Ta4Cnkr.jpg",
"https://i.imgur.com/L8sK15F.jpg",
"https://i.imgur.com/uA5C5o3.jpg",
"https://i.imgur.com/X8yvGSI.jpg",
"https://i.imgur.com/dpkIkUr.jpg",
"https://i.imgur.com/0Ndp4v6.jpg",
"https://i.imgur.com/uvRTj9A.jpg",
"https://i.imgur.com/uJvEzjy.jpg",
"https://i.imgur.com/xOQBuDi.jpg",
"https://i.imgur.com/McMRMuh.jpg",
"https://i.imgur.com/PiZjIcl.jpg",
"https://i.imgur.com/h6M1F56.jpg",
"https://i.imgur.com/RcKlDtn.jpg",
"https://i.imgur.com/6vUR4dV.jpg",
"https://i.imgur.com/BWjxLNU.jpg",
"https://i.imgur.com/KB9fcVs.jpg",
"https://i.imgur.com/KXW5C9Q.jpg",
"https://i.imgur.com/guAPgcX.jpg",
"https://i.imgur.com/rmr6L2b.jpg",
"https://i.imgur.com/8QI4PEe.jpg",
"https://i.imgur.com/DmGK5lB.jpg",
"https://i.imgur.com/7A54zU7.jpg",
"https://i.imgur.com/ltGJWGZ.jpg",
"https://i.imgur.com/tyGQLjB.jpg",
"https://i.imgur.com/pCmC9Da.jpg",
"https://i.imgur.com/8BoPjtM.jpg",
"https://i.imgur.com/js0EmGa.jpg",
"https://i.imgur.com/l6rw0AJ.jpg",
"https://i.imgur.com/pX1DP5m.jpg",
"https://i.imgur.com/MFoj8q2.jpg",
"https://i.imgur.com/iXOHMJN.jpg",
"https://i.imgur.com/LxnSR54.jpg",
"https://i.imgur.com/RsckhMK.jpg",
"https://i.imgur.com/ZUzY6RH.jpg",
"https://i.imgur.com/yd9Xo2x.jpg",
"https://i.imgur.com/gFg2srn.jpg",
"https://i.imgur.com/tDxojpc.jpg",
"https://i.imgur.com/9PFcsFO.jpg",
"https://i.imgur.com/Y5u50rT.jpg",
"https://i.imgur.com/i2jbFdu.jpg",
"https://i.imgur.com/RJKlTqS.jpg",
"https://i.imgur.com/CQ1jS2M.jpg",
"https://i.imgur.com/JQOtxKg.jpg",
"https://i.imgur.com/zSG5SJC.jpg",
"https://i.imgur.com/1EMqO27.jpg",
"https://i.imgur.com/AqqCKce.jpg",
"https://i.imgur.com/ZomcF8W.jpg",
"https://i.imgur.com/pumrjgn.jpg",
"https://i.imgur.com/O4xwaax.jpg",
"https://i.imgur.com/y3Hagle.jpg",
"https://i.imgur.com/nvAI4Wm.jpg",
"https://i.imgur.com/WKXPmuG.jpg",
"https://i.imgur.com/YMrvBYh.jpg",
"https://i.imgur.com/yJrpexz.jpg",
"https://i.imgur.com/zz7oljf.jpg",
"https://i.imgur.com/CUwTgMl.jpg",
"https://i.imgur.com/efkwqpH.jpg",
"https://i.imgur.com/CHuAkuh.jpg",
"https://i.imgur.com/o27QdjP.jpg",
"https://i.imgur.com/lfIGjlv.jpg",
"https://i.imgur.com/L71dgaO.jpg",
"https://i.imgur.com/ybg85Kw.jpg",
"https://i.imgur.com/t3xVE1y.jpg",
"https://i.imgur.com/TgDk0r4.jpg"
    ];
    const link = anh[Math.floor(Math.random() * anh.length)];
    
     var callback = () => api.sendMessage({body:`
『 ${daoly} 』`,attachment: fs.createReadStream(__dirname + "/cache/hay.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/hay.png"),event.messageID);
                return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/hay.png')).on('close', () => callback());
      
  }