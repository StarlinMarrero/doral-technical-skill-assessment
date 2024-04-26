import { Module } from "@nestjs/common";
import { TranslationController } from "./translation.controller";
import { TranslationService } from "./translation.service";
import { TranslationProvider } from "src/axios-provider/translation/translation.provider";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LogEntity } from "src/log/entities/log.entity";
import { LogService } from "src/log/log.service";

@Module({
    controllers: [TranslationController],
    providers: [TranslationService, TranslationProvider, LogService],
    imports: [TypeOrmModule.forFeature([LogEntity])],
})
export class TranslationModule {}
