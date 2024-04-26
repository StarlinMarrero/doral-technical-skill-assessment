import { Injectable } from "@nestjs/common";
import { ITranslationRequest } from "src/axios-provider/translation/interfaces";
import { TranslationProvider } from "src/axios-provider/translation/translation.provider";

@Injectable()
export class TranslationService {
    constructor(private readonly translationProvider: TranslationProvider) {}

    async getTranslation(data: ITranslationRequest) {
        return await this.translationProvider.getTranslation(data);
    }
}
