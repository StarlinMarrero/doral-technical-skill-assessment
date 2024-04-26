import { Module } from "@nestjs/common";
import { FeedController } from "./feed.controller";
import { WikipediaProvider } from "src/axios-provider/wikipedia/wikipedia.provider";
import { FeedService } from "./feed.service";
import { LogService } from "src/log/log.service";
import { LogEntity } from "src/log/entities/log.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers: [FeedController],
    providers: [WikipediaProvider, FeedService, LogService],
    imports: [TypeOrmModule.forFeature([LogEntity])],
})
export class FeedModule {}
