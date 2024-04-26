import { Module } from "@nestjs/common";
import { LogService } from "./log.service";
import { LogEntity } from "./entities/log.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenericEntity } from "./entities/genericEntity";

@Module({
    providers: [LogService],
    exports: [LogService],
    imports: [TypeOrmModule.forFeature([LogEntity])],
})
export class LogModule {}
