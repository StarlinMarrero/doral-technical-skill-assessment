import { Injectable } from "@nestjs/common";
import { AxiosProvider } from "../axios.provider";
import { translationConfig } from "src/config/configuration";
import { IErrorResponseAxios, ITranslationRequest, ITranslationResponse } from "./interfaces";
import { AxiosError } from "axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TranslationProvider extends AxiosProvider {
    constructor(private configService: ConfigService) {
        super(`${translationConfig.baseUrl}`);
    }

    async getTranslation(data: ITranslationRequest): Promise<{ data?: ITranslationResponse; error?: AxiosError }> {
        return await this.post<ITranslationResponse>(`/translate`, {
            source: data?.source || "auto",
            target: data.target,
            q: data.q,
            format: data?.format || "text",
            api_key: "",
        });
    }
}
