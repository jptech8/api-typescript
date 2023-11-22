export class BatteryService {
  constructor(){
    
  }
  public static getBattery=async(req:object) => {
    return new Promise((resolve, reject) => {
      try {
        let result: String = "battery";
        resolve({ result });
      } catch {
        reject({ mesage: "Server Error" });
      }
    });
  }
}
  
  