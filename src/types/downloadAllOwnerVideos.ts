import { TClip, TGetOwnerVideosParams, TDownloadResponse } from "../types";

export type TDownloadAllOwnerVideosRequest = (dir: string, params: TDownloadAllOwnerVideosParams, filterCallback?: (clip: TClip) => boolean) => Promise<TDownloadAllOwnerVideosResponse>;

export type TDownloadAllOwnerVideosParams = TGetOwnerVideosParams;

export type TDownloadAllOwnerVideosResponse = TDownloadResponse;
