import {Request, Response } from 'express';
import {PingService} from '../services/index.service'

export class PingController{

  constructor(){

  }
public static getPing = async(req:Request,res:Response)=>{
try{
  await PingService.getPingService(req).then((result)=>{
 res.send(result)
   })
}catch{
  res.sendStatus(500)
}}
}