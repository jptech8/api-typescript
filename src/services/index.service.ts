
const getPingService = async (req: any, res: any) => {
    return new Promise<object>((resolve, reject) => {
      try {
        let result: String = "ping";
        resolve({ result });
      } catch {
        reject({ mesage: "Server Error" });
      }
    });
  };
  
  export default {
    getPingService,
  };
  