import { Request } from 'node-vk-api';
import fs from 'node:fs';
import axios from 'axios';

class ShortVideo {
  #ACCESS_TOKEN;
  #USER_AGENT;
  constructor(token, agent = "VKAndroidApp/8.17-15401 (Android 7.1.2; SDK 25; armeabi-v7a; google G011A; zh; 1280x720)") {
    this.#ACCESS_TOKEN = token;
    this.#USER_AGENT = agent;
  }
  create = (url, params) => new Promise((resolve, reject) => {
    const vk = new Request(this.#ACCESS_TOKEN, "5.131", "https://api.vk.com/method/", this.#USER_AGENT);
    const { size } = fs.statSync(url);
    vk.request("shortVideo.create", { file_size: size, ...params }).then(({ upload_url }) => {
      if (upload_url) {
        const file = fs.readFileSync(url);
        const type = "video/mp4";
        const form = new FormData();
        form.append("file", new Blob([file]), type);
        axios.post(upload_url, form, {
          headers: {
            "Content-Type": type,
            "User-Agent": this.#USER_AGENT
          }
        }).then(({ status }) => {
          if (status === 200) {
            resolve(true);
          } else {
            resolve(false);
          }
        }).catch((error) => {
          reject(error);
        });
      } else {
        resolve(false);
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

export { ShortVideo };
