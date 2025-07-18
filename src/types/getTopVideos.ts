import { TClip, TGroup } from "../types";

export type TGetTopVideosRequest = (params: TGetTopVideosParams) => Promise<TGetTopVideosResponse>;

export type TGetTopVideosParams = any;

export type TGetTopVideosResponse = {
  count: number;
  items: Array<TClip>;
  next_from: string;
  groups: Array<TGroup>;
};
