# node-vk-clip-api

Библиотека для работы с API VK Клипы.

## Установка

`npm i -s dsedinkin/node-vk-clip-api#latest` или `yarn add dsedinkin/node-vk-clip-api#latest`

## Использование

> ES6

```js
import { ShortVideo } from "node-vk-clip-api";
```

> ES5

```js
const { ShortVideo } = require("node-vk-clip-api");
```

## Пример

```js
import { ShortVideo } from "node-vk-clip-api";

const TOKEN = ""; // access_token.

// Помимо токена можно передавать другие поля:
// new Request(TOKEN, "VKAndroidApp/8.17-15401 (Android 7.1.2; SDK 25; armeabi-v7a; google G011A; zh; 1280x720)");

const clip = new ShortVideo(TOKEN);

const url = "./clip.mp4";

// Загрузка клипа.
clip.create(url, { group_id: 1, description: "Описание клипа #хештег1 #хештег2", wallpost: 1 })
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.error({ error });
  });
```
