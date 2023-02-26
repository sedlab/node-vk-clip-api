import { ShortVideo } from "node-vk-clip-api";

const TOKEN = ""; // access_token.

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
