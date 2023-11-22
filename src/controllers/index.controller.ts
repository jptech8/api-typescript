import express, { Request, Response } from 'express';
import IndexService from '../services/index.service'

 const getPing = async(req:Request,res:Response)=>{
try{
   await IndexService.getPingService(req,res).then((result)=>{
    res.send(result)
  }).catch(()=>{
    res.sendStatus(404)
  })
 
}catch{
  res.sendStatus(500)
}}

export default {
  getPing
}