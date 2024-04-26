import { Injectable } from "@nestjs/common";
import { TypeLanguage } from "src/axios-provider/wikipedia/interfaces/wikipedia.interfaces";
import { WikipediaProvider } from "src/axios-provider/wikipedia/wikipedia.provider";

@Injectable()
export class FeedService {
    constructor(private readonly wikipediaAxiosProvider: WikipediaProvider) {}

    async getFeeds(lang: TypeLanguage, date: string = new Date().toISOString()) {
        return await this.wikipediaAxiosProvider.getFeeds(lang, date);
    }
}
