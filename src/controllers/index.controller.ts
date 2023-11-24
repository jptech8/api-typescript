import { Request, Response } from "express";
import { PingService } from "../services/index.service";

export class PingController {
  constructor() {}
  public static getPing = async (req: Request, res: Response) => {
    try {
      const result = await PingService.getPingService(req);
      res.send(result);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}
