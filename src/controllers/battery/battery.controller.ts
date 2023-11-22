import express, { Request, Response } from 'express';
import BatteryService from '../../services/battery/battery.service'

 const getBattery = async(req:Request,res:Response)=>{
try{
   await BatteryService.getBattery(req,res).then((result)=>{
    res.send(result)
  }).catch(()=>{
    res.sendStatus(501)
  })
 
}catch{
  res.sendStatus(500)
}}

export default {
    getBattery
}