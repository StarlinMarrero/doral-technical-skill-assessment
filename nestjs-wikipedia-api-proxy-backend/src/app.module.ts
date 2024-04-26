import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AxiosProvidersModule } from "./axios-provider/axios-provider.module";
import configuration from "./config/configuration";
import { FeedModule } from "./feed/feed.module";
import { LogEntity } from "./log/entities/log.entity";
import { LogModule } from "./log/log.module";
import { TranslationModule } from "./translation/translation.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [configuration], envFilePath: [".env"] }),
        FeedModule,
        AxiosProvidersModule,
        TranslationModule,
        LogModule,
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "db/db.sqlite",
            entities: [LogEntity],
            synchronize: true,
        }),
    ],
})
export class AppModule {}
