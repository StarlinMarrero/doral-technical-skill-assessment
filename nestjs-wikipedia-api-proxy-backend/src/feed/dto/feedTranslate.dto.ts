// @Param("language") language: string, @Param("year") year: string, @Param("month") month: string, @Param("day") day: string

import { IsEnum, IsString } from "class-validator";
import { EnumLanguage, TypeLanguage } from "src/axios-provider/wikipedia/interfaces/wikipedia.interfaces";

export class FeedTranslateDto {
    @IsEnum(EnumLanguage, {
        message: `language must be a valid ISO 639-1 language code`,
    })
    language: TypeLanguage;
    @IsString()
    year: string;
    @IsString()
    month: string;
    @IsString()
    day: string;
}
