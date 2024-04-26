import { IsDate, IsEnum, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
import { EnumLanguage, TypeLanguage } from "src/axios-provider/wikipedia/interfaces/wikipedia.interfaces";

export class GetFeedDto {
    @IsOptional()
    @IsEnum(EnumLanguage, {
        message: `language must be a valid ISO 639-1 language code`,
    })
    @MaxLength(2)
    lang: TypeLanguage = "en";

    @IsOptional()
    @IsString()
    date: string = new Date().toISOString();
}
