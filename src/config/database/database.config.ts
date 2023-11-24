import { BatteryEntity } from '../../model/battery/entity/battery.entity';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  port: 1433, // or your MSSQL port
  username: 'sa',
  password: 'Venkat2023',
  database: 'BATTERY',
  synchronize: true,
  logging: false,
  entities: [BatteryEntity],
  options: {
    encrypt: true,
    trustServerCertificate: true,
    // This option allows self-signed certificates
  },
  pool: {
    max: 10, // Adjust based on your needs
    min: 1,
  },
});
// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "Venkat@2023",
//     database: "BATTERY",
//     entities: [BatteryEntity],
//     synchronize: true,
//     logging: false,

// })
