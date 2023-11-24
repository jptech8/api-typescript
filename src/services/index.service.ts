export class PingService {
  constructor() {}
  public static getPingService = async () => {
    return new Promise<unknown>((resolve, reject) => {
      try {
        const result: unknown = {
          key1: 'value1',
          key2: 42,
        };
        resolve(result);
      } catch {
        reject({ message: 'Server Error' });
      }
    });
  };
}
