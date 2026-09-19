(function () {
  var root = document.documentElement
  var want = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru'
  var have = root.getAttribute('data-lang')
  var base = root.getAttribute('data-variant') || 'Classic'
  function fileFor(lang) {
    return lang === 'en' ? base + 'En.html?lang=en' : base + '.html'
  }
  if (want !== have) {
    location.replace(fileFor(want))
    return
  }
  function go(next) {
    if (next === have) return
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'oradeya-lang', lang: next }, '*')
      return
    }
    location.href = fileFor(next)
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button[lang]').forEach(function (btn) {
      var next = btn.getAttribute('lang').slice(0, 2)
      btn.addEventListener('click', function () { go(next) })
    })

    var blocks = document.querySelectorAll('.reveal')
    // карты у первого экрана ждут, пока фото появится в экране: на телефоне до него ещё листать
    var card = document.querySelector('.tarot-peek')
    var photo = card ? card.parentElement : null
    if (!('IntersectionObserver' in window)) {
      blocks.forEach(function (el) { el.classList.add('is-visible') })
      if (photo) photo.classList.add('cards-in')
      return
    }
    if (photo) {
      var cardsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          entry.target.classList.add('cards-in')
          cardsObserver.unobserve(entry.target)
        })
      }, { threshold: 0.3 })
      cardsObserver.observe(photo)
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    blocks.forEach(function (el) { observer.observe(el) })
  })
})()
