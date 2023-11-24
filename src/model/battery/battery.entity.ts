import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class BatteryEntity {
    @PrimaryGeneratedColumn()
    uid: number;
    @Column()
    dealerName: string;
    @Column()
    batteryType: string;
    @Column()
    batterySerialNumber: number;
    @Column()
    status: string;
    @Column()
    createdDateTime: string;
    @Column()
    updatedDateTime: string;
}