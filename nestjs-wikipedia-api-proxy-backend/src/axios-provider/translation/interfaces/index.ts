export interface ITranslationResponse {
    detectedLanguage: DetectedLanguage;
    translatedText: string;
}

export interface IErrorResponseAxios {
    response: Response;
    status: number;
    message: string;
    name: string;
}

export interface Response {
    error: string;
}

export interface DetectedLanguage {
    confidence: number;
    language: string;
}

export interface ITranslationRequest {
    q: string;
    source: TypeSource;
    target: string;
    format: TypeFormat;
}

export enum EnumTypeFormat {
    TEXT = "text",
    HTML = "html",
}

export enum EnumTypeSource {
    AUTO = "auto",
}

export type TypeFormat = `${EnumTypeFormat}`;
export type TypeSource = `${EnumTypeSource}`;
