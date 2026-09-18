(function () {
  var want = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru'
  var have = document.documentElement.getAttribute('data-lang')
  if (want !== have) {
    location.replace(want === 'en' ? 'ClassicEn.html?lang=en' : 'Classic.html')
    return
  }
  function go(next) {
    if (next === have) return
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'oradeya-lang', lang: next }, '*')
      return
    }
    location.href = next === 'en' ? 'ClassicEn.html?lang=en' : 'Classic.html'
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button[lang], button[aria-label="English"], button[aria-label="Русский"]').forEach(function (btn) {
      var next = (btn.getAttribute('lang') || (btn.getAttribute('aria-label') === 'English' ? 'en' : 'ru')).slice(0, 2)
      btn.addEventListener('click', function () { go(next) })
    })
  })
})()
