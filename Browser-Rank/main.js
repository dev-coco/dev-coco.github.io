const ranking = {
  0: {
    name: 'Google Chrome Canary',
    link: 'https://www.google.com/chrome/canary/',
    engine: 'Blink',
    version: '133.0.6861.0',
    description: 'Chrome 的实验性版本，提供最新功能和改进，适合开发者和技术爱好者使用。',
    score: 32.30
  },
  1: {
    name: 'Google Chrome',
    link: 'https://www.google.com/chrome/',
    engine: 'Blink',
    version: '131.0.6778.70',
    description: '全球最流行的浏览器，以其快速的性能和丰富的扩展生态系统而闻名。',
    score: 30.74
  },
  2: {
    name: 'Microsoft Edge',
    link: 'https://www.microsoft.com/edge',
    engine: 'Blink',
    version: '131.0.2903.70',
    description: '微软开发的浏览器，基于 Chromium，提供快速的浏览体验和集成的 Office 功能。',
    score: 29.84
  },
  3: {
    name: 'Ecosia Browser',
    link: 'https://www.ecosia.org/browser',
    engine: 'Blink',
    version: '130.0.6723.13',
    description: '以环保为目标的浏览器，将收益用于植树造林。',
    score: 29.84
  },
  4: {
    name: 'Avast Secure Browser',
    link: 'https://www.avast.com/secure-browser#mac',
    engine: 'Blink',
    version: '129.0.5923.101',
    description: '由 Avast 开发的安全浏览器，提供内置的隐私保护和安全工具。',
    warn: '有报道称，Avast Secure Browser 曾存在安全漏洞，可能导致用户的浏览历史被收集和出售。<a href="https://palant.info/2024/07/15/how-insecure-is-avast-secure-browser/" rel="nofollow noreferrer" target="_blank">详情内容</a>。',
    score: 29.11
  },
  5: {
    name: 'Safari',
    link: 'https://www.apple.com/safari/',
    engine: 'WebKit',
    version: '18.1.1',
    description: '苹果公司开发的浏览器，专为 macOS 和 iOS 优化，注重速度和隐私保护。',
    score: 29.00
  },
  6: {
    name: 'Vivaldi',
    link: 'https://vivaldi.com/zh-hans/',
    engine: 'Blink',
    version: '7.0.3495.15',
    description: '高度可定制的浏览器，提供丰富的功能和个性化选项，适合高级用户。',
    score: 28.88
  },
  7: {
    name: 'Firefox Developer Edition',
    link: 'https://www.mozilla.org/en-US/firefox/developer/',
    engine: 'Gecko',
    version: '133.0b9',
    description: '专为开发者设计的 Firefox 版本，提供最新的开发工具和功能。',
    score: 28.82
  },
  8: {
    name: 'Firefox',
    link: 'https://www.mozilla.org/zh-CN/firefox/',
    engine: 'Gecko',
    version: '132.0.2',
    description: '开源浏览器，以隐私保护和用户控制为核心，拥有丰富的扩展库。',
    score: 28.75
  },
  9: {
    name: 'Brave',
    link: 'https://brave.com/',
    engine: 'Blink',
    version: '1.73.89',
    description: '以隐私为核心的浏览器，内置广告拦截和区块链技术，提供更安全的浏览体验。',
    score: 28.70
  },
  10: {
    name: 'OmniWeb',
    link: 'https://omnistaging.omnigroup.com/omniweb/',
    engine: 'WebKit',
    version: '6.0 test (v635.0.12)',
    description: 'macOS 专用的浏览器，具有独特的界面和功能。',
    score: 28.63
  },
  11: {
    name: 'Opera GX',
    link: 'https://www.opera.com/zh-cn/gx',
    engine: 'Blink',
    version: '114.0.5282.202',
    description: '专为游戏玩家设计的浏览器，具有独特的游戏主题和资源管理功能。',
    score: 28.56
  },
  12: {
    name: 'iCab',
    link: 'https://www.icab.de/download.html',
    engine: 'WebKit',
    version: '6.2.3',
    description: '功能强大的 iOS 浏览器，提供丰富的下载和管理功能。',
    score: 28.48
  },
  13: {
    name: 'Ulaa',
    link: 'https://ulaa.com/',
    engine: 'Blink',
    version: '2.26.0',
    description: '轻量级浏览器，专注于快速和高效的网页浏览。',
    score: 28.46
  },
  14: {
    name: 'Firefox ESR',
    link: 'https://www.mozilla.org/en-US/firefox/enterprise/',
    engine: 'Gecko',
    version: '128.4.0esr',
    description: 'Firefox 的扩展支持版本，适合企业和教育机构使用。',
    score: 28.44
  },
  15: {
    name: 'Floorp',
    link: 'https://floorp.app/en',
    engine: 'Gecko',
    version: '11.20.0',
    description: '基于 Firefox 的浏览器，注重隐私和用户体验，提供多种个性化选项。',
    score: 28.35
  },
  16: {
    name: 'Opera',
    link: 'https://www.opera.com/zh-cn',
    engine: 'Blink',
    version: '114.0.5282.185',
    description: '功能丰富的浏览器，提供内置 VPN、广告拦截和社交媒体集成功能。',
    score: 28.26
  },
  17: {
    name: 'Arc Browser',
    link: 'https://arc.net/',
    engine: 'Blink',
    version: '1.69.0',
    description: '创新的浏览器，提供独特的用户界面和组织工具，旨在提升生产力。',
    score: 28.02
  },
  18: {
    name: 'Firefox Nightly',
    link: 'https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly',
    engine: 'Gecko',
    version: '134.0a1',
    description: 'Firefox 的测试版本，提供最新功能和改进，适合开发者和早期用户。',
    score: 27.91
  },
  19: {
    name: 'Waterfox',
    link: 'https://www.waterfox.net/',
    engine: 'Gecko',
    version: '6.5.1',
    description: '基于 Firefox 的浏览器，专注于隐私和速度，支持旧版扩展。',
    score: 27.58
  },
  20: {
    name: 'Lunascape',
    link: 'https://www.lunascape.org/',
    engine: 'Blink',
    version: '0.29.0',
    description: '三内核浏览器，支持 IE、Firefox 和 Chrome 内核，适合多种需求。',
    score: 26.26
  },
  21: {
    name: 'Orion',
    link: 'https://kagi.com/orion/',
    engine: 'WebKit',
    version: '0.99.129-beta',
    description: '一款注重隐私和速度的浏览器，支持 Safari 扩展，适用于 macOS 和 iOS。',
    score: 26.22
  },
  22: {
    name: 'Min',
    link: 'https://minbrowser.org/',
    engine: 'Blink',
    version: '1.33.1',
    description: '极简主义浏览器，注重速度和简洁的用户体验。',
    score: 25.64
  },
  23: {
    name: 'Ghost Browser',
    link: 'https://ghostbrowser.com/',
    engine: 'Blink',
    version: '2.4.0.3',
    description: '专为多账户管理设计的浏览器，适合社交媒体和营销人员。',
    score: 25.14
  },
  24: {
    name: 'Ungoogled Chromium',
    link: 'https://ungoogled-software.github.io/',
    engine: 'Blink',
    version: '130.0.6723.116',
    description: '去除 Google 服务的 Chromium 版本，注重隐私和用户控制。',
    score: 24.82
  },
  25: {
    name: 'Chromium',
    link: 'https://download-chromium.appspot.com/',
    engine: 'Blink',
    version: '130.0.6723.116',
    description: '开源浏览器项目，许多现代浏览器（如 Chrome 和 Edge）基于此构建。',
    score: 24.70
  },
  26: {
    name: 'SRWare Iron',
    link: 'https://www.srware.net/iron/',
    engine: 'Blink',
    version: '126.0.6400.0',
    description: '隐私导向的 Chromium 分支，去除了 Google 的跟踪功能。',
    score: 24.44
  },
  27: {
    name: 'Yandex Browser',
    link: 'https://browser.yandex.com/',
    engine: 'Blink',
    version: '24.10.1.671',
    description: '俄罗斯 Yandex 公司开发的浏览器，具有智能搜索和个性化推荐功能。',
    score: 24.22
  },
  28: {
    name: 'DuckDuckGo Browser',
    link: 'https://duckduckgo.com/',
    engine: 'Blink',
    version: '1.113.0',
    description: '专注于隐私的浏览器，内置 DuckDuckGo 搜索引擎，提供无追踪的浏览体验。',
    score: 24.06
  },
  29: {
    name: 'Zen Browser',
    link: 'https://zen-browser.app/',
    engine: 'Gecko',
    version: '1.0.1-a.19',
    description: '注重简约和隐私的浏览器，提供干净的界面和快速的浏览体验。',
    score: 24.00
  },
  30: {
    name: 'Thorium',
    link: 'https://thorium.rocks/',
    engine: 'Blink',
    version: '126.0.6478.231',
    description: ' 基于 Chromium 的浏览器，注重隐私和安全，适合普通用户和开发者。',
    warn: '曾被用户发现其程序结构文件夹中捆绑了 Yiff（兽人色情）内容。<a href="https://github.com/Alex313031/thorium/commit/9947421f1480bd1a59b7f79d7a136cce01b3ffc9" rel="nofollow noreferrer" target="_blank">详情内容</a>',
    score: 23.96
  },
  31: {
    name: 'SigmaOS',
    link: 'https://sigmaos.com/',
    engine: 'WebKit',
    version: '1.18.1',
    description: '以生产力为导向的浏览器，提供独特的标签管理和工作区功能。',
    score: 23.65
  },
  32: {
    name: 'Sidekick Browser',
    link: 'https://www.meetsidekick.com/',
    engine: 'Blink',
    version: '124.61.1.50292',
    description: '专为团队协作设计的浏览器，集成了多种生产力工具。',
    score: 22.32
  },
  33: {
    name: 'Sphere Browser',
    link: 'https://ls.app/',
    engine: 'Blink',
    version: '9.12.1',
    description: '提供独特的界面和功能，旨在提升用户的浏览体验。',
    score: 21.86
  },
  34: {
    name: 'Librewolf',
    link: 'https://librewolf.net/',
    engine: 'Gecko',
    version: '132.0.2-1',
    description: '隐私导向的 Firefox 分支，去除了跟踪和数据收集功能。',
    score: 21.06
  },
  35: {
    name: 'Camoufox',
    link: 'https://github.com/daijro/camoufox/releases',
    engine: 'Gecko',
    version: '132.0.2-beta.17',
    description: '注重隐私和安全的 Firefox 分支，提供个性化的浏览体验。',
    score: 20.92
  },
  36: {
    name: 'Decentr Browser',
    link: 'https://decentr.net/',
    engine: 'Blink',
    version: '1.8.0',
    description: '去中心化的浏览器，注重用户隐私和数据控制。',
    score: 19.34
  },
  37: {
    name: 'Ghostery Dawn',
    link: 'https://www.ghostery.com/ghostery-private-browser',
    engine: 'Gecko',
    version: '2024.8.1 (376181f)',
    description: '以隐私为核心的浏览器，内置广告拦截和追踪保护功能。',
    score: 19.20
  },
  38: {
    name: 'Epic Privacy Browser',
    link: 'https://epicbrowser.com/thank-you',
    engine: 'Blink',
    version: '120.0.6099.71',
    description: ' 专注于隐私的浏览器，自动阻止广告和追踪器，保护用户数据。\n该 iOS 版本自 2020 年以来未进行更新。',
    score: 14.96
  },
  39: {
    name: 'QuteBrowser',
    link: 'https://www.qutebrowser.org/doc/install.html',
    engine: 'Blink',
    version: '3.3.1',
    description: '键盘驱动的浏览器，适合喜欢使用命令行的高级用户。',
    score: 14.60
  },
  40: {
    name: 'Maxthon Cloud Browser',
    link: 'https://www.maxthon.com/zh',
    engine: 'Blink',
    version: '7.2.2.5100',
    description: '云端浏览器，提供多设备同步和丰富的功能。',
    warn: '据报道，Maxthon 浏览器会在用户未授权的情况下收集敏感数据，即使用户选择退出也无济于事。<a href="https://news.softpedia.com/news/maxthon-browser-collects-sensitive-data-even-if-users-opt-out-506327.shtml" rel="nofollow noreferrer" target="_blank">详情内容</a>',
    score: 13.34
  },
  41: {
    name: 'Mullvad',
    link: 'https://mullvad.net/en',
    engine: 'Gecko',
    version: '13.5.9',
    description: '以隐私为核心的浏览器，结合 VPN 服务，提供安全的上网体验。',
    score: 11.82
  },
  42: {
    name: 'Pulse Browser',
    link: 'https://pulsebrowser.app/',
    engine: 'Gecko',
    version: '1.0.0-a.87',
    description: '注重速度和简洁的浏览器，提供流畅的用户体验。',
    warn: '该 GitHub 仓库已于 2024 年 9 月归档，意味着未来可能不再更新。<a href="https://github.com/pulse-browser/browser" rel="nofollow noreferrer" target="_blank">详情内容</a>',
    score: 7.35
  },
  43: {
    name: 'MultiZen Browser',
    link: 'https://getmultizen.com/',
    engine: 'Blink',
    version: '0.1.1',
    description: '多功能浏览器，支持多标签和个性化设置。',
    score: 6.82
  }
}

let html = ''
const sortRanking = Object.entries(ranking).sort(([, a], [, b]) => b.score - a.score)
for (const info of sortRanking) {
  const { name, link, engine, version, description, warn, score } = info[1]
  html += `<div class="browser-card mb-3">
      <img src="src/${name}.png" alt="${name}" class="browser-icon">
      <div class="browser-info">
        <h5><a href="${link}" rel="nofollow noreferrer" target="_blank">${name}</a></h5>
        <small>内核: ${engine} | 版本号: ${version}</small>
      </div>
      <div class="text-end">
        <p class="mb-0 score">${score.toFixed(2)}</p>
        <p class="browser-description">${description}</p>
        ${warn ? `<p class="special-description bg-warning">${warn}</p>` : ''}
      </div>
    </div>`
}

document.querySelector('.container').innerHTML += html
