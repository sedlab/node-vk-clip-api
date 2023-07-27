type TCreateRequest = (url: string, params: TCreateParams) => Promise<TCreateResponse>;
type TCreateParams = {
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
type TCreateResponse = boolean;

type TDownloadRequest = (dir: string, items: TDownloadParams, filterCallback?: (video: TClip) => boolean) => Promise<TDownloadResponse>;
type TDownloadParams = Array<TClip>;
type TDownloadResponse = {
    response: {
        count: number;
        items: Array<number>;
    };
    error: {
        count: number;
        items: Array<number>;
    };
};

type TDownloadAllOwnerVideosRequest = (dir: string, params: TDownloadAllOwnerVideosParams, filterCallback?: (clip: TClip) => boolean) => Promise<TDownloadAllOwnerVideosResponse>;
type TDownloadAllOwnerVideosParams = TGetOwnerVideosParams;
type TDownloadAllOwnerVideosResponse = TDownloadResponse;

type TDownloadAllSearchRequest = (dir: string, params: TDownloadAllSearchParams, filterCallback?: (clip: TClip) => boolean) => Promise<TDownloadAllSearchResponse>;
type TDownloadAllSearchParams = TGetTopVideosParams;
type TDownloadAllSearchResponse = TDownloadResponse;

type TDownloadAllTopVideosRequest = (dir: string, params: TDownloadAllTopVideosParams, filterCallback?: (clip: TClip) => boolean) => Promise<TDownloadAllTopVideosResponse>;
type TDownloadAllTopVideosParams = TGetTopVideosParams;
type TDownloadAllTopVideosResponse = TDownloadResponse;

type TGetCollectionRequest = (params: TGetCollectionParams) => Promise<TGetCollectionResponse>;
type TGetCollectionParams = any;
type TGetCollectionResponse = any;

type TGetOwnerVideosRequest = (params: TGetOwnerVideosParams) => Promise<TGetOwnerVideosResponse>;
type TGetOwnerVideosParams = {
    owner_id: number;
    count?: number;
};
type TGetOwnerVideosResponse = {
    count: number;
    items: Array<TClip>;
    next_from: string;
    groups: Array<TGroup>;
};

type TGetTopVideosRequest = (params: TGetTopVideosParams) => Promise<TGetTopVideosResponse>;
type TGetTopVideosParams = any;
type TGetTopVideosResponse = {
    count: number;
    items: Array<TClip>;
    next_from: string;
    groups: Array<TGroup>;
};

type TSearchRequest = (params: TSearchParams) => Promise<TSearchResponse>;
type TSearchParams = any;
type TSearchResponse = {
    catalog: {
        default_section: string;
        sections: any;
    };
    profiles: any;
    groups: any;
    videos: Array<TClip>;
    albums: any;
};

type TClip = {
    files: TFiles;
    volume_multiplier: number;
    timeline_thumbs: TTimelinethumbs;
    ads: TAds;
    short_video_info: TShortvideoinfo;
    stats_pixels: TStatspixel[];
    can_comment: number;
    can_like: number;
    can_repost: number;
    can_subscribe: number;
    can_add_to_faves: number;
    can_add: number;
    can_play_in_background: number;
    can_download: number;
    comments: number;
    date: number;
    description: string;
    duration: number;
    image: TImage[];
    first_frame: TFirstframe[];
    width: number;
    height: number;
    id: number;
    owner_id: number;
    ov_id: string;
    title: string;
    is_favorite: boolean;
    player: string;
    added: number;
    track_code: string;
    repeat: number;
    type: string;
    views: number;
    likes: TLikes;
    reposts: TReposts;
    can_dislike: number;
};
type TGroup = {
    id: number;
    name: string;
    screen_name: string;
    is_closed: number;
    type: string;
    is_admin: number;
    is_member: number;
    is_advertiser: number;
    photo_50: string;
    photo_100: string;
    photo_200: string;
};
type TReposts = {
    count: number;
    user_reposted: number;
};
type TLikes = {
    count: number;
    user_likes: number;
};
type TFirstframe = {
    url: string;
    width: number;
    height: number;
};
type TImage = {
    url: string;
    width: number;
    height: number;
    with_padding?: number;
};
type TStatspixel = {
    event: string;
    url: string;
    params?: TParams2;
};
type TParams2 = {
    interval: number;
};
type TShortvideoinfo = {
    audio: TAudio;
};
type TAudio = {
    artist: string;
    id: number;
    owner_id: number;
    title: string;
    duration: number;
    access_key: string;
    ads: TAds2;
    is_explicit: boolean;
    is_focus_track: boolean;
    is_licensed: boolean;
    track_code: string;
    url: string;
    date: number;
    genre_id: number;
    album: TAlbum;
    performer: string;
    original_sound_video_id: string;
    short_videos_allowed: boolean;
    stories_allowed: boolean;
    stories_cover_allowed: boolean;
};
type TAlbum = {
    id: number;
    title: string;
    owner_id: number;
    access_key: string;
    thumb: TThumb;
};
type TThumb = {
    width: number;
    height: number;
    photo_34: string;
    photo_68: string;
    photo_135: string;
    photo_270: string;
    photo_300: string;
    photo_600: string;
    photo_1200: string;
};
type TAds2 = {
    content_id: string;
    duration: string;
    account_age_type: string;
    puid1: string;
    puid22: string;
};
type TAds = {
    slot_id: number;
    timeout: number;
    can_play: number;
    params: TParams;
    sections: string[];
    midroll_percents: number[];
    autoplay_preroll: number;
};
type TParams = {
    vk_id: number;
    duration: number;
    video_id: string;
    pl: number;
    content_id: string;
    lang: number;
    puid1: string;
    puid2: number;
    puid3: number;
    puid4: number;
    puid5: number;
    puid6: number;
    puid7: number;
    puid9: number;
    puid10: number;
    puid12: number;
    puid13: number;
    puid14: number;
    puid15: number;
    puid18: number;
    puid21: number;
    sign: string;
    groupId: number;
    vk_catid: number;
    user_small_video_viewed_count: number;
};
type TTimelinethumbs = {
    count_per_image: number;
    count_per_row: number;
    count_total: number;
    frame_height: number;
    frame_width: number;
    links: string[];
    is_uv: boolean;
    frequency: number;
};
type TFiles = {
    mp4_144: string;
    mp4_240: string;
    mp4_360: string;
    mp4_480: string;
    mp4_720: string;
    mp4_1080: string;
    hls: string;
    dash_uni: string;
    dash_sep: string;
    dash_webm: string;
    failover_host: string;
};

declare class ShortVideo {
    #private;
    constructor(token: string, agent?: string);
    create: TCreateRequest;
    getCollection: TGetCollectionRequest;
    getOwnerVideos: TGetOwnerVideosRequest;
    getTopVideos: TGetTopVideosRequest;
    search: TSearchRequest;
    download: TDownloadRequest;
    downloadAllOwnerVideos: TDownloadAllOwnerVideosRequest;
    downloadAllTopVideos: TDownloadAllTopVideosRequest;
    downloadAllSearch: TDownloadAllSearchRequest;
}

export { ShortVideo };
