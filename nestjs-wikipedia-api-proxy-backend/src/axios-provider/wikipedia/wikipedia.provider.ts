import { AxiosProvider } from "../axios.provider";
import { wikipediaConfig } from "../../config/configuration";
import { Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { IWikipediaFeedResponse, TypeLanguage } from "./interfaces/wikipedia.interfaces";

@Injectable()
export class WikipediaProvider extends AxiosProvider {
    constructor() {
        super(`${wikipediaConfig.baseUrl}`);
    }

    async getFeeds(lang: TypeLanguage, date: string): Promise<{ data?: IWikipediaFeedResponse; error?: AxiosError }> {
        const dateObj = new Date(date);

        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
        const day = dateObj.getDate().toString().padStart(2, "0");
        return await this.get(`/feed/v1/wikipedia/${lang}/featured/${year}/${month}/${day}`);
    }
}
