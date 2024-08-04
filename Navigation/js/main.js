$(document).ready(() => {
  $(document).on('click', '.has-sub', () => {
    const _this = $(this)
    if (!$(this).hasClass('expanded')) {
      setTimeout(function () {
        _this.find('ul').attr('style', '')
      }, 300)
    } else {
      $('.has-sub ul').each((id, ele) => {
        const _that = $(this)
        if (_this.find('ul')[0] !== ele) {
          setTimeout(function () {
            _that.attr('style', '')
          }, 300)
        }
      })
    }
  })
  $('.user-info-menu .hidden-sm').click(function () {
    if ($('.sidebar-menu').hasClass('collapsed')) {
      $('.has-sub.expanded > ul').attr('style', '')
    } else {
      $('.has-sub.expanded > ul').show()
    }
  })
  $('#main-menu li ul li').click(function () {
    $(this).siblings('li').removeClass('active')
    $(this).addClass('active')
  })
  $('a.smooth').click(function (ev) {
    ev.preventDefault()
    public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass('mobile-is-visible')
    ps_destroy()
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 30
    }, {
      duration: 500,
      easing: 'swing'
    })
  })
  return false
})

const searchList = {
  'type-felo': 'https://www.felo.ai/search?q=',
  'type-google': 'https://www.google.com/search?q=',
  'type-youtube': 'https://www.youtube.com/results?search_query=',
  'type-github': 'https://github.com/search?q=',
  'type-bing': 'https://www.bing.com/search?q=',
  'type-duckduckgo': 'https://duckduckgo.com/?q=',
  'type-startpage': 'https://www.startpage.com/sp/search?query='
}
const keywordSearch = document.getElementById('keyword-search')
const searchText = document.getElementById('search-text')

function textSearch () {
  const typeID = document.querySelector('input[name="type"]:checked').id
  const text = searchText.value.trim()
  let link = ''
  if (text) {
    link = searchList[typeID] + text
  } else {
    link = searchList[typeID].replace(/(?<=\b)\/.+/g, '')
  }
  window.open(link, '_blank')
}

keywordSearch.addEventListener('click', textSearch)

searchText.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault()
    textSearch()
  }
})
