export type TCreateRequest = (url: string, params: TCreateParams) => Promise<TCreateResponse>;

export type TCreateParams = {
  analytics?: string;           // Неизвестно.
  audio_id?: string;            // Аудиозапись, неизвестно в каком формате.
  clickable_stickers?: string;  // Кликабельные стикеры, неизвестно в каком формате.
  description?: string;         // Описание клипа.
  group_id?: number;            // Индификатор группы.
  latitude?: string;            // Широта.
  longitude?: string;           // Долгота.
  mask_ids?: string;            // Индификаторы масок.
  title?: string;               // Название клипа (или видео).
  wallpost?: number;            // Опубликовать клип на стене или нет.
};

export type TCreateResponse = boolean;
