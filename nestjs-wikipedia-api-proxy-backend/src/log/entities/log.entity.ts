import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GenericEntity } from "./genericEntity";
import { EnumLevelLog, TypeLevelLog } from "./log.interface";

@Entity()
export class LogEntity extends GenericEntity {
    @Column()
    level: TypeLevelLog;

    @Column()
    message: string;
}
