import { Request, Response } from 'express';
import { BatteryService } from '../../services/battery/battery.service';

export class BatteryController {
  constructor() {}

  public static getBattery = async (req: Request, res: Response) => {
    try {
      const response = await BatteryService.getBattery();
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  };
  public static postBattery = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const response = await BatteryService.postBattery(data);
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  };
  public static putBattery = async (req: Request, res: Response) => {
    try {
      const uid = parseInt(req.params.id, 10);
      const body = req.body;
      const response = await BatteryService.putBattery(uid, body);
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  };
  public static deleteBattery = async (req: Request, res: Response) => {
    try {
      const uid = parseInt(req.params.id, 10);
      const response = await BatteryService.deleteBattery(uid);
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  };
}
