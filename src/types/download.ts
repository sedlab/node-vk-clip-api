import { TClip } from "../types";

export type TDownloadRequest = (dir: string, items: TDownloadParams, filterCallback?: (video: TClip) => boolean) => Promise<TDownloadResponse>;

export type TDownloadParams = Array<TClip>;

export type TDownloadResponse = {
  response: {
    count: number;
    items: Array<number>;
  };
  error: {
    count: number;
    items: Array<number>;
  };
};
