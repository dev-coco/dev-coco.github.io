function create () {
  const selectItem = document.getElementsByClassName('list-group')[1]
  const getItems = selectItem.getElementsByClassName('list-group-item')
  const download = document.getElementById('download')
  let image = ''
  let customCode = ''
  for (const item of getItems) {
    const itemName = item.classList[1]
    const url = document.querySelector(`#${itemName}`).value
    console.log(itemName, url)
    if (itemName === 'image') {
      image = `<img src="${url}" alt="" style="width:100%">`
    } else {
      customCode += generateCode(itemName, url)
    } // End if
  } // End for of
  download.innerHTML = `<a href="data:text/plain;charset:utf-8,${htmlEntitiesEncode(source(customCode, image))}" download='index.html'>点击下载</a>`
}

function generateCode (type, value) {
  switch (type) {
    case 'facebook':
      return `<a class="btn btn-icon btn-facebook" href="fb://profile?id=${value}"><i class="fa-brands fa-facebook"></i><span class="facebook">Facebook</span></a>`
    case 'twitter':
      return `<a class="btn btn-icon btn-twitter" href="${value}"><i class="fa-brands fa-twitter"></i><span class="twitter">Twitter</span></a>`
    case 'pinterest':
      return `<a class="btn btn-icon btn-pinterest" href="${value}"><i class="fa-brands fa-pinterest"></i><span class="pinterest">Pinterest</span></a>`
    case 'skype':
      return `<a class="btn btn-icon btn-skype" href="${value}"><i class="fa-brands fa-skype"></i><span class="skype">Skype</span></a>`
    case 'linkedin':
      return `<a class="btn btn-icon btn-linkedin" href="${value}"><i class="fa-brands fa-linkedin"></i><span class="linkedin">LinkedIn</span></a>`
    case 'tumblr':
      return `<a class="btn btn-icon btn-tumblr" href="${value}"><i class="fa-brands fa-tumblr"></i><span class="tumblr">Tumblr</span></a>`
    case 'flickr':
      return `<a class="btn btn-icon btn-flickr" href="${value}"><i class="fa-brands fa-flickr"></i><span class="flickr">Flickr</span></a>`
    case 'youtube':
      return `<a class="btn btn-icon btn-youtube" href="https://www.youtube.com/channel/${value}?sub_confirmation=1"><i class="fa-brands fa-youtube"></i><span class="youtube">YouTube</span></a>`
    case 'instagram':
      return `<a class="btn btn-icon btn-instagram" href="${value}"><i class="fa-brands fa-instagram"></i><span class="instagram">Instagram</span></a>`
    case 'odnoklassniki':
      return `<a class="btn btn-icon btn-odnoklassniki" href="${value}"><i class="fa-brands fa-square-odnoklassniki"></i><span class="odnoklassniki">OK</span></a>`
    case 'reddit-alien':
      return `<a class="btn btn-icon btn-reddit-alien" href="${value}"><i class="fa-brands fa-reddit-alien"></i><span class="reddit-alien">Reddit</span></a>`
    case 'whatsapp':
      return `<a class="btn btn-icon btn-whatsapp" href="${value}"><i class="fa-brands fa-whatsapp"></i><span class="whatsapp">WhatsApp</span></a>`
    case 'telegram':
      return `<a class="btn btn-icon btn-telegram" href="${value}"><i class="fa-brands fa-telegram"></i><span class="telegram">Telegram</span></a>`
    case 'vk':
      return `<a class="btn btn-icon btn-vk" href="${value}"><i class="fa-brands fa-vk"></i><span class="vk">VKontakte</span></a>`
    case 'facebook-messenger':
      return `<a class="btn btn-icon btn-facebook-messenger" href="${value}"><i class="fa-brands fa-facebook-messenger"></i><span class="facebook-messenger">Messenger</span></a>`
    case 'line':
      return `<a class="btn btn-icon btn-line" href="${value}"><i class="fa-brands fa-line"></i><span class="line">LINE</span></a>`
    case 'globe':
      return `<a class="btn btn-icon btn-globe" href="${value}"><i class="fa-solid fa-globe"></i><span class="globe">Website</span></a>`
    case 'app-store-ios':
      return `<a class="btn btn-icon btn-app-store-ios" href="${value}"><i class="fa-brands fa-app-store-ios"></i><span class="app-store-ios">iOS App</span></a>`
    case 'android':
      return `<a class="btn btn-icon btn-android" href="${value}"><i class="fa-brands fa-android"></i><span class="android">Andriod App</span></a>`
    case 'snapchat':
      return `<a class="btn btn-icon btn-snapchat" href="${value}"><i class="fa-brands fa-snapchat"></i><span class="snapchat">Snapchat</span></a>`
    case 'none':
      return `<a class="btn btn-icon btn-none" style="visibility: hidden" href=""><i class="fa-brands fa-none"></i><span class="none">none</span></a>`
    default:
      alert('出现错误')
  }
}

const source = (customCode, image) => `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Social Template</title><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"><link rel="stylesheet" href="https://dev-coco.github.io/css/Social-Template.css"></head><body class="social"><header>${image}</header><main><h1></h1><div id="container"><div style="columns: 2;margin: 0 auto">${customCode}</div></div></main><script src="https://dev-coco.github.io/js/Social-Template.js"></script></body></html>`

/**
 * @description HTML 实体转换
 * @param {string} str - 文本
 * @return {string} 转换后的文本
 * 例: abc => &#97;&#98;&#99;
 */
 function htmlEntitiesEncode (str) {
  const buffer = []
  for (let i = str.length - 1; i >= 0; i--) {
    buffer.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
  }
  return buffer.join('')
}