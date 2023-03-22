import { TGetOwnerVideosParams } from "../types";

export type TDownloadAllOwnerVideosRequest = (dir: string, params: TDownloadAllOwnerVideosParams) => Promise<TDownloadAllOwnerVideosResponse>;

export type TDownloadAllOwnerVideosParams = TGetOwnerVideosParams;

export type TDownloadAllOwnerVideosResponse = {
  response: {
    count: number;
    items: Array<number>;
  };
  error: {
    count: number;
    items: Array<number>;
  };
};