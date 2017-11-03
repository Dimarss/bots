//todo, in progress
{
    menuRun:"🚀 Запуск",
    menuStop:"⭕️ Стоп",
    menuPower:"💯 Сила",
    menuCurators:"🚂 Кураторы",
    menuTags:"🔖 Тэги",
    menuFavs:"🎯 Фавориты",
    menuBlackList:"⚰ ЧС",
    menuStatus:"🎛 Статус",
    menuChat:"🖖 Чат",
    menuTnx:"🍫 Спасибо",
    noticeOld:`💽 <b>Вы используете старую версию бота</b>
    Нажмите /start и обновите &{BOT_ID}
    `,
    msgRun:`🚀 <b>Бот активирован</b>  
    Бот отслеживает в реальном времени голоса ваших кураторов и посты фаворитов. Список фаворитов и кураторов вы можете задать в /menu`,
menuMsgAnswer:'💭 Ответить',
menuMsgVote:'🤘🏻 Проголосовать',
msgLogKeywords:`<a href="https://golos.io/x/@_{author}/_{permlink}/">_{author} 🌀 _{ss.vote}%</a>  
📡 <b>Вас призвал проголосовать @_{opData.author}</b>
Комментарий с ключевым словом: 
<code>_{ss.keyword}</code>

Вы можете настроить ключевые слова, разрешенных комментаторов, вес и отсрочку в настройках.
`,
menuMsgCancelVote:'🔪 Снять голос',
menuMsgComment:'💭 Коммент',
menuMsgRevote:'⚖️ Переголосовать другой силой',
menuMsgRead:'📘 Читать',
menuMsgFollow:'📌 Подписка и фаворит',
errSmallPower:`⛔️<b>Ошибка! Вес голоса слишком мал</b>
Вы еще не можете установить вес голоса _{VOTEPOWER/100}% так как СГ вашего аккаунта недостаточна для деления на доли.
Установите в настройках силу голоса на 100%!
							
Пропущен пост: <a href="https://golos.io/robot/@_{opData.author}/_{opData.permlink}/">@_{opData.author}</a>`,
msgLogCuratorVote:`<a href="https://golos.io/robot/@_{opData.author}/_{opData.permlink}/">_{opData.author} 🌀 _{Number(VOTEPOWER) / 100}%</a> 🌡 <b>_{yourpower}%</b> <code>#_{trig.countvotes+1}</code>
<b>_{opData.voter}</b> 🚇 _{opData.weight/ 100}%`,
msgLogFavoriteVote:`<a href="https://golos.io/robot/@_{opData.author}/_{opData.permlink}/">_{opData.author} 🌀 _{Number(VOTEPOWER) / 100}%</a> 🌡 <b>_{yourpower}%</b> <code>#_{trig.countvotes+1}</code>
<code>_{showTags}</code>`,
 menuCustomVote:'🤘 Проголосовать',
 msgLogIgnoreWNoPower:`<a href="https://golos.io/x/@_{author}/_{permlink}/">🛡 Сохранение силы!</a>
 <b>БОТ НЕ ПРОГОЛОСОВАЛ ЗА ЭТОТ ПОСТ</b>
                     
 <b>Вы не смогли проголосовать за пост, так как ваша сила _{yourpower}%</b>
 
 Голосование возобновится тогда, когда вы восстановитесь до указанного <b>второго</b> порога _{rdb.newpowlim}%
 Если вы снова запустите бота кнопкой 🚀 Запуск - вы проигнорируете второй порог и начнете голосовать если ваша сила не менее чем _{rdb.powlimit}% (Первый лимит)
 
 На момент этого сообщения ваша сила _{yourpower}%. 
 Вы так же можете посмотреть свой баланс силы командой /me
 `,
msgHasUpdate:`🔥 <b>БОТ ПОЛУЧИЛ ОБНОВЛЕНИЕ!</b>

Добавлены новые функции
Опция голосования за все посты
Опция голосования за посты с определенными тегами
Отдельная настройка силы голоса для разных ситуаций
Индивидуальные настройки силы и отсрочки для каждого фаворита
Голосования на основании наличия ключевых слов в комментариях поста
Изменение настроек "на лету" без необходимости перезапуска

И многое другое...

<b>Чтобы применить данное обновление необходим перезапуск командой:</b>
 /start

Далее следуйте подсказкам в сообщениях и настройте бота.
Дополнительные опции вызываются командой /menu
Подробности обновления вы можете узнать на канале @viknews и в чате @chain_cf`,


}

// IN PROGRESS...........................
