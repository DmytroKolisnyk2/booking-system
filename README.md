# Booking system
- [Get started](#get-started)
- [Description](#description)
- [Our Team](#our-team)
- [Tech Process](#tech-process)
  - [Front_End](#front_end-1)
    - [Project structure](#project-structure)
    - [Redux structure](#redux-structure)
    - [Api structure](#api-structure)
    - [Pages structure](#pages-structure)
    - [Project's components](#projects-components)
    - [Router structure](#router-structure)
  - [Back_End](#back_end-1)
    - [Backend structure](#back-end-project-structure)

## Get started

#### `Dependencies:`
1. Lts version of Node
2. Npm version 8.3.0 and higher

#### `Commands`
1. Запуск проєкту `npm start`
2. Деплой проєкту `npm run deploy`

#### `Guide`
1. Склонуйте репозиторій 
```json
git clone https://github.com/DmytroKolisnyk2/booking-system
```
2. Встановіть залежності
```json
npm clean-install
```
3. Запустіть проєкт 
```json
npm start
```

## Description

Intern проект нашої команди з використанням `react 18.0.2, redux, scss, momentJS, react router 6` та інших бібліотек.   
На даний момент готові сторінки -
- `Caller` - людини що назначає зустрічі на конкретного менеджера в конкретний час,   
- `Manager` - що обирає коли в нього вільний час, коли робочий, а коли консультації, а також може запускати та змінювати інформацію констультацій
- `Confirmator` - що змінує статус зустрічі, яку назначає коллер, перенесена, відмінена, або ж підтверджена, а також коментар до зустрічі
- `Superadmin`- що створює адмінів та інших користувачів, курси і групи
- `admin` - що створює користувачів, курси і групи

В майбутньому плануємо додати `авторизацію`, `зміну мови` :)

## Our team

Наша команда складається з 8'ми людей, всі вони внесли свій вклад у проект, тим самим пришвидшивши його реліз, а ось і наша команда:

#### `Design`
- [Ярина Виноградова](https://www.figma.com/files/recent?fuid=966368081114943131) - Дизайнер, розробила дизайн проєкту;

#### `Front_End`
  Наші фронтендери 🥰🥰🥰
- [Дмитро Колісник](https://github.com/DmytroKolisnyk2) - TeamLead, керував розробкою проєкту, розробив сторінку `Confirmator`, а також слідкував за кодом;
- [Максим Попсуй](https://github.com/MaxPopsuy)  - Розробив мультифункіональні компоненти, модальні вікна і сторінку `Caller`, а також займався внесенням правок і багфіксом, писав документацію; 
- [Ігор Якіб'юк](https://github.com/Igoryakib)   - Розробив структуру Redux (Duuuucks 🦆) для проєкту, мультифункціональні компоненти, сторінку `Manager`, а також займався внесенням правок і багфіксом, писав документацію;
- [Анна-Домініка Козак](https://github.com/Anna-Dominika1) - Розробила сторінку `SuperAdministator` і `Administrator`;  
- [Євген Бочаров](https://github.com/Eugene-Bocharov)   - Брав участь у розробці сторінки `Manager`;

#### `Back_End`
Наші пайтоністи 🥰🥰🥰
- [Ярослав Висоцький](https://github.com/Yaroslav702) - Розробив структуру `Back_End`  
- [Олександр Зборовський](https://github.com/dormyyy)  - Створював роути `Back_End`


## Tech process

 ### Front_End

- #### `Project structure`
Структура нашого проєкту виглядає ось так:

![img](./src/img/doc29.png)

На фото ви бачите кореневу папку `src` в якій знаходиться серце ❤ нашого проекту: `components`, `helpers`, `img`, `pages`, `redux`, App і глобальні стилі. На фото нижче ви побачите наповнення важливих папок:

![img](./src/img/doc28.png)  ![img](./src/img/doc27.png)

![img](./src/img/doc26.png)  ![img](./src/img/doc25.png)


- #### `Redux structure`
Redux🦆 у нас виглядає наступним чином:

У Vs Code структура папок📁:

![img](./src/img/doc25.png)

У Chrome DevTools⚙: 

![img](./src/img/doc1.png)

Структура Юзерів `Manager` і `Caller`:

![img](./src/img/doc2.png)

Структура Юзерів `Caller` і `Confirmator`:

![img](./src/img/doc3.png)

Структура тижня `week`:

![img](./src/img/doc4.png)

Саме дерево 🌳 Redux:

![img](./src/img/doc5.png)

Коли ознайомились зі структурою вище, можемо перейти до самого коду. Маленький екскурс: Ви могли замітити, що поля в менеджера, колера і кофірматора частково, а інколи повністю співпадають і це не похибка, все вірно. Так, як у всіх трьох функціонал схожий, а батьком для 2 останніх можна вважати `Manager`, тому тут розглянемо саме його.

Для написання Redux Store ми використовували бібліотеку [Redux Toolkit](https://redux-toolkit.js.org/).

Почнемо з типів `actions` ви їх можете бачити у файлі нижче, назва говорить сама за себе: 

![img](./src/img/doc17.png)

Далі ми їх використовуємо у manager-operations, як для створення звичайних `action-creators`, так і для створення асинхронних `action-creators` - одним слово redux-thunk. Не будемо вглиблюватись в теорію, адже, якщо ви тут і це читаєте - значить маєте знати це 😉😊.

Приклад створення звичайних `action-creator`:

![img](./src/img/doc7.png)

Також на фото ви бачите імпорт усіх необхідних `types`, [CreateAction](https://redux-toolkit.js.org/usage/usage-with-typescript#createaction), [CreateAsyncThunk](https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk), а також імпорт API функції з якими детально можете ознайомитись тут [Api structure](#api-structure).

Думаю тут все зрозуміло, а тепер перейдемо до створення `redux-thunk` 😋. Поясню на одній, адже наступні схожі по шаблону, проте мають інший функціонал😉.
Отже як тільки ви почули `redux-thunk` - ви мали б уявити щось типу того:

![img](./src/img/doc33.png)

І це правильно, проте не зручно і багато лишнього коду, тому ми використовували підхід [CreateAsyncThunk](https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk) (Ознайомтесь, якщо до того не працювали з ним, щоб зрозуміти що тут далі відбувається🙃):

![img](./src/img/doc8.png)

Сам `action-operation` виконує функцію отримання даних. В нашому випадку отримання поточного тижня менеджера 📆.

Ми прокидуємо тип нашої `action-creator`, використовуємо функцію API для запиту на сервер і в результаті, якщо відповідь успішна - записуємо у `store`, якщо ж відповідь неуспішна, то ви могли бачити, що ми імпортуємо пакетик [@pnotify/core](https://github.com/sciactive/pnotify) для виводу сповіщень користовачу про статус операції 📝. Ми перевіряємо чи є повідомлення про помилку з сервера, якщо так записуємо її, якщо ні, то записуємо технічне повідомлення про помилку. Також прокидуємо помилку в `store`, якщо вона є 🙂. Ось так виглядає асинхронний `action-creator`, таким принципом побудовані решта redux-thunks😊.

Тепер перейдемо до не менш важливої складової, а саме `reducers` 🤤:

![img](./src/img/doc12.png)

![img](./src/img/doc13.png)

![img](./src/img/doc14.png)

Тут ми імпортуємо [createReducer](https://redux-toolkit.js.org/api/createReducer) для створення редюсерів + `actions` ⚙. Також тут ви можете бачити скорочення коду, використовуючи [CreateAsyncThunk](https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk). А далі нічого складного, як вже раніше говорив: коли успішно - відповідь записується у `store`, якщо помилка, то вона записується у `store`. Також можете побачити принцип роботи редюсерів loading і error.

Далі ми це все об'єднуємо і будуємо структуру дерева, яку ви бачили напочатку, красива правда😍😍😍?

![img](./src/img/doc15.png)

І фінальнй етап - це `selectors`. У нас вони реалізовані наступним чином:

![img](./src/img/doc16.png)


- #### `Api structure`

![img](./src/img/doc27.png)

На фото вище ви можете побачити структуру папки `helpers` 💾, що виконує роль Api проєкту, в ній є всі запити на сервер, що використовуються, всі вони мають однакову структуру. 

А зараз ми розберемося з найлегшою категорією запитів - `course`. 
На фото нижче ви можете детальніше побачити структуру наших запитів 🎯:

![img](./src/img/doc30.png)

Ми використовуємо бібліотеку [axios](https://www.npmjs.com/package/axios) для полегшення роботи з сервером, також в кожному файлі в основному чотири типи запитів - `get`, `post`, `put`, `delete`, зараз ми розберемо на прикладі запит `getCourses()`:

![img](./src/img/doc31.png)

Ця функція робить get-запит на наш сервер з роутом `courses`, і повертає усі дані, що отримує з нього, тобто ми в будь-якому місці коду можемо викликати цю функцію і отримати данні курсів, і так з будь-яким запитом.

Ну а ось що цей запит повертає з бекенду 🔑:

![img](./src/img/doc32.png)


- #### `Pages Structure`

В нашому проєкті використовуються сторінки як основа сайту, нижче ви можете побачити структуру сторінок:

![img](./src/img/doc36.png)

Тобто папка-ім'я сторінки, сама сторінка, і в якості стилів scss модулі. Таким чином побудовані всі сторінку нашого сайту.
Розберемо на прикладі сторінки `caller` - користувача що назначає зустрічі менеджера 👩‍💼: 

![img](./src/img/doc35.png)

Тут ми бачимо імпорт компонентів для використання, таких як [table і table item](https://reactjs.org/docs/hooks-intro.html) та інших, також імпорт запитів і `caller-selectors, caller-operations`, а також [hooks](https://reactjs.org/docs/hooks-intro.html) `useState`, `useEffect`, далі починається код самої сторінки 👨‍💻:

![img](./src/img/doc37.png)

В цій частині ми витягуємо id коллера, а також дату, таблицю і id тижня, в [useEffect](https://reactjs.org/docs/hooks-effect.html) все це оброблюється і на виході отримується теперешній тиждень і сам коллер, тепер перейдемо в рендер цієї сторінки 🥳:

![img](./src/img/doc38.png)

Ми використовуємо заздалегідь підготовані [компоненти](#projects-components), `table` в який ми прокидуємо id тижня, таблицю і тому що це коллер прапорець `caller`. `Datepicker` в який ми прокидуємо функцію зміни тижня, а також теперешній тиждень. В `days` ми прокидуємо прапорець `caller`: рендереться дні колера. Все найцікавіше починається в самому компоненті таблиці, але про нього пізніше 👨‍💻.


- #### `Project's components`

![img](./src/img/doc28.png)

А зараз ми розглянемо компоненти 🤩. Їх тут у нас дуже багато, тому ми виділили 2 основних, які варті вашої уваги: `Table`, `TableItem`.

![img](./src/img/doc43.png)

![img](./src/img/doc10.png)

В `TableItem` ми імпортуємо всі необхідні системні бібліотеки `prop-types`, хук [useState](https://uk.reactjs.org/docs/hooks-state.html), [classnames](https://www.npmjs.com/package/classnames) для об'єднанння стилів і валідації ✅, а також стилі і модальні  вікна. Компонент в себе приймає `data` - час, функції кліку `onClickFn`, `onClickBtnStart`: на компонент, на кнопку, `colorId` - айді кольора, прапорці: `Caller`, `Consultation` і `Postponed`, а також айді тижня, індекс дня і години та слоти📝.

Тепер перейдемо до логіки компоненту ⚙:

![img](./src/img/doc11.png)

Створюємо `state` з полям isOpen, Modal. Робимо валідацію по `colorId`, по певній цифрі підставляється свій стиль. На логіці закінчили, переходимо до рендеру:

![img](./src/img/doc40.png)

![img](./src/img/doc41.png)

![img](./src/img/doc42.png)

Тут ви бачите, як по вище згаданих прапорцях, робимо рендер. Під кожний своя логіка і розмітка. Ну і в кінці `prop-types` 😉. На `TableItem` закінчили, переходимо до фінальної частини цього розділу - компонент `Table`:

![img](./src/img/doc44.png)

Імпортуємо наш компонент `TableItem`, а також інші функції та бібліотеки. `Table` також в себе приймає прапорці, що свідчить де буде рендеретись таблиця, а також функцію кліку на `TableItem`, сам масив слотів і айді тижня. З використанням хука `useSelector` дістаємо прапорці `loading` та `error`: для обробки їх під час рендеру.

![img](./src/img/doc45.png)

Спочатку рендериться лоадер по тому ж вище згаданому прапорцю `loading`. Уже в рендері ми використовуємо наш компонент `TableItem` і передаємо йому всі необхідні `props` про які ми говорили вище. Також варто зазначити, що вони рендереться по прапорцях, які ми передаємо таблиці, що дає змогу використовувати ці компоненти декілька разів у різних місцях додатку 😊. 

Приклад рендеру компонента `Table` на сторінці менеджера, розділ консультації:

![img](./src/img/doc46.png)


- #### `Router structure`
І останній розділ глави `Front_end` - `react-router` структура. На фото нижче ми імпортуємо всі сторінки додатку P.S В майбутньому планується додати `React Lazy` і прописуємо раути під кожний маршрут. Також є вкладені раути з використанням, де потріно `outlet`😉:

![img](./src/img/doc18.png)

![img](./src/img/doc19.png)

 ### Back_End

  - #### `back-end-project-structure`
  
Структура нашого проєкту виглядає ось так:

![img](https://i.imgur.com/4kTyJmV.png)

В папці `routes` знаходяться всі роути по категоріям 

![img](https://i.imgur.com/YE6oCJs.png)

Зараз, на прикладі роута `/get_week/<int:week_id>` розберемо функціонал та роботу фреймворку Flask.

![img](https://i.imgur.com/5RrMN28.png)

1 Дістаємо з бази даних менеджера та тиждень ( до речі, ми використовували PostgreSQL як бд, та SQLAlchemy як інструментарій для роботи з нею )

![img](https://i.imgur.com/OxH1B5O.png)

2. Перевіряємо наявність слота та тижня. У негативному випадку виводимо повідовлення:

![img](https://i.imgur.com/4eQbd6q.png)  
Some code  
![img](https://i.imgur.com/3iJQcc0.png)

3. Оголошуємо списки `Result` & `Current_week_days`; Генеруємо шаблон для виводу, якщо на певний день слоти відсутні

![img](https://i.imgur.com/A5jnsjM.png)

4. Генеруємо список із дат кожного дня тижня

![img](https://i.imgur.com/DPyilwO.png)

5. 
- Проходимо по вищеназваному списку (7 ітерацій); 
- Оголошуємо список `current_day_slots`, куди пізніше запишуться слоти поточної ітерації(дати);
- Дістаємо слоти зі статусами 1 або 2 по поточній даті;
- Робимо перевірку - якщо таких слотів не існує - використовуємо шаблон; 

![img](https://i.imgur.com/BpoLRYE.png) 

6. 
- Запускаємо цикл по годинах з 8 до 22;
- Дістаємо слот за фільтром по даті, часу та менеджеру;
- Виконуємо перевірку: Якщо слот знаходиться в списку слотів поточного дня - пропускаємо ітерацію;
- Виконуємо перевірку: Якщо слота не існує - використовуємо схему схожу до шаблона;
- У позитивному випадку записуємо слот у форматі `time, color, slot_id` до списку `current_day_slots`

![img](https://i.imgur.com/P28dDz2.png)

7. Записуємо до списку `result` список із слотами дня певної ітерації, видаляємо пусті комірки, записуємо дані до файлу з логами

![img](https://i.imgur.com/4FF1etm.png)

![img](https://i.imgur.com/mKx2O6A.png)

8. Повертаємо на клієнт необхідні для рендерингу таблиці

![img](https://i.imgur.com/BR6UXhu.png)


### Всі питання по документації ставити -> 
#### [Front_End](#front_end-1) частина:
[Ігор Якіб'юк](https://github.com/Igoryakib) або [Максим Попсуй](https://github.com/MaxPopsuy)

#### [Back_End](#back_end-1) частина:
[Ярослав Висоцький](https://github.com/Yaroslav702) або [Олександр Зборовський](https://github.com/dormyyy)

[Go Back](#booking-system)
### Час праці:
Ярослав ~ 147 годин  
Олександр ~ 126 годин  
Дмитро ~ 125 годин  
Анна ~ 115 годин  
Максим ~ 128 годин  
Ігор ~ 128 годин  
Євген ~ 80 годин  
(Створення документації - 20 годин)  


![License](https://img.shields.io/badge/-License:_Goiteens-292D3E?style=for-the-badge)
