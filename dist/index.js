'use strict';

var nodeVkApi = require('node-vk-api');
var fs = require('node:fs');
var path = require('node:path');
var axios = require('axios');

class ShortVideo {
  #ACCESS_TOKEN;
  #USER_AGENT;
  #VK;
  constructor(token, agent = "VKAndroidApp/8.17-15401 (Android 7.1.2; SDK 25; armeabi-v7a; google G011A; zh; 1280x720)") {
    this.#ACCESS_TOKEN = token;
    this.#USER_AGENT = agent;
    this.#VK = new nodeVkApi.Request(this.#ACCESS_TOKEN, "5.131", "https://api.vk.com/method/", this.#USER_AGENT);
  }
  create = (url, params) => new Promise((resolve, reject) => {
    const { size } = fs.statSync(url);
    this.#VK.request("shortVideo.create", { file_size: size, ...params }).then(({ upload_url }) => {
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
  getOwnerVideos = (params) => new Promise((resolve, reject) => {
    this.#VK.request("shortVideo.getOwnerVideos", { ...params }).then((data) => resolve(data)).catch((error) => reject(error));
  });
  downloadAllOwnerVideos = (dir, params) => new Promise((resolve, reject) => {
    this.getOwnerVideos(params).then(async (resp) => {
      const videos = resp.items;
      const response = [];
      const error = [];
      if (videos && videos.length > 0) {
        for (let i = 0; i < videos.length; i++) {
          const video = videos[i];
          const { files, id } = video;
          const { mp4_1080: quality1080, mp4_720: quality720, mp4_480: quality480, mp4_360: quality360, mp4_240: quality240, mp4_144: quality144 } = files;
          const url = quality1080 || quality720 || quality480 || quality360 || quality240 || quality144;
          if (url) {
            const { data } = await axios({ method: "GET", url, responseType: "stream", headers: { "User-Agent": this.#USER_AGENT } });
            const newDir = path.join(dir, `${id}.mp4`);
            try {
              const file = fs.createWriteStream(newDir);
              data.pipe(file);
              response.push(id);
            } catch {
              error.push(id);
            }
          } else {
            error.push(id);
          }
        }
        resolve({
          response: {
            count: response.length,
            items: response
          },
          error: {
            count: error.length,
            items: error
          }
        });
      } else {
        resolve({
          response: {
            count: 0,
            items: []
          },
          error: {
            count: 0,
            items: []
          }
        });
      }
    }).catch((error) => reject(error));
  });
  getTopVideos = (params) => new Promise((resolve, reject) => {
    this.#VK.request("shortVideo.getTopVideos", { ...params }).then((data) => resolve(data)).catch((error) => reject(error));
  });
}

exports.ShortVideo = ShortVideo;
