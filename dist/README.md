# node-vk-clip-api

Библиотека для работы с API VK Клипы.

## Установка

`npm i sedlab/node-vk-clip-api#latest` или `yarn add sedlab/node-vk-clip-api#latest`

## Использование

> ES6

```js
import { ShortVideo } from "node-vk-clip-api";
```

> ES5

```js
const { ShortVideo } = require("node-vk-clip-api");
```

#### Загрузка клипа.

```js
import { ShortVideo } from "node-vk-clip-api";

const TOKEN = ""; // access_token.

const clip = new ShortVideo(TOKEN);

const url = "./clip.mp4";

clip.create(url, { group_id: 1, description: "Описание клипа #хештег1 #хештег2", wallpost: 1 })
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.error({ error });
  });
```

#### Получает информацию по каждому клипу группы или пользователя.

```js
import { ShortVideo } from "node-vk-clip-api";

const TOKEN = ""; // access_token.

const clip = new ShortVideo(TOKEN);

clip.getOwnerVideos({ owner_id: -170063178, count: 5 })
  .then((resp) => {
    console.dir(resp, { depth: null });
  })
  .catch((error) => {
    console.dir(error, { depth: null });
  });
```

#### Скачивание всех клипов группы или пользователя.

```js
import path from "node:path";
import { ShortVideo } from "node-vk-clip-api";

const TOKEN = ""; // access_token.

const clip = new ShortVideo(TOKEN);

const dir = path.join(__dirname, "clips");

clip.downloadAllOwnerVideos(dir, { owner_id: -170063178, count: 5 })
  .then((resp) => {
    console.dir(resp, { depth: null });
  })
  .catch((error) => {
    console.dir(error, { depth: null });
  });
```

#### Получает персонализированную ленту с преднастройками.

```js
import { ShortVideo } from "node-vk-clip-api";

const TOKEN = ""; // access_token.

const clip = new ShortVideo(TOKEN);

clip.getTopVideos({ tag: "бизнес", count: 1 })
  .then((resp) => {
    console.dir(resp, { depth: null });
  })
  .catch((error) => {
    console.dir(error, { depth: null });
  });
```