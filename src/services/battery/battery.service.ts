
const getBattery = async (req: any, res: any) => {
    return new Promise<object>((resolve, reject) => {
      try {
        let result: String = "about page from service";
        resolve({ result });
      } catch {
        reject({ mesage: "Server Error" });
      }
    });
  };
  
  export default {
    getBattery,
  };
  