import { ShortVideo } from "node-vk-clip-api";

const TOKEN = "vk1.a.NHUvZGqoOSVBsDwxyD59xr3WuIjRd-Q3n5193RDFVvXZyahhUZah6pPjKvH_bCJ52gowKg8xkaf5Ot8ukAw8WEHKsnME5wpSUS0nSwfSkY9EPxR2SCaphjKwKCAj5PKzmcDUu6Z5YDPwemafGKeCrYMjiM1RT3bo-Dwa7e-TGW5Ls_mI9BKzxmIPTJP5HrXY"; // access_token.

const clip = new ShortVideo(TOKEN);

const url = "./clip.mp4";

// Загрузка клипа.
clip.create(url, { group_id: 218880516, description: "Описание клипа #хештег1 #хештег2", wallpost: 1 })
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.error({ error });
  });
