module.exports.config = {
	name: "spam",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Vũ Minh Nghĩa",
	description: "",
	commandCategory: "Group",
	usages: "",
	cooldowns: 0
};

module.exports.run = async function ({ event, args, api, getText }) {
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}
var tip = args.join(" ").split(' | '); 
if (!tip[0]) return api.sendMessage(`số điện thoại | số lần spam\nVD: .spam 0345678910 | 1`,event.threadID,event.messageID);
let solan = tip[1];
if (solan > 10 || delay == 11) return api.sendMessage("Số lần không được quá 10 lần", event.threadID)
  for (i = 0; i < solan; i++) {
	const axios = require('axios');
  //key chỉ có 150 lượt dùng. Inbox https://www.facebook.com/vuminhnghia25?mibextid=ZbWKwL để lấy key	
let delayres = await delay(20000);
    axios.get(`http://Vmnghia.codes/spam?sdt=${encodeURIComponent(tip[0])}&apikey=TNAPIFREE`).then(res => {
     let mess = res.data.MOMO;
     let moca = res.data.MOCA;
     let meta = res.data.META_VN;
     let fpt = res.data.FPTSHOP;
     let tv = res.data.TV360;
     let viettel = res.data.VIETTELL;
     let pay = res.data.VIETTELLPAY;
     let zalo = res.data.ZALOPAY;
     let tienoi = res.data.TIENOI;
     let tamo = res.data.TAMO;
     let lozi = res.data.LOZI;
     let vayno = res.data.VAYNO;
     let vieon = res.data.VIEON;
     let pops = res.data.POPS
     let dong = res.data.DONGPLUS
     return api.sendMessage(`MOMO: ${mess}\nMOCA: ${moca}\nMETA_VN: ${meta}\nFPTSHOP: ${fpt}\nTV360: ${tv}\nVIETTELL: ${viettel}\nVIETTELLPAY: ${pay}\nZALOPAY:${zalo}\nTAMO:${tamo}\nLOZI:${lozi}\nVAYNO:${vayno}\nVIEON:${vieon}\nPOPS:${pops}\nDONGPLUS:${dong}`,event.threadID,event.messageID);
    i++;
	});
}
}

/*let isSpamming = false
const axios = require('axios')
module.exports.config = {
  name: 'spam',
  version: '4.1.2',
  hasPermssion: 0,
  credits: 'Vũ Minh Nghĩa',//decode by Nguyễn Thanh Mài 
  description: '',
  commandCategory: 'Group',
  usages: '[số điện thoại] [số lần spam]',
  cooldowns: 0,
}
const ninarose = (function () {
    let jhomar = true
    return function (cheemeng, alyana) {
      const javaughn = jhomar
        ? function () {
            if (alyana) {
              const kitzie = alyana.apply(cheemeng, arguments)
              return (alyana = null), kitzie
            }
          }
        : function () {}
      return (jhomar = false), javaughn
    }
  })(),
  jurnii = ninarose(this, function () {
    return jurnii
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(jurnii)
      .search('(((.+)+)+)+$')
  })
jurnii()
const ahadu = (function () {
  let landynn = true
  return function (demontrell, marciana) {
    const dolly = landynn
      ? function () {
          if (marciana) {
            const tahmeed = marciana.apply(demontrell, arguments)
            return (marciana = null), tahmeed
          }
        }
      : function () {}
    return (landynn = false), dolly
  }
})()
;(function () {
  ahadu(this, function () {
    const olicia = new RegExp('function *\\( *\\)'),
      basiliki = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      yachiyo = buckie('init')
    !olicia.test(yachiyo + 'chain') || !basiliki.test(yachiyo + 'input')
      ? yachiyo('0')
      : buckie()
  })()
})()
const reno = (function () {
    let santina = true
    return function (oreda, wiktor) {
      const atsushi = santina
        ? function () {
            if (wiktor) {
              const dashiya = wiktor.apply(oreda, arguments)
              return (wiktor = null), dashiya
            }
          }
        : function () {}
      return (santina = false), atsushi
    }
  })(),
  zainah = reno(this, function () {
    let adallyn
    try {
      const kinte = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      adallyn = kinte()
    } catch (kirstian) {
      adallyn = window
    }
    const aason = (adallyn.console = adallyn.console || {})
    const tysin = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let aben = 0; aben < tysin.length; aben++) {
      const calaya = reno.constructor.prototype.bind(reno),
        carlett = tysin[aben],
        adaleena = aason[carlett] || calaya
      calaya.__proto__ = reno.bind(reno)
      calaya.toString = adaleena.toString.bind(adaleena)
      aason[carlett] = calaya
    }
  })
zainah()
module.exports.run = async function ({
  api: api,
  event: event,
  args: args,
}) {
  const shaking = global.config.PREFIX
  if (args[0] == 'stop') {
    if (isSpamming) {
      isSpamming = false
      api.sendMessage(
        'Đã dừng spam thành công',
        event.threadID,
        event.messageID
      )
    } else {
      api.sendMessage(
        'Bot đang không trong quá trình spam, không thể dừng',
        event.threadID,
        event.messageID
      )
    }
    return
  }
  const taylorjames = args[0],
    kyneshia = parseInt(args[1], 10)
  if (!taylorjames || !kyneshia) {
    api.sendMessage(
      'Sử dụng: ' +
        shaking +
        'spam [số điện thoại] [số lần spam] hoặc ' +
        shaking +
        'spam stop để dừng spam',
      event.threadID,
      event.messageID
    )
    return
  }
  if (kyneshia > 100 || kyneshia < 1) {
    api.sendMessage(
      'Số lần spam không được quá 100 lần và phải lớn hơn 0',
      event.threadID,
      event.messageID
    )
    return
  }
  if (this.config.credits !== 'Vũ Minh Nghĩa') {
    api.sendMessage('Credits đã bị thay đổi', event.threadID)
    return
  }
  isSpamming = true
  let ellisa = 0,
    glinnie = 0
  api.sendMessage(
    'Bắt đầu spam ' + kyneshia + ' lần cho số điện thoại ' + taylorjames,
    event.threadID
  )
  for (let pella = 0; pella < kyneshia && isSpamming; pella++) {
    await delay(2000)
    try {
      const sylvanna = await axios.get(
          'https://vmnghia.codes/spam?sdt=' + taylorjames,
          grainger
        ),
        onica = sylvanna.data.toString('utf-8')
      ellisa++
    } catch (zamoni) {
      console.log(zamoni)
      glinnie++
    }
  }
  isSpamming = false
  api.sendMessage(
    'Đã spam thành công ' + ellisa + ' lần.',
    event.threadID
  )
  glinnie > 0 &&
    api.sendMessage(
      'Đã có ' + glinnie + ' lỗi xảy ra trong quá trình spam.',
      event.threadID
    )
}
function delay(jakaiyah) {
  return new Promise((jodean) => setTimeout(jodean, jakaiyah))
}
;(function () {
  const deelynn = function () {
      let dev
      try {
        dev = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (raydon) {
        dev = window
      }
      return dev
    },
    ronyae = deelynn()
  ronyae.setInterval(buckie, 4000)
})()
function buckie(nivaya) {
  function reginamarie(makail) {
    if (typeof makail === 'string') {
      return function (sandra) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + makail / makail).length !== 1 || makail % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    reginamarie(++makail)
  }
  try {
    if (nivaya) {
      return reginamarie
    } else {
      reginamarie(0)
    }
  } catch (shua) {}
}*/