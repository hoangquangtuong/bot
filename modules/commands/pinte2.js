// credit duy tan =)))

let limit = 6;
let axios = require('axios');
let fs = require('fs');
let mainPath = __dirname + '/cache/';
let cookie= 'csrftoken=ddb276df69121fa8cbca19c6a1663bed; g_state={\"i_l\":0}; _b=\"AXpJtL2TH51NSpew9a9WeWex1ScWRBVrlXiyOtkLl5nG6uAgwVg+NMzb6nFJuZjodtc=\"; _routing_id=\"1cbebc30-f623-48f1-8237-53d0e869e6ae\"; sessionFunnelEventLogged=1; l_o=M3UzQTdTOU9yVnNkd1lOR2s5OGU4MlVCMVprVU5kZ0pBcDREeHVPeElXWXJDQkhHc0RsVS9aTkpKcTgyNHZCOERKYmd0QUNvaW1lZkFGTEZhYVpCQTB0UnlUTDh2cGFQbzBwL3ZWTW4wM2s9JnRHY3M1WFkyQUx4ZVI1Y2N6aDcrMVIrcG45dz0=; fba=True; _auth=1; _pinterest_sess=TWc9PSY1ZkgvVGFWVUhNdExzRDMwS0svY3hpVG5OSzEvc1h3QWhwejQxYk01Vm9PNllybU01VVBscnA1L2Y1L05ZMGE2UlRDQzJIQ1BibUZ1QVpyU1lQWnF6dDBZdUoxR2xaWi9BL2J5VmtIZW9tdHcvcWlHT2J1K2N2a0ZHd0pwRG84YkhYU0JLSURJa25PRGxaZGVEekJHaCtCdHYwcDJEODUxQjViK0Vhc3V3emc4eThhb1RmWXFiSjhDblErZVFmcGdKTjU0Vkk3ZlBoK2oxaFM4Y1JqNkRvcGVmVjlOSDVDaFpTL3ROYjlYM2UrREpBZEFvd1JuT1dTOWR4RktVSnkyTHplZDRmRGxaMk8wUkRrRTc5ZTBlaUlFdzEvT0ZkMmlWOEN0ZmlzT2M3bXVvQ2ljeWMzTW1Ya0psZmVxdjUwWEJFSWtwNzdBa011M1Y4Y0g4STI5Q1JqK3pmYkxSbzNWZDA1NVhFZ2VjaWhWam82S3hHSnY1a3MvdlRNVmVYdnUvZ0RiRW9wM3YzeUZ1UVBQRTNQZjlNeGFUajVxM1BYVXlZOC8wWUIrY0lqNnFkMjRaSGxkV2JIblFydWNnTkNqS2c3WUdrTkZzK3dYOFF0ckdnSEhTZVhWeERPcUZ1VFZ4NDQ0MUdMdit0UXRCdjVScWdrUjNWMW1JSU9WUlFzTjVyNE1ZZmxsVG92NFFXOHFWWEJ0TjlRVnlpem9aTlR0MmROb3lOR1FZZ3NJMjh3TTd2V2xlV1I5OU44U2pXN0lMNll0M0Z5UmFKcUgxOFpXWWM1TlplaURzWkhmZC9qUEt6T3NLcEZ3UDl0c0RKRXJKYi9VQkd0cGpLYkFXY2tBdXN1WkV5NkJIb3YyRFRuZUNuWllMM2dXMGJUSFNaU2d5L1FHTnZqNklnc05MTi91aTVXdGcvNTFSTmI1VW5FMGNJK2tGZnFqOTdLVDREK3V1MlhKcGR5MWsrNjFtVUZzbjRDRXFXU1BmR2lyK1dUcnphVWxVR1ZEQzYrcXZTZE85UHBSYU9mc3VxOFRTV3VNTFNzVkI4bnl6dUdmdGp3YkFLSG9peWNZQmd4a0J0c2JLNlgxRWsvV0NMaHdVM1ZlWWFVMmx6RnRVY25ldUUzTGU3QW9ibFJmWWh0WElkTmg2MkY0QVpFZVp0M202c0JYdktGcHl4SDJ6ckprREVxWTB2ZVQvdWxxd1hRaTVMNHF5dGFXbTUyUFUwL0tQeEhNanY5T3EyYkhReFE0VDdiOVM2WTlXUTJRNVpUdkFYUmFtU09tZTRmaUtvMWxTeER2V282UkhLY2g2NFBQTXI1UVRNd0J1Y0dQUkZpUWVXUkxsV1JTNGgxcGNkRFQ1VWlIU25kano1RVhQaEZzQUN1TDFGaE42L3Z0MlBmYTNyL01yODNUbE56MjY5ZUN5QkdoczNjcmhnVGNtblh1OWJac3FYdEU5ZjYzUjRSSE85dmM5bGUzNkhCZUFvckIwTXllZmJYOUlMTDY3elZyUGhJK21PbklGTGdES2o4aUVoakozTy9nUmxsOVJlL1h3TEhCRGovRHBlbCs4U05BSW83OUljRUVIM0VvRkMrNEZSTklqdW5kNEFBY3V0Tm04ZzEvUkFaMjFwUFVyUk50N2hFN0xZMGdaRWpwVTR0bFBxeHFXNVVNK0VZaUI0eHp4L2pRdk9EUGlnK0h6V3ZqbmJPcjVabW5paDJkRGJqVzlzeGdFNWIycng0aEZuMm8yWTlYWWdtekFSbzFod05LUVZDY0Z1R1RVK2hQcnJpdGxLblMmTjR6R0pOVjAwWGlwSFBRZ054ZGc0TmF6TVd3PQ==; __Secure-s_a=eDVHMFBtMGJSR2hxN3ZURnhKbTZITnh2NDRWOW9DSmlZZHNxeWxRdDREQUZDdmpLdUt5Q1MzeGZhYmRaWU9zMHBQWjJHRmZScGhPb2NQRjBQdjdyU3ZDTFBMR1hWUUlZNEpHNXdLbVJIREorOHVpd2NnT0dsTGxMT3YzN3ExUGhDZGx3K0lGY0JJOFp1NGp2WUpPNGJ3TklFRUVnNlRJRW9LdVRHMzdaUlVPUFdyVEpXQ1JyTzYyNGNFeERZTTVUTnNXb3VhYTMxNDVSdlpVL2NKczZBTllMMW5NbWdkUnNXZE1LMFlHVHlaRnNYeHZUenBDUHlkbUFTR0c0ZEIyM2o5aU51VHh5ZDZ0cmxkWFZnNFBWbVpFRW1hWm1sSmRNMlBFNjRTMTFOZWVYQUdKSk1NcUQrR09NaFRBQk1ZWFhVaFp5N3pXVTNVMjg3Q3FqOE51NjB2YmdxWHJOa2hNNXBndGxMUVFYZzFKVEsrT1B3OGZiTS9yclBBajVwRDdVWHpKaWdPZ1RUQ0p6RUlLbWxzM2hlalhsNWtZb2dLclZnZ3dQR1NJNENXS2tSSmdDdmlNMDBsQlpmVkVtem9heE90enZNMXZGNmJtd2RRc3FMMlpmMGIzY0UyV3BvQXFOV251RnZwTjk3RTBobEp3eFlLVEhkYnlCU2hzc20vY3REeHl1a2VCWDZZdTgybmszUENRdFczUlJ3OWV6QmZMSXJuc1M1RU9paVNvTnk2ckNiTFB0dTc0RG1jUXMyUjMxUmhWNlR4Z0hLalFUeXVoUGtCcjVBMVB0WHZSTVMrWGJLSmhHanRobHV2NUFPamtydy8xVjhRNHM2R0JWS1Y5UmNMWUZBb0MwblNFcWQzVEFmdHBjTWxiZ0RacXBqNzVNckFLcDIzNjFUVUpoOUk0b2RvTm1xZC9wRFgwdXBwMW1CRkJtMS9DM2luenJYbzRsSm5xZDArZmp2WmVUaXlJNEJHUDZ2TEIrdjhPak1XemRmb250V2xoNnA0bW5RZU9pSVdEdjA1OEttcjZ6YnA4dDEwaDZVbldWbzFLeW56MjBPTWtNRlBLUE96dElJY3MzR3FMQVdZQ09jR0NQTzUwZkhPTWE2U09xa1M1b0VBZE9Wd2UvQUg0QjRVelFpV2NOS1lpb1pka3RNZGJGcVBoaEpGZGloRVAycUZzZlRXREtlMVJNS3ZGVjdTVWo1bVNYU2hEc09wQ0IwT1ZSQ3VEUStwVjFhcFl5aS9MVkI2S2cybERHWWZKdW4yZnBzbS9INzgwVUh0clFhQWZmL0FUSHFtbXpITEthOGdiL0JlZUVhWEdabTM3NkIrWT0mNE1IdjRwNWNIcHVGYzRRSXpoeE8zT09maGhBPQ=='//gan cookie vo
try {module.exports = {
  config: {
    commandCategory: 'utils',
    name: 'pinter',
    credits: 'Mr.Ben',
    version: '4.0'
  },
  run: async function({ api, event, args }) {
    let url 
    try {
      if (args[0].toLowerCase() == 'random' || args[0].toLowerCase() == 'search') {
      let metadata
      if (!args[1]) {
        url = null
        metadata = await random(url)
      }
      if (args[1]?.includes('https://www.pinterest.com')) {
        url = args[1]
        metadata = await random(url)
      }
      else {
        url = 'https://www.pinterest.com/search/pins/?rs=typed&q=' + encodeURIComponent(args.slice(1).join(' '))
        metadata = await random(url)
      }
      let attachment = [];
      let body = '==== [ ' + (!args[1] ? 'RANDOM' : 'SEARCH' ) + ' PINTEREST ] ====\n';
      let numPage = Math.ceil(metadata.length / limit)
      let c = 1;
      for (let i = 0;i < limit; i++) {
        let {title, author, images, video_list: video} = metadata[i]
        body += c++ + '\nTitle: ' + title + '\nAuthor: ' + author + '\nVideo: ' + (video == null ? false : true) + '\n';
        let stream = (await axios.get(images.url, { responseType: 'stream'} )).data;
        attachment.push(stream)
      };
      body += 'Reply number to down video if true || use page + (page number)\nPage: 1/' +(numPage);
      return api.sendMessage({body, attachment}, event.threadID, (e, i) => {
        global.client.handleReply.push({
          messageID: i.messageID,
          author: event.senderID,
          name: this.config.name,
          args,
          metadata, step: 'random', page: 1
        })
      })
    }
    } catch (e) {
      console.log(e)
      api.sendMessage('Rất tiếc, chúng tôi không thể tìm thấy bất kỳ Ghim nào cho tìm kiếm này.' + '\nUrl: ' + url, event.threadID, event.messageID)
    }
    if (args[0].toLowerCase() == 'down') {
      if (!args[1]) return;
      let data = await getUrl(args[1]);
      let body = '==== [ DOWN PINTEREST ] ====\n';
      let url;
      let attachment = []
      if (data.video != null) {
        attachment = (await axios.get(data.video.url, {
        responseType: 'stream'
      })).data;
      }
      else {
        for (let i of data.images) {
          attachment.push((await axios.get(i.url, {
        responseType: 'stream'
      })).data)
        }
      }
      for (let key in data) {
        if (key != 'video' && key != 'images') body += key.toUpperCase() + ': ' + data[key] + '\n';
      }
      return api.sendMessage({body, attachment}, event.threadID, event.messageID)
    }
  },
  handleReply: async function({ api, event, handleReply: H}) {
    const { body, threadID, messageID, args, senderID } = event;
    const send = (text) => api.sendMessage(text, threadID,messageID);
    if (senderID != H.author) return send('You not user use cmd');
    if (H.step == 'random') {
      if (args[0].toLowerCase() == 'page') {
        let page = !parseInt(args[1]) ? 1 : parseInt(args[1]);
        page <= 1 ? 1 : '';
        let numPage = Math.ceil(H.metadata.length / limit);
        if (page > numPage) return send('You user number > numPage');
        let attachment = [];
        let c = 1;
        let body = '==== [ ' + (!H.args[1] ? 'RANDOM' : 'SEARCH' ) + ' PINTEREST ] ====\n';
        for (let i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
          if (i >= H.metadata.length) break;
          let {title, author, images, video_list: video} = H.metadata[i]
          body += '[ ' + (c++)  + ' ]' + '\nTitle: ' + title + '\nAuthor: ' + author + '\nVideo: ' + (video == null ? false : true) + '\nPhotoUrl: ' + images.url + '\n';
          let stream = (await axios.get(images.url, { responseType: 'stream'} )).data;
          attachment.push(stream)
        };
        body += 'Reply number to down video if true || use page + (page number)\nPage: ' + page + '/' +(numPage);
        api.unsendMessage(H.messageID);
        return api.sendMessage({body, attachment}, threadID, (e, i) => {
          global.client.handleReply.push({
            messageID: i.messageID,
            author: event.senderID,
            name: this.config.name,
            args: H.args,
            metadata: H.metadata, page, step: 'random'
          })
        });
      }
      else {
        if (isNaN(args[0])) return send('not support NaN');
        let choose = (limit * (H.page - 1)) + parseInt(args[0] - 1);
        let data = H.metadata[choose] || null;
        if (data == null || data.video_list == null) return send('number not defind');
        let attachment = (await axios.get(data.video_list, { responseType: 'stream'})).data;
        return api.sendMessage({body: 'Author: ' +data.author + '\nTITLE: ' + data.title, attachment}, threadID, messageID)
      }
    }
  }
}} catch (e) {
  console.log(e)
}

async function random (url) {
  let ArrJPG;
  let surl = url == null ? 'https://www.pinterest.com/' : url
  const response = await axios(surl, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.116\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-model": "\"SM-A115F\"",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-ch-ua-platform-version": "\"12.0.0\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-fetch-user": "?1",
    "service-worker-navigation-preload": "true",
    "upgrade-insecure-requests": "1",
    "cookie": cookie,
    "Referer": "https://www.google.com/",
    "Referrer-Policy": "origin"
  },
  "body": null,
  "method": "GET"});
  let data = response.data
  let json = JSON.parse(data.split('__PWS_DATA__')[1].split('>')[1].split('</script')[0]).props.initialReduxState.pins;
  let metadata = []
  for (let key in json) {
    let videoUrl = (convertURL(json[key]?.videos?.video_list.V_HLSV4.url))
    metadata.push({
      images: json[key]?.images.orig,
      video_list: (videoUrl) || null,
      title: json[key].title || json[key].grid_title,
      author: json[key]?.native_creator?.full_name || json[key]?.pinner?.full_name
    })
  }
  return metadata
};
async function getUrl(url) {
  const response = await fetch(url, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.116\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-model": "\"SM-A115F\"",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-ch-ua-platform-version": "\"12.0.0\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-fetch-user": "?1",
    "service-worker-navigation-preload": "true",
    "upgrade-insecure-requests": "1",
    "cookie": cookie,
    "Referer": "https://www.google.com/",
    "Referrer-Policy": "origin"
  },
  "method": "GET"})
  if (url.includes('pin.it')) return getUrl(response.url?.split('sent')[0])
let data = await response.text()
let json = JSON.parse(data.split('__PWS_DATA__')[1].split('>')[1].split('</script')[0]).props.initialReduxState.pins;
let video_list = [], title, author, follow, comment_count, images = [];
for (let key in json) {
  video_list.push(json[key]?.videos?.video_list);
  if (!json[key].carousel_data?.carousel_slots) images.push(json[key]?.images?.orig)
  else json[key].carousel_data?.carousel_slots.forEach(i => {
    images.push(i?.images['736x'])
  }) 
  title = json[key].title || json[key].grid_title;
  author = json[key]?.native_creator?.full_name || json[key]?.pinner?.full_name;
  follow = json[key]?.native_creator?.follower_count || json[key]?.pinner?.follower_count;
  comment_count = json[key]?.aggregated_pin_data?.comment_count;
}
return {
  video: video_list[0]?.V_720P || null,
  images: images || null,
  title,
  author,
  follow,
  comment_count
}
};
function convertURL(url) {
  if (url?.includes('/videos/mc/hls/') || url?.includes('/videos/iht/hls')) {
    let fileName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
    let newURL = url.replace(/videos\/(mc|iht)\/hls/, 'videos/mc/720p').replace('.m3u8', '.mp4');
    return newURL;
  } else {
    return url;
  }
}