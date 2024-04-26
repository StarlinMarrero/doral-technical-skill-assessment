import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LogEntity } from "./entities/log.entity";
import { Repository } from "typeorm";
import { TypeLevelLog } from "./entities/log.interface";

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(LogEntity)
        private readonly logRepository: Repository<LogEntity>,
    ) {}

    async create(level: TypeLevelLog, message: string) {
        try {
            const log = await this.logRepository.save({
                level,
                message,
            });

            return {
                data: log,
            };
        } catch (error) {
            return {
                error: {
                    message: "Failed to create log",
                },
            };
        }
    }
}
