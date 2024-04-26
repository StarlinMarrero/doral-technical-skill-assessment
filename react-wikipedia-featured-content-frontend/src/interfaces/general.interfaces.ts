export interface IArticles {
    views: number;
    rank: number;
    view_history: ViewHistory[];
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

export interface ViewHistory {
    date: string;
    views: number;
}
