tab = [...document.querySelectorAll('table')][0]
icon = tab.querySelector('img').src
title = tab.querySelectorAll('td')[1].outerText.replace(/ v.+/g, '')
desc = tab.querySelectorAll('td')[2].outerText
download = tab.querySelectorAll('td')[3].querySelectorAll('a')[0].href
jiaoc1 = tab.querySelectorAll('td')[3].querySelectorAll('a')[1].href
jiaoc2 = tab.querySelectorAll('td')[3].querySelectorAll('a')[2].href


let html = ''
const list = document.querySelectorAll('table')
for (const tab of list) {
  console.log(tab)
  icon = tab.querySelector('img').src
  title = tab.querySelectorAll('td')[1].outerText.replace(/ v.+/g, '')
  desc = tab.querySelectorAll('td')[2].outerText
  download = tab.querySelectorAll('td')[3].querySelectorAll('a')[0].href
  jiaoc1 = tab.querySelectorAll('td')[3].querySelectorAll('a')[1] || ''
  jiaoc2 = tab.querySelectorAll('td')[3].querySelectorAll('a')[2] || ''
  if (jiaoc1) {
    jiaoc1 = `<a href="${jiaoc1.href}" class="btn-tutorial">📖 使用教程</a>`
  }
  if (jiaoc2) {
    jiaoc2 = `<a href="${jiaoc2.href}" class="btn-tutorial">📘 Tutorial</a>`
  }
  html += `<article class="card">
        <div class="card-header">
          <img src="${icon}" alt="${title}" class="card-icon">
          <h3 class="card-title">${title}</h3>
        </div>
        <p class="card-desc">${desc}</p>
        <div class="card-actions">
          <a href="${download}" class="btn-download" rel="nofollow noreferrer" target="_blank">🚀 安装插件</a>
          <div class="tutorial-links">
            ${jiaoc1}
            ${jiaoc2}
          </div>
        </div>
      </article>
      `
}
