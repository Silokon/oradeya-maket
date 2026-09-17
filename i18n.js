(function () {
  var LANG = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru'

  var EN = {
    '/ мин': '/ min',
    '12 лет практики': '12 years of practice',
    '8 лет практики': '8 years of practice',
    '6 лет практики': '6 years of practice',
    '3 мин': '3 min',
    'бесплатно новым клиентам': 'free for new clients',
    'ORADEYA это пространство для такого разговора.': 'ORADEYA is a space for that kind of conversation.',
    '[Название компании], США': '[Company name], USA',
    '© 2026 ORADEYA. Все права защищены.': '© 2026 ORADEYA. All rights reserved.',
    '«Елена объясняет расклад понятно, после консультации стало легче принять решение.»': '“Elena explains the spread clearly, it was easier to make a decision afterwards.”',
    '«Подробно разобрал карту, дал понятные ориентиры по срокам.»': '“He went through the chart in detail and gave clear guidance on timing.”',
    '«Спокойно разобрали мой вопрос про переезд, без давления и лишней мистики.»': '“We calmly went through my question about moving, without pressure or unnecessary mystery.”',
    'Артём Власов': 'Artem Vlasov',
    'Елена Морозова': 'Elena Morozova',
    'София Лебедева': 'Sofia Lebedeva',
    'Елена': 'Elena',
    'Марина': 'Marina',
    'Дмитрий': 'Dmitry',
    'М': 'M',
    'Д': 'D',
    'Консультант: Артём Власов': 'Advisor: Artem Vlasov',
    'Консультант: Елена Морозова': 'Advisor: Elena Morozova',

    'Иногда полезно посмотреть на ситуацию с другой стороны': 'Sometimes, a different perspective can help',
    'Иногда полезно посмотреть на ситуацию': 'Sometimes, a different perspective',
    'с другой стороны': 'can help',
    'Когда мысли ходят по кругу, разговор с консультантом может помочь заметить то, что раньше ускользало из внимания.': 'When your thoughts keep circling, a conversation with an advisor can help you notice what you may have been missing.',
    'Онлайн-консультации по таро и нумерологии: спокойно, лично и в удобном для вас темпе.': 'Online Tarot and Numerology consultations: personal, unhurried, and on your terms.',
    'Первые 3 минуты бесплатно для новых клиентов.': 'Your first 3 minutes are free as a new client.',
    'Выбрать консультанта': 'Find an advisor',
    'Найти консультанта': 'Find an advisor',
    'Чат': 'Chat',
    'Без подписки': 'No subscription',
    'Оплата через Stripe': 'Payments via Stripe',
    'Консультанты онлайн': 'Advisors online',
    'Таро и нумерология онлайн': 'Tarot and numerology online',

    'Консультанты': 'Advisors',
    'Направления': 'Specialties',
    'Как это работает': 'How it works',
    'Отзывы': 'Reviews',
    'Вопросы': 'FAQ',

    'Найдите консультанта, с которым вам будет комфортно поговорить': 'Find an advisor you feel comfortable talking to',
    'Посмотрите профили, направления, опыт, отзывы и стоимость. У каждого свой подход: выбирайте того, кто ближе именно вам.': 'Explore profiles, specialties, experience, reviews and rates. Every advisor has their own approach, so choose the one that feels right for you.',
    'Если консультант сейчас онлайн, можно отправить запрос и начать разговор.': 'If they’re online, you can send a request and start a conversation.',
    'Все консультанты': 'All advisors',
    'Онлайн': 'Online',
    'Занят': 'Busy',
    'Офлайн': 'Offline',
    '● онлайн': '● online',
    'Посмотреть профиль': 'View profile',
    'Пока нет отзывов': 'No reviews yet',
    'Таро': 'Tarot',
    'Таро ·': 'Tarot ·',
    'Нумерология': 'Numerology',
    'Таро: отношения, выбор и сложные решения': 'Tarot: relationships, choices and difficult decisions',
    'Нумерология: даты, имена и жизненные циклы': 'Numerology: dates, names and life cycles',
    'Таро и нумерология: карьера, переезд и новые начинания': 'Tarot and numerology: career, relocation and new beginnings',

    'Бесплатно 02:41': 'Free 02:41',
    'Бесплатно 02:15': 'Free 02:15',
    'Не могу решиться на переезд. С чего начать?': 'I can’t decide whether to move. Where do I start?',
    'Давайте посмотрим, что вас держит, а что тянет вперёд.': 'Let’s look at what holds you back and what pulls you forward.',
    'Здравствуйте! Расскажите, что вас сейчас волнует.': 'Hello! Tell me what is on your mind right now.',
    'Думаю о смене работы, но боюсь ошибиться.': 'I’m thinking about changing jobs, but I’m afraid of making a mistake.',
    'Добавлено 30 минут': '30 minutes added',
    'Давайте разложим карты на ваш вопрос и посмотрим, что поможет решиться.': 'Let’s lay out the cards for your question and see what will help you decide.',
    'Давайте, спасибо!': 'Let’s do it, thank you!',
    'Написать сообщение': 'Write a message',

    'Начать просто': 'Getting started is simple',
    'Выберите консультанта': 'Choose an advisor',
    'Посмотрите профили и найдите человека, чей подход вам откликается.': 'Explore profiles and find someone whose approach feels right for you.',
    'Отправьте запрос': 'Send a request',
    'Если консультант онлайн, он увидит ваш запрос. После принятия можно начинать разговор.': 'If the advisor is online, they’ll see your request. Once accepted, you can start talking.',
    'Познакомьтесь в течение первых 3 минут': 'Start with your first 3 minutes free',
    'Новые клиенты получают первые 3 минуты консультации бесплатно.': 'New clients receive the first 3 minutes of their consultation free.',
    'Продолжите, если разговор оказался вам полезен': 'Continue if the conversation feels useful to you',
    'Если захотите остаться в консультации дольше, выберите пакет на 15, 30 или 60 минут.': 'If you’d like more time, choose a 15, 30 or 60 minute package.',
    'Без подписки и автоматических списаний': 'No subscription or automatic charges',

    'Подход ORADEYA': 'The ORADEYA approach',
    'Не готовые ответы.': 'Not ready‑made answers.',
    'Другой взгляд.': 'A different perspective.',
    'Иногда нам нужен не человек, который скажет, как поступить, а возможность спокойно проговорить то, что волнует, задать вопрос и посмотреть на ситуацию под другим углом.': 'Sometimes, what we need isn’t someone to tell us what to do, but a chance to talk things through, ask a question and look at a situation from another angle.',
    'Мы не принимаем решения за вас. Вы сами решаете, что из консультации для вас важно и что делать дальше.': 'The decision is always yours. You choose what feels meaningful and what to do next.',

    'Почему мы': 'Why us',
    'Почему ORADEYA': 'Why ORADEYA',
    'Разговор в вашем темпе': 'A conversation at your own pace',
    'Без необходимости сразу принимать решения. Можно сформулировать вопрос, поговорить и спокойно обдумать услышанное.': 'There’s no need to make an immediate decision. Take the time to ask your question, talk it through and reflect on what you hear.',
    'Понятные условия': 'Clear terms',
    'Стоимость видна заранее. Если захотите продолжить после бесплатных минут, сами выбираете длительность консультации.': 'You see the rate in advance. If you want to continue after the free minutes, you choose the consultation length yourself.',
    'Личное пространство': 'A private space',
    'Переписка не публикуется. Доступ к консультации и отправленным материалам ограничен участниками разговора и администрацией сервиса в предусмотренных правилами случаях.': 'Your conversation isn’t public. Access to consultations and shared materials is limited to the participants and, where necessary, service administrators.',
    'Вы выбираете сами': 'The choice stays with you',
    'Можно посмотреть профили, отзывы, направления и текущий статус консультантов до начала разговора.': 'Explore profiles, reviews, specialties and current availability before starting a conversation.',

    'Выберите подходящий вам подход': 'Choose the approach that feels right for you',
    'Способ посмотреть на отношения, выбор или жизненную ситуацию через образы, символы и вопросы, которые они помогают сформулировать.': 'A way to explore relationships, decisions and life situations through imagery, symbols and the questions they bring forward.',
    'Интерпретация чисел и дат как ещё один способ взглянуть на личные темы и жизненные периоды с другой стороны.': 'An interpretation of numbers and dates as another way to reflect on personal themes and different periods of life.',

    'Что говорят клиенты': 'What clients say',
    'Отзывы оставляют только клиенты после оплаченной консультации.': 'Only clients who paid for a consultation can leave a review.',
    'по 192 отзывам': 'from 192 reviews',

    'Частые вопросы': 'Frequently asked questions',
    'Не нашли ответ? Напишите в поддержку.': 'Didn’t find an answer? Contact support.',
    'Написать в поддержку': 'Contact support',
    'Как считается время консультации?': 'How is consultation time counted?',
    'Время учитывает сервер, а не браузер. Обновление страницы не сбрасывает таймер, а при обрыве связи консультация встаёт на паузу.': 'Time is tracked by the server, not the browser. Reloading the page does not reset the timer, and if the connection drops the consultation is paused.',
    'Можно ли отправлять фото и видео?': 'Can I send photos and videos?',
    'Что будет с неиспользованными минутами?': 'What happens to unused minutes?',
    'Безопасна ли оплата?': 'Is payment secure?',
    'Нужно ли регистрироваться?': 'Do I need to sign up?',
    'Заменяет ли это психолога или врача?': 'Does it replace a psychologist or a doctor?',

    'Если хочется взглянуть на ситуацию иначе': 'When you want to see things from another angle',
    'Выберите консультанта, который сейчас онлайн, и начните с первых 3 бесплатных минут.': 'Choose an advisor who’s online and begin with your first 3 minutes free.',

    'Онлайн-консультации со специалистами по таро и нумерологии в чате.': 'Online chat consultations with tarot and numerology specialists.',
    'Документы': 'Documents',
    'Компания': 'Company',
    'Условия использования': 'Terms of use',
    'Политика конфиденциальности': 'Privacy policy',
    'Политика cookie': 'Cookie policy',
    'Политика возвратов': 'Refund policy',
    'Реквизиты компании': 'Company details',
    'Настройки cookie': 'Cookie settings',

    'Чат в реальном времени': 'Real-time chat',
    'Приватный разговор': 'Private conversation',
    'Безопасная оплата через Stripe': 'Secure payments via Stripe',

    'Отношения': 'Relationships',
    'Отношения и чувства': 'Relationships and feelings',
    'Переезд': 'Relocation',
    'Переезд и перемены': 'Relocation and change',
    'Работа': 'Career',
    'Перемены': 'Change',
    'Своё дело': 'Own business',
    'Выбор': 'Choice',
    'Тема': 'Topic',
    'Он тот самый?': 'Is he the one?',
    'Он правда тот самый?': 'Is he really the one?',
    'Остаться или уехать?': 'Stay or move?',
    'Пора менять работу?': 'Time to change jobs?',
    'Что меня ждёт?': 'What lies ahead?',
    'Стоит ли начинать?': 'Should I start?',
    'Какой путь выбрать?': 'Which path to take?',
    'Ваш вопрос, ваш консультант': 'Your question, your advisor',
    'Расклад на вопрос': 'Reading for the question',
    'Ситуация': 'Situation',
    'Совет': 'Advice',
    'Итог': 'Outcome',
    'Предыдущая карта': 'Previous card',
    'Следующая карта': 'Next card',
    'Повторить анимацию': 'Replay animation',
  }

  function norm(s) {
    return s.replace(/ /g, ' ').replace(/\s+/g, ' ').trim()
  }

  function translate(ru) {
    if (LANG !== 'en') return ru
    var key = norm(ru)
    if (EN[key]) return EN[key]
    var price = key.match(/^(\d+),(\d\d) €$/)
    if (price) return '€' + price[1] + '.' + price[2]
    if (/^\d+,\d$/.test(key)) return key.replace(',', '.')
    return ru
  }

  window.ORADEYA_LANG = LANG
  window.t = translate

  function apply() {
    document.documentElement.lang = LANG
    if (LANG === 'en') {
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
      var node
      var nodes = []
      while ((node = walker.nextNode())) nodes.push(node)
      nodes.forEach(function (n) {
        if (n.parentElement && n.parentElement.closest('script, style')) return
        var text = n.textContent
        if (!/[а-яё0-9]/i.test(text)) return
        var out = translate(text)
        if (out !== text) {
          var lead = text.match(/^\s*/)[0]
          var tail = text.match(/\s*$/)[0]
          n.textContent = lead + out + tail
        }
      })
      document.querySelectorAll('[aria-label]').forEach(function (el) {
        el.setAttribute('aria-label', translate(el.getAttribute('aria-label')))
      })
    }

    document.querySelectorAll('span, a').forEach(function (el) {
      if (el.children.length || norm(el.textContent) !== 'EN') return
      el.textContent = LANG === 'en' ? 'RU' : 'EN'
      el.setAttribute('role', 'link')
      el.setAttribute('tabindex', '0')
      el.style.cursor = 'pointer'
      var go = function () {
        var next = LANG === 'en' ? 'ru' : 'en'
        if (window.parent !== window) {
          window.parent.postMessage({ type: 'oradeya-lang', lang: next }, '*')
          return
        }
        var url = new URL(location.href)
        if (next === 'en') url.searchParams.set('lang', 'en')
        else url.searchParams.delete('lang')
        location.href = url.toString()
      }
      el.addEventListener('click', go)
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter') go() })
    })
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply)
  else apply()
})()
