import express, { Request, Response } from 'express';
import IndexRouter from './routes/index.routes';
import BatteryRouter from './routes/battery/battery.routes';
const app = express();

app.use('/',IndexRouter, BatteryRouter);


export default app
