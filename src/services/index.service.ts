export class PingService {
  constructor(){
    
  }
  public static getPingService=async(req:object) => {
    return new Promise((resolve, reject) => {
      try {
        let result: String = "ping";
        resolve({ result });
      } catch {
        reject({ mesage: "Server Error" });
      }
    });
  }
}
  