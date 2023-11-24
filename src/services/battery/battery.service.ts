export class BatteryService {
  constructor(){
    
  }
public static getBattery = async (req: Object) => {
  return new Promise<Object>((resolve, reject) => {
    try {
      const result: Object = {
        key1: "value1",
        key2: 42,
      };
      resolve(result);
    } catch {
      reject({ message: "Server Error" });
    }
  });
}
}