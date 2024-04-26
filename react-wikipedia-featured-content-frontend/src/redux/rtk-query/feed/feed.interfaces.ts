export interface IWikipediaFeedResponse {
    tfa: Tfa;
    mostread: Mostread;
    image: IWikipediaFeedResponseImage;
    news: INewItem[];
    onthisday: Onthisday[];
}

export interface IWikipediaFeedRequest {
    lang: TypeLanguage;
    date: string;
}

export interface INewItem {
    links: Link[];
    story: string;
}

export interface Link {
    type: string;
    title: string;
    displaytitle: string;
    namespace: Namespace;
    wikibase_item: string;
    titles: Titles;
    pageid: number;
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: Date;
    description: string;
    description_source: string;
    content_urls: ContentUrls;
    extract: string;
    extract_html: string;
    normalizedtitle: string;
}

export interface ContentUrls {
    desktop: Desktop;
    mobile: Desktop;
}

export interface Desktop {
    page: string;
    revisions: string;
    edit: string;
    talk: string;
}

export interface Namespace {
    id: number;
    text: string;
}

export interface Titles {
    canonical: string;
    normalized: string;
    display: string;
}

export interface IWikipediaFeedResponseImage {
    title: string;
    thumbnail: ThumbnailClass;
    image: ThumbnailClass;
    file_page: string;
    artist: Artist;
    credit: Artist;
    license: License;
    description: Description;
    wb_entity_id: string;
    structured: Structured;
}

export interface Artist {
    html: string;
    text: string;
}

export interface Description {
    html: string;
    text: string;
    lang: EnumLanguage;
}

export enum EnumLanguage {
    Bengali = "bn",
    German = "de",
    Greek = "el",
    English = "en",
    Hebrew = "he",
    Hungarian = "hu",
    Japanese = "ja",
    Latin = "la",
    Sindhi = "sd",
    Swedish = "sv",
    Urdu = "ur",
    Chinese = "zh",
    Bosnian = "bs",
    Danish = "da",
    Spanish = "es",
    Finnish = "fi",
    French = "fr",
    Korean = "ko",
    NorwegianBokmal = "no",
    Polish = "pl",
    Portuguese = "pt",
    Russian = "ru",
    Scots = "sco",
    Vietnamese = "vi",
    Arabic = "ar",
}

export type TypeLanguage = `${EnumLanguage}`;

export interface ThumbnailClass {
    source: string;
    width: number;
    height: number;
}

export interface License {
    type: string;
    code: string;
    url: string;
}

export interface Structured {
    captions: Captions;
}

export interface Captions {
    en: string;
}

export interface Mostread {
    date: string;
    articles: Tfa[];
}

export interface Tfa {
    views?: number;
    rank?: number;
    view_history?: ViewHistory[];
    type: Type;
    title: string;
    displaytitle: string;
    namespace: Namespace;
    wikibase_item: string;
    titles: Titles;
    pageid: number;
    thumbnail?: ThumbnailClass;
    originalimage?: ThumbnailClass;
    lang: EnumLanguage;
    dir: Dir;
    revision: string;
    tid: string;
    timestamp: Date;
    description?: string;
    description_source?: DescriptionSource;
    content_urls: ContentUrls;
    extract: string;
    extract_html: string;
    normalizedtitle: string;
    coordinates?: Coordinates;
}

export interface ContentUrls {
    desktop: Desktop;
    mobile: Desktop;
}

export interface Desktop {
    page: string;
    revisions: string;
    edit: string;
    talk: string;
}

export interface Coordinates {
    lat: number;
    lon: number;
}

export enum DescriptionSource {
    Local = "local",
}

export enum Dir {
    LTR = "ltr",
}

export interface Namespace {
    id: number;
    text: string;
}

export interface Titles {
    canonical: string;
    normalized: string;
    display: string;
}

export enum Type {
    Standard = "standard",
}

export interface ViewHistory {
    date: string;
    views: number;
}

export interface Onthisday {
    text: string;
    pages: Tfa[];
    year: number;
}
