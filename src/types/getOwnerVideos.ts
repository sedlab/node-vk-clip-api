import { TClip, TGroup } from "../types";

export type TGetOwnerVideosRequest = (params: TGetOwnerVideosParams) => Promise<TGetOwnerVideosResponse>;

export type TGetOwnerVideosParams = {
  owner_id: number;   // Индификатор владельца.
  count?: number;     // Количество клипов.
};

export type TGetOwnerVideosResponse = {
  count: number;
  items: Array<TClip>;
  next_from: string;
  groups: Array<TGroup>;
};
