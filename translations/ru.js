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
    Нажмите /start и обновите _{BOT_ID}
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

menuSetKey:
`🗝 <b>Укажите свой приватный ключ постинга</b>

Постинг ключ можно найти в настройках golos.io: 
<code>кошелек > разрешения > постинг > показать приватный ключ > 5AbCde....</code>
Не беспокойтесь - Бот не будет иметь доступ к вашему кошельку и не будет иметь возможности редактировать ваш аккаунт.

Если вы не понимаете о чем речь - напишите в чат @chain_cf`,

menuWelcome:
`🚀 <b>Добро пожаловать в</b> _{BOT_ID} !

Этот бот позволит вам автоматически голосовать за посты ваших фаворитов, повторять голоса за вашими кураторами, голосовать за определенные теги или за все посты,
менять голос, получать и оставлять комментарии из telegram.

Если у вас возникли трудности по настройке бота, обратитесь в чат @chain_cf

<b>Пожалуйста, напишите свой логин golos.io </b> 👇`,

menuButtonLogin:'️🔌 Логин',
menuButtonKey:'🔑 Постинг ключ',

menuMsgOptions:
`#Опции
1. <b>Голосовать за все новые посты любого автора кроме черного списка логинов и тегов</b>
/VoteAll_ON  - Включить
/VoteALL_OFF - Выключить

2. <b>Голосовать за все посты в которых есть избранный тег</b>
/VoteTAG_ON  - Включить
/VoteTAG_OFF - Выключить

3. <b>Копировать вес голоса куратора</b>
/PowerCopy_ON  - Включить
/PowerCopy_OFF - Выключить

4. <b>Режим "Только чтение" превращает бота в "читалку" гибко настроенной ленты</b>
/RO_ON  - Включить
/RO_OFF - Выключить

5. <b>Кураторы могут перебивать вес вашего голоса на свой вес</b>
<code>Смена будет только если ваш голос был меньше 90%, а новый вес больше 10%</code>
/changeVote_ON  - Включить 
/changeVote_OFF - Выключить

6. <b>Получать комментарии к своим постам в телеграм</b>
/comm_ON  - Включить
/comm_OFF - Выключить

Помощь: @chain_cf`,

menuPartsFollowsToMany:
'Мы не смогли импортировать весь список подписчиков, так как он слишком велик. Но вы можете использовать кнопку создать новый список и самостоятельно прописать любое количество пользователей' : 'Кроме импортирования списка вы можете так же добавить фаворитов в меню разными способами',

menuMsgAboutImport:
`📲 <b>Импорт подписок</b>

Нажав кнопку ниже вы добавите в список фаворитов тех, на кого подписались в golos.io

Лимит импорта - 50 человек.
<b>_{cut}</b>
Вы подписаны на:<code>_{FavList}</code>
`,
menuButtonImport:
'📲 Импортировать',

menuMsgAskLogin:
`🔗 <b>Введите свой логин используемый на golos.io</b>`,

menuMsgAskKey:
`Введите свой постинг ключ`,

menuMsgAskCreateCurList:
`🚂 Введите имена кураторов через запятую
Например: <code>vik,ropox</code>
Бот будет повторять голоса за ними.`,

menuMsgAskFavList:
`Имена фаворитов. Напишите их`,

menuMsgAskLimFirst:
`<b>Введите НИЖНИЙ лимит силы от 0 до 100</b>

Это настройка <b>для первого порога</b> вашей силы. 
Когда ваша сила упадет до указанного здесь значения, бот приостановит работу и будет ждать второго порога. Укажите его в настройках лимита 2.
Логично, чтобы второй порог был выше первого
Когда ваш бот остановится из-за заданного первого лимита силы, он будет ждать, пока ваш аккаунт наберется сил до указанного вами второго порога.
По умолчанию первый порог равен - 55, а второй - 90. Это означает, что когда вы ослабеете до 55%, бот подождет пока вы не наберетесь силы до 90% чтобы возобновить голосование.
`,

menuMsgAskLimSecond:
`<b>Введите ВЕРХНИЙ лимит силы от 0 до 100</b>

Это настройка <b>для второго порога</b> вашей силы.
Когда ваш бот остановится из-за заданного первого лимита силы, он будет ждать, пока ваш аккаунт наберется сил до указанного вами второго порога.
По умолчанию первый порог равен - 55, а второй - 90. Это означает, что когда вы ослабеете до 55%, бот подождет пока вы не наберетесь силы до 90% чтобы возобновить голосование.`,

menuMsgResetTags:
`Список избранных и запрещенных тэгов сброшен!`,

noticePower:
`<b>⛔️ Важно:</b>
Если СГ вашего аккаунта менее 200 - не устанавливайте вес голоса меньше 100 !`,

menuMsgPowerForFavs:
`<b>Напишите желамую силу при голосах за фаворитов. От 1 до 100</b>`

menuMsgPowerForCurs:
`<b>Напишите желамую силу при повторах за кураторами. От 1 до 100</b>

_{powernotice}`,

menuMsgPowerForTags:
`Данная настройка силы голоса влияет на режим голосования "за все посты с выбранным тегом" который можно активировать в /menu

<em>Назначение</em>
Вы можете включить режим голосования за все посты с выбранными тегами с небольшой силой, в то время как голоса за фаворитов и повторы за кураторами совершать с другой силой заданной в настройках фаворитов и кураторов


<b>Напишите желамую силу От 1 до 100</b>
_{powernotice}`,

menuMsgPowerForAll:
`Данная настройка силы голоса влияет на режим голосования "за все посты" который можно активировать в /menu

<em>Назначение</em>
Вы можете включить режим голосования за все посты с небольшой силой, в то время как голоса за фаворитов и повторы за кураторами совершать с другой силой заданной в настройках фаворитов и кураторов

<b>Напишите желамую силу От 1 до 100</b>
_{powernotice}`,

menuMsgAskVotelimit:
`<b>Введите максимальное количество голосов которые хотите сделать</b>`,

menuMsgAskWhalecalls:
`Вы можете настроить голосование на основании ключевых слов в комментарии поста.
Для этого нужно прислать настройки в четком формате:

<code>
[
	{"keyword":"Проголосуй 100%", "users":"vik,robot", "vote":100, "delay":0},
	{"keyword":"Голос через полчаса :)", "users":"vik,robot", "vote":100, "delay":30},
	{"keyword":"Подай процент этому бомжу!", "users":"vik,robot", "vote":1, "delay":0}
]
</code>

В коде выше можно увидеть 4 параметра

Ключевое слово <code>keyword</code>
Слово на которое будет реагировать бот. Предполагается, что такие слова будут сообщать организаторы конкурсов и программ поддержки и предлагать кураторов, которые будут читать посты и оставлять комментарий с призывом ботов к лучшим постам.

Cписок разрешенных пользователей <code>users</code>
Белый список логинов пользователей через запятую - если ключевое слово напишут они - бот будет голосовать. Если кто-то другой - бот не будет реагировать.

Силу голоса <code>vote</code>
Сила голоса для конкретного ключевого слова. Можно указать большое количество ключевых слов и для каждого слова свои индивидуальные настройки силы, отсрочки и белого списка юзеров.

Отсрочка <code>delay</code>

<b>Введите блок настроек ниже соблюдая синтаксис кода!</b> `,

menuMsgAskIndFavs:
`Вы можете указать индивидуальные настройки для фаворитов, для каждого автора свою отсрочку и силу.

Для этого нужно прислать настройки в строгом формате вида:

<em>Пример:</em>
<code>
[
	{"author":"vik", "vote":100, "delay":0},
	{"author":"robot", "vote":50, "delay":10},
	{"author":"netfriend", "vote":100, "delay":20},
	{"author":"nefer", "vote":100, "delay":30},
	{"author":"penis", "vote":-1, "delay":0}
]
</code>

В примере кода выше можно увидеть  5 строк с 3-мя параметрами
Каждая из строк описывает отдельного автора собственными параметрами
<code>author</code> логин пользователя
<code>vote</code>  сила голоса от -100 до 100 (значение с минусом будет ФЛАГОМ, а не голосом!)
<code>delay</code> Отсрочка  в минутах

<b>Вставьте блок настроек ниже соблюдая синтаксис кода!</b>
Любое количество строк фаворитов (количество ограничено размером сообщений телеграм )
После последнего символа <code>}</code> запятой быть не должно. 
Если настройки будут приняты - вы увидите соответствующее сообщение, если реакции на фод настроек не будет или будет ответ с ошибкой - нажмите снова кнопку <b>📋 Инд. настройки</b> , исправьте ошибки и введите блок повторно!
Если вам нужна помощь, обратитесь в чат @chain_cf
`,

menuMsgAskDelayCur:
`⏱ Введите количество минут, которое должно пройти перед повтором голоса за куратором.`,

menuMsgAskDelayFav:
`⏱ <b>Введите количество минут, которое должно пройти после поста фаворита прежде чем вы проголосуете</b>`,

menuEntryPowerAbout:
`💯 <b>Вес голоса</b>

Вы можете указать вес голоса от 1 до 100.
Чем меньшую силу голоса вы укажете, тем большее количество голосов сможете сделать. Однако следует понимать, что голоса с небольшой силой приносят гораздо меньше кураторских вознаграждений.
Вы так же сможете менять силу голоса за каждый отдельный пост. Или даже отменить голос прямо в боте. 
<b>чтобы получить максимум кураторских вознаграждений - мы рекомендуем снимать голоса или менять вес на меньший если пост является спамом, копипастой или просто нравится вам меньше других</b>

<b>В текущей версии бота появилась возможность указавать два значения веса:</b>

"Для фаворитов" - сила голоса с которой вы будете голосовать за посты своих любимых авторов.
"При повторах" - сила голоса с которой вы будете голосовать во время повтора голосов за вашим куратором.

Выберите в меню ниже соответствующий вариант 👇`,

menuButtonPowerForFav:'️💯 Для фаворитов',
menuButtonPowerForCur:'💯 При повторах',
menuButtonPowerForTag:'💯 Теги',
menuButtonPowerForAll:'💯 Все посты',
menuButtonPowerLimitFirst:'📉 Лимит 1',
menuButtonPowerLimitSecnd:'📈 Лимит 2',


menuEntryOtherOpts:
`🌡💯 В данном меню вы можете настроить силу, ее лимиты и отсрочки для своего бота.
Лимит 1 и 2 помогут вам сохранять желаемый баланс сил в нужном диапазоне, в то время как настройка "сила голоса" задает вашу силу по умолчанию. Лимит голосов устанавливает максимальное количество голосов. 

Подробнее вы можете прочесть непосредственно в пунктах меню 👇`,

menuButtonWhaleCalls:'📡 Призывы',
menuButtonIndFavOpts:'📋 Инд. настройки',
menuButtonVoteLimit:'⌛ Лимит голосов',
menuButtonAccOpts:'🔑 Акк',
menuEntryAcc:`<b>Настройки аккаунта пользователя</b>`,
menuEntryCurators:
`🚇 <b>Кураторы</b>
Кураторы - пользователи за которыми вы повторяете свои голоса. Если у вас похожие вкусы с одним из пользователей на голосе - добавьте его в список кураторов и бот станет повторять голоса за ним. 

Следует понимать, что нет смысла указывать множество кураторов, так же нет смысла указывать кураторов с одинаковыми предпочтениями. Или кураторов, которые и сами голосуют с помощью ботов, если только вы не хотите построить собственную цепочку "паровоз".

Во время работы вы увидите за каким куратором повторился голос, мы рекомендуем убирать кураторов из списка, если они голосуют за контент низкого качества.
Вы так же можете использовать черный список пользователей, тогда вы не станете повторять голос за куратором когда он голосует за пользователя из черного списка.
<b>Для настройки кураторов воспользуйтесь меню ниже</b>`,

menuButtonCreateCurList:'🚂 Создать список',
menuButtonAddOneCur:'➕ Добавить куратора',
menuButtonRemoveOneCur:'➖ Удалить куратора',
menuButtonResetCurs:'🗑 Сброс Кураторов',
menuButtonDelayCurs:'⏰ Отсрочка повтора',


menuEntryFavorites:
`🎯 <b>Фавориты</b>

Список пользователей, за посты которых вы будете голосовать автоматически. 
В меню расположенном ниже вы можете составить список фаворитов.`,

menuButtonAddOneFav:'➖ Удалить Фаворита',
menuButtonRemoveOneFav:'➕ Добавить Фаворита',
menuButtonImportFollow:'🔗 Импорт подписок',
menuButtonCreateFavList:'🎯 Нов. список',
menuButtonResetFavs:'🗑 Сброс Ф.',
menuButtonDelayFavs:'⏰ Отсрочка голоса',

noticeListTobig:'... весь список не помещается в отчет'

menuMsgAskAddOneCur:
`➕ <b>Добавьте новые имена кураторов к вашему списку</b>
Для этого введите имена кураторов через запятую. Например:
<code>vik,blockchained</code>	 

Текущий список:
<code>_{curatorsToFollow}</code>`,

menuMsgAskRemoveOneCur:
`❌ <b>Введите логин куратора которого нужно удалить из списка</b>	 

Текущий список:
<code>_{curatorsToFollow}</code>`,

menuMsgAskAddoneFav:
`➕ <b>Добавьте новые имена фаворитов к вашему списку</b>

Текущий список:
<code>_{FavList} </code>
_{cut}`,


menuMsgAskRemoveOneFav:
`➖ <b>Введите логин фаворита которого нужно удалить из списка</b>

Текущий список:
<code>_{FavList} </code>
_{cut}`,

menuEntryTags:
`🔖 <b>В данном разделе меню вы сможете задать избранные и запрещенные тэги</b>

Избранные тэги - бот голосует за пост фаворита только в том случае, если фаворит указал один из указанных вами тэгов.
Запрещенные тэги - если пост фаворита содержит запрещенный вами тэг, бот не станет голосовать за этот пост.

Выберите соответствующий пункт меню ниже, чтобы указать избранные или запрещенные тэги.

`,

menuButtonWhiteTags:'👍🏻 Избранные',
menuButtonBlackTags:'👎🏿 Запрещенные',
menuButtonResetTags:'🗑 Сброс тэгов',

menuMsgAskWhiteTags:
`🔖 <b>Введите избранные теги</b>
Избранные тэги - бот голосует за пост фаворита только в том случае, если фаворит указал один из указанных вами тэгов.

Теги следует указывать только латинницей, через запятую. Если вы хотите указать кириллические тэги - используйте транслитерацию. 
Узнать как выглядит кириллический тег в транслитерированной версии можно посмотрев на ссылку тега.
Например тег на русском "голос", следует вводить как "ru--golos"

Пример строки для ввода тэгов:

<code>ru--golos,ru--otkrytyij-kod,ru--blokcheijn,ru--nauka</code>`,

menuMsgAskBlackTag:
`🔖 <b>Введите запрещенные теги</b>
Запрещенные тэги - бот не будет голосовать за пост фаворита, если он использовал запрещенные вами тэги.
Обращаем внимание, что запрещенные тэги работают в рамках фаворитов, если вы повторяете голос за куратором - запрет на тэги не учитывается.

Теги следует указывать только латинницей, через запятую. Если вы хотите указать кириллические тэги - используйте транслитерацию. 
Узнать как выглядит кириллический тег в транслитерированной версии можно посмотрев на ссылку тега.
Например тег на русском "голос", следует вводить как "ru--golos"

Пример строки для ввода тэгов:

<code>nsfw,test,ru--govno,ru--spam,spam</code>`,

menuMsgStop:
`⏸️ Вы остановили процесс повтора голосов, восстановление командой 🚀 Запуск`,

menuMsgThanks:
`🍻 <b>В качестве благодарности вы можете проголосовать за делегатов голоса: vik, robot и golos-api и следить за новостями в чате</b> @chain_cf и канале @viknews 

чтобы проголосовать за делегатов, вам необходимо перейти на страницу https://golos.io/~witnesses`,

menuMsgSTATUS:
`<b>Вот так выглядят ваши настройки сейчас:</b> 
<b>Логин</b> - <code>_{login}</code>

Голосовать за любые посты: _{enableAllPostVoting}
Голосовать за любые посты c тегом: _{enableOnlyTagVoting}

<b>Таймеры</b>
Фавориты - <code>_{delayFAV} мин.</code>
Кураторы - <code>_{delay} мин.</code>
X период - <code> назад на _{past} мин.</code>

<b>Настройки силы</b> 
Сила голоса при повторах - <code>_{power / 100}%</code>
Сила голоса за фаворитов - <code>_{FAVpower / 100}%</code>
Режим голосов за избр. теги - <code>_{onlyTagPower/ 100}%</code>
Режим голосов за все посты - <code>_{allPostPower/ 100}%</code>

Нижний порог силы - <code>стоп при _{powlimit}%</code>  
Верхний порог силы - <code>старт при _{newpowlim}%</code>  
Лимит голосов - <code>_{maxups}</code> голосов
 
<b>Черный Список</b>
<code>_{blacklist}</code> 


 
<b>Команды бота</b>
/menu - Главное меню бота
/me - Информация о вашем аккаунте 
/list - Списки кураторов, фаворитов

/start - Сброс всех настроек

Рекомендуем подписаться на канал @viknews и чат @chain_cf - там будут сообщаться способы обновления бота на новые версии.`,

menuMsgSTATUSextraopts:
`<b>Индивидуальные параметры для фаворитов:</b>
<code>_{extraoptions}</code>`,

menuMsgNoWtags: 
`Избранные тэги не указаны, бот голосует за посты фаворитов с любыми тэгами кроме запрещенных`,

menuMsgNoBtags: 
`Запрещенные тэги не указаны, бот может голосовать за любой пост фаворита`,

menuMsgSTATUStags:
`<b>Избранные и запрещенные тэги</b>

Избранные:
<code>_{Wtags}</code>

Запрещенные:
<code>_{Btags}</code>`,

menuMsgHELP:
`Страница помощи будет заполнена позднее.
Сейчас вы можете попросить помощи в нашем чате
	👉 @chain_cf`,

menuMsgChat:
`⛓ Вы можете следить за обновлениями ботов на канале @viknews, а так же задать вопросы или оставить пожелания в чате @chain_cf 

⛓ https://t.me/chain_cf`,

menuMsgAskBlackList:
`💩 <b>Черный список</b>
Введите имена пользователей за которых вы не хотите голосовать. 
Это нужно для того, чтобы фильтровать предпочтения своих кураторов.

Совет: вы можете ввести собственное имя - тогда вы не будете голосовать сами за себя, когда за вас голосует куратор.
Так же вы можете ввести сюда сервисные аккаунты, спам-боты и другие ники, которые размещают бесполезный контент.

Вводить нужно через запятую 👇`,

menuMsgAskOneToBlist:
`💩 Добавьте одно или несколько имен. Множественные имена добавляйте через запятую и без пробелов!
Примеры:
1. <code>myenemy</code> - одно имя
2. <code>terorist,narkoman,prostitutka</code> - несколько имен
`,

menuMsgAskRemoveBlist:
`💩 Убрать одно или несколько имен из черного списка. 
Множественные имена вводите через запятую и без пробелов!
Примеры:
1. <code>myenemy</code> - одно имя
2. <code>terorist,narkoman,prostitutka</code> - несколько имен

Подсказка:
Если в вашем списке оказался лишний символ, пробел или опечатка в логине, вы можете убрать это простым принципом замены. 
Кнопка удалить стирает из черного списка то, что вы введете. `,

menuEntryBlackList:
`💩 Настройки черного списка

Вы можете создать новый нажав кнопку "Создать список" или добавить/удалить имена из ранее созданного  нажав соответствующие кнопки
Для очистки списка можно использовать кнопку "⚰️ Создать список" и вместо списка ввести "no"` ,

menuButtonCreateBlack:'️⚰ Новый список',
menuButtonRemoveOneBlack:'⚰ Добавить',
menuButtonAddOneBlack:'⚰ Удалить',

menuMsgAbouRemoveBlack:
`💩 Убрать одно или несколько имен из черного списка. 
Множественные имена вводите через запятую и без пробелов!
Примеры:
1. <code>myenemy</code> - одно имя
2. <code>terorist,narkoman,prostitutka</code> - несколько имен

Подсказка:
Если в вашем списке оказался лишний символ, пробел или опечатка в логине, вы можете убрать это простым принципом замены. 
Кнопка удалить стирает из черного списка то, что вы введете. `,

menuMsgAboutBlackList:
`💩 Настройки черного списка

Вы можете создать новый нажав кнопку "Создать список" или добавить/удалить имена из ранее созданного  нажав соответствующие кнопки
Для очистки списка можно использовать кнопку "⚰️ Создать список" и вместо списка ввести "no"`,


msgAboutCommON:
`Бот будет игнорировать голос куратора если он проголосует за комментарий вместо поста`,

msgAboutCommOFF:
`Бот будет повторять голос за куратором если он проголосует за комментарий`,

msgAboutPostRedON:
`Включен режим в котором бот игнорирует события редактирования постов`,

msgCmdPostRedOFF:
`Бот сможет реагировать на событие редактирования как на новый пост`,

// ... IN PROGRESS

}
