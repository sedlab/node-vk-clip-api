type TParams = {
    analytics?: string;
    audio_id?: string;
    clickable_stickers?: string;
    description?: string;
    group_id?: number;
    latitude?: string;
    longitude?: string;
    mask_ids?: string;
    title?: string;
    wallpost?: number;
};
type TRequest = (url: string, params: TParams) => Promise<boolean>;
declare class ShortVideo {
    #private;
    constructor(token: string, agent?: string);
    create: TRequest;
}

export { ShortVideo };
