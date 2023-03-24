import { TClip } from "../types";

export type TSearchRequest = (params: TSearchParams) => Promise<TSearchResponse>;

export type TSearchParams = any;

export type TSearchResponse = {
  catalog: {
    default_section: string;
    sections: any;
  },
  profiles: any;
  groups: any;
  videos: Array<TClip>;
  albums: any;
};
