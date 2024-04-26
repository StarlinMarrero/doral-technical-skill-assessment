import { Module } from "@nestjs/common";
import { WikipediaProvider } from "./wikipedia/wikipedia.provider";
import { TranslationProvider } from './translation/translation.provider';

@Module({
    imports: [],
    providers: [WikipediaProvider, TranslationProvider],
})
export class AxiosProvidersModule {}
