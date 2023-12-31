import express from 'express';
import IndexRouter from './routes/index.routes';
import BatteryRouter from './routes/battery/battery.routes';
import { AppDataSource } from './config/database/database.config';
import bodyParser from 'body-parser';

export class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.datababase();
  }
  private datababase = async () => {
    await AppDataSource.initialize()
      .then(async () => {
        console.log(AppDataSource.options.database + ' database connected');
      })
      .catch((error) => console.log(error));
  };
  private middlewares = async () => {
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  };
  private routes = async () => {
    this.express.use('/', IndexRouter, BatteryRouter);
  };
  public start(port: number): void {
    this.express.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}
