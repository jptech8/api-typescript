import express, { Request, Response } from 'express';
import IndexService from '../services/index.service';

export const getAbout = async(req:Request,res:Response)=>{
try{
   await IndexService.getAboutService(req,res).then((result)=>{
    res.send(result)
  }).catch(()=>{
    res.sendStatus(501)
  })
 
}catch{
  res.sendStatus(500)
}}