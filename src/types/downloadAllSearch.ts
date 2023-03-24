import { TClip, TGetTopVideosParams, TDownloadResponse } from "../types";

export type TDownloadAllSearchRequest = (dir: string, params: TDownloadAllSearchParams, filterCallback?: (clip: TClip) => boolean) => Promise<TDownloadAllSearchResponse>;

export type TDownloadAllSearchParams = TGetTopVideosParams;

export type TDownloadAllSearchResponse = TDownloadResponse;
