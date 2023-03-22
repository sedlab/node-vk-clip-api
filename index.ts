// import path from "node:path";
// import { ShortVideo } from "./dist";

// const TOKEN = ""; // access_token.

// const clip = new ShortVideo(TOKEN);

// const url = "./clip.mp4";

// // Загрузка клипа.
// clip.create(url, { group_id: 1, description: "Описание клипа #хештег1 #хештег2", wallpost: 1 })
//   .then((data) => {
//     console.log({ data });
//   })
//   .catch((error) => {
//     console.error({ error });
//   });

// // Получает информацию по каждому клипу группы или пользователя.
// clip.getOwnerVideos({ owner_id: -170063178, count: 1 })
//   .then((resp) => {
//     console.dir(resp, { depth: null });
//   })
//   .catch((error) => {
//     console.dir(error, { depth: null });
//   });

// const dir = path.join(__dirname, "clips");

// // Скачивает все клипы группы или пользователя.
// clip.downloadAllOwnerVideos(dir, { owner_id: -170063178, count: 1 })
//   .then((resp) => {
//     console.dir(resp, { depth: null });
//   })
//   .catch((error) => {
//     console.dir(error, { depth: null });
//   });

// // Получает персонализированную ленту с преднастройками.
// clip.getTopVideos({ tag: "бизнес", count: 1 })
//   .then((resp) => {
//     console.dir(resp, { depth: null });
//   })
//   .catch((error) => {
//     console.dir(error, { depth: null });
//   });
