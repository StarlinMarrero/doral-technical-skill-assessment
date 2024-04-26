import { Body, Controller, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { LogService } from "src/log/log.service";
import { TranslationDto } from "./dto/translation.dto";
import { TranslationService } from "./translation.service";
import { ApiBody } from "@nestjs/swagger";

@Controller("/translation")
export class TranslationController {
    constructor(
        private readonly translationService: TranslationService,
        private readonly logService: LogService,
    ) {}

    @Post()
    @ApiBody({ type: TranslationDto })
    @UsePipes(new ValidationPipe())
    async translation(@Body() data: TranslationDto) {
        const { data: translationData, error } = await this.translationService.getTranslation(data);
        if (error) {
            this.logService.create("error", JSON.stringify(error));
            return new HttpException(error.response.data, error.response.status);
        }
        return translationData;
    }
}
