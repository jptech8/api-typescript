import express from "express";
import IndexRouter from "./routes/index.routes";
import BatteryRouter from "./routes/battery/battery.routes";
import { AppDataSource } from "./config/database/database.config";

export class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.datababase();
  }
  private  datababase =async()=>{
    await AppDataSource.initialize()
      .then(async () => {
       
        console.log(AppDataSource.options.database + " database connected")})
      .catch((error) => console.log(error));
  }
  private middlewares=async()=>{
    this.express.use(express.json());
  }
  private routes=async()=>{ 
    this.express.use("/", IndexRouter, BatteryRouter);
  }
}

export default new App().express;