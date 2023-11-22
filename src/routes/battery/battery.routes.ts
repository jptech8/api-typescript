import express, { Request, Response, NextFunction } from 'express';
import BatteryController from '../../controllers/battery/battery.controller';
const app = express();
const router = express.Router()


router.get('/battery',BatteryController.getBattery)

export default router