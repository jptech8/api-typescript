import express from 'express';
import {BatteryController} from '../../controllers/battery/battery.controller';

const router = express.Router()

router.get('/battery',BatteryController.getBattery)


export default router