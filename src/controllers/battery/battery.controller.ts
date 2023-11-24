import {Request, Response } from 'express';
import {BatteryService} from '../../services/battery/battery.service'

export class BatteryController{

  constructor(){

  }

public static getBattery = async (req: Request, res: Response) => {
  try {
    const result = await BatteryService.getBattery(req);
    res.send(result);
  } catch (error) {
    res.sendStatus(500);
  }
}
}
