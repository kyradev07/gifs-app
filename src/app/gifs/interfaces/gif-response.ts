export interface GifResponse {
  data: Gif[];
  meta: Meta;
  pagination: Pagination;
}

export interface Gif {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: Username;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  source_tld: SourceTLD;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: TrendingDatetime;
  images: Images;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original: FixedHeight;
  downsized: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: DownsizedSmall;
  downsized_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_still: The480_WStill;
  looping: Looping;
  original_still: The480_WStill;
  original_mp4: DownsizedSmall;
  preview: DownsizedSmall;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
  "480w_still": The480_WStill;
  hd?: DownsizedSmall;
}

export interface The480_WStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedSmall {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}

export enum Rating {
  G = "g",
  PG = "pg",
}

export enum SourceTLD {
  Empty = "",
  WWWYoutubeCOM = "www.youtube.com",
}

export enum TrendingDatetime {
  The00000000000000 = "0000-00-00 00:00:00",
}

export enum Type {
  GIF = "gif",
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: Username;
  display_name: DisplayName;
  description: Description;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export enum Description {
  TheOfficialAgeOfEmpiresCommunityGiphyAccount = "The official Age of Empires Community Giphy Account!",
  TheOfficialXboxGIFSPageNowWith100MoreMeta = "The official Xbox GIFs page—now with 100% more meta!",
}

export enum DisplayName {
  AgeOfEmpiresCommunity = "Age Of Empires Community",
  Xbox = "Xbox",
}

export enum Username {
  AoECommunity = "AoE_Community",
  Xbox = "xbox",
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}