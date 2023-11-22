import {Request, Response } from 'express';
import {BatteryService} from '../../services/battery/battery.service'

export class BatteryController{

  constructor(){

  }
public static getBattery = async(req:Request,res:Response)=>{
try{
  await BatteryService.getBattery(req).then((result)=>{
 res.send(result)
   })
}catch{
  res.sendStatus(500)
}}
}