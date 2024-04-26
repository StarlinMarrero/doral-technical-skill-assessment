import { Expose } from "class-transformer";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { EnumTypeFormat, EnumTypeSource, ITranslationRequest, TypeFormat, TypeSource } from "src/axios-provider/translation/interfaces";

export class TranslationDto implements ITranslationRequest {
    @IsOptional()
    @IsEnum(EnumTypeFormat)
    @Expose()
    format: TypeFormat;

    @IsString()
    @Expose()
    q: string;

    @IsOptional()
    @IsEnum(EnumTypeSource)
    source: TypeSource;

    @IsString()
    @Expose()
    target: string;
}
