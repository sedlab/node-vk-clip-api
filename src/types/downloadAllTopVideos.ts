import { TClip, TGetTopVideosParams, TDownloadResponse } from "../types";

export type TDownloadAllTopVideosRequest = (dir: string, params: TDownloadAllTopVideosParams, filterCallback?: (clip: TClip) => boolean) => Promise<TDownloadAllTopVideosResponse>;

export type TDownloadAllTopVideosParams = TGetTopVideosParams;

export type TDownloadAllTopVideosResponse = TDownloadResponse;
