import { AppDataSource } from "../../config/database/database.config";
import { BatteryEntity } from '../../model/battery/battery.entity'




interface BatteryInterface{
  dealerName : string;
  batteryType :string;
  batterySerialNumber:number;
  status:string;
  createdDateTime:string;
  updatedDateTime:string;
}

export class BatteryService {
  constructor(){
    
  }



public static getBattery = async () => {
  return new Promise<Object>(async(resolve, reject) => {
    try {
      const results = await AppDataSource.getRepository(BatteryEntity).find()
      resolve(results);
    } catch {
      reject({ message: "Something Broken in Service" });
    }
  });
}
public static postBattery = async(data: BatteryInterface) => {
  return new Promise<Object>(async(resolve, reject) => {
    try {
      let{dealerName ,batteryType ,batterySerialNumber,status,createdDateTime,updatedDateTime} =data;
      const postRepository =  AppDataSource.getRepository(BatteryEntity);
      const newPost = postRepository.create({dealerName ,batteryType ,batterySerialNumber,status,createdDateTime,updatedDateTime});
      let results = await postRepository.save(newPost); 
      resolve(results);
    } catch (error:any)  {
      reject({ "message": error.message});
    }
  });
}
public static putBattery = async(uid:number,body:BatteryInterface) => {
  return new Promise<Object>(async(resolve, reject) => {
    try {
   
      let{dealerName ,batteryType ,batterySerialNumber,status,createdDateTime,updatedDateTime} =body;
      const uidFound =  await AppDataSource.getRepository(BatteryEntity).findOneBy({uid:uid});
      if(!uidFound){
      resolve({message:"No record found"})
      }

      let data = {dealerName ,batteryType ,batterySerialNumber,status,createdDateTime,updatedDateTime}
      const results = await AppDataSource.getRepository(BatteryEntity).update(uid,data)
      resolve( {message: "Updated successfully","affectedRows":results.affected});
     
    } catch (error:any)  {
      reject({ "message": error.message});
    }
  });
}
public static deleteBattery = async (uid:number) => {
  return new Promise<Object>(async(resolve, reject) => {
    try {
      const results = await AppDataSource.getRepository(BatteryEntity).delete(uid)
      resolve( {message: "Deleted successfully","affectedRows":results.affected});
    } catch (error:any)  {
      reject({ "message": error.message});
    }
  });
}



}   