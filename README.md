### Игра "Крокодил"
Весёлая онлайн-игра по правилам обычной настольной игры "крокодил" - один участник рисует загаданное слово, другие отгадывают.
Подробнее с правилами можно ознакомиться в файле `RULES.md`

Проект был создан на основе [`предоставленного репозитория`](https://github.com/yandex-praktikum/client-server-template-with-vite).

В работе используется [`API Yandex Practikum`](https://ya-praktikum.tech/api/v2/swagger/). Реализация взаимодействия между клиентами опирается на websocket API для чата.

Презентацию проекта можно посмотреть [`здесь`](https://drive.google.com/file/d/1Xfno7yWYp5bsnEdMmNCoscRfXUE73e9Y/view)

### Команда проекта

[`Абазовская Анастасия`](https://github.com/ryabayeah)

[`Бабенко Михаил`](https://github.com/CruelDwemer)

[`Ворожцов Илья`](https://github.com/ilyavorozhtsov39)

[`Дергунов Максим`](https://github.com/dergunovmxm)

[`Показацкая Арина`](https://github.com/arishkaa05)

под мудрым наставничеством Тарасова Никиты

### Как запускать?

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev`
3. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент
4. Выполните команду `yarn dev --scope=server` чтобы запустить только server

### SSR

dev:
```cd packages/client && yarn build && cd ../server/ && yarn dev```

prod:
```cd packages/client && yarn build && cd ../server/ && yarn build && yarn prod```

### Как добавить зависимости?
В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента 
```yarn lerna add {your_dep} --scope client```

Для сервера
```yarn lerna add {your_dep} --scope server```

И для клиента и для сервера
```yarn lerna add {your_dep}```


Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
```yarn lerna add {your_dep} --dev --scope server```


### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

```yarn test```

### Линтинг

```yarn lint```

### Форматирование prettier

```yarn format```

### Production build

```yarn build```

И чтобы посмотреть что получилось


`yarn preview --scope client`
`yarn preview --scope server`

## Хуки
В проекте используется [lefthook](https://github.com/evilmartians/lefthook)
Если очень-очень нужно пропустить проверки, используйте `--no-verify` (но не злоупотребляйте :)

## Ой, ничего не работает :(

Откройте issue, я приду :)

## Автодеплой статики на vercel
Зарегистрируйте аккаунт на [vercel](https://vercel.com/)
Следуйте [инструкции](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
В качестве `root directory` укажите `packages/client`

Все ваши PR будут автоматически деплоиться на vercel. URL вам предоставит деплоящий бот

## Production окружение в докере
Перед первым запуском выполните `node init.js`


`docker compose up` - запустит три сервиса
1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`
