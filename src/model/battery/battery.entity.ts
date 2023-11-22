import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class BatteryEntity {
    @PrimaryGeneratedColumn()
    UID: number;
    @Column()
    DEALER_NAME: string;
    @Column()
    BATTERY_TYPE: string;
    @Column()
    BATTERY_SERIAL_NAME: number;
    @Column()
    STATUS: string;
    @Column()
    CREATED_DT: string;
    @Column()
    UPDATED_DT: string;
}