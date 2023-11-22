import { BatteryEntity } from "../../model/battery/battery.entity";
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Venkat@2023",
    database: "BATTERY",
    entities: [BatteryEntity],
    synchronize: true,
    logging: false,

})  