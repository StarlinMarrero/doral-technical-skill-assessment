import { instanceToPlain } from "class-transformer";
import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class GenericEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: "datetime" })
    timestamp: Date;

    toJSON() {
        return instanceToPlain(this);
    }
}
