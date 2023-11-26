import { AppDataSource } from '../../config/database/database.config';
import { BatteryEntity } from '../../model/battery/entity/battery.entity';
import { BatteryType } from '../../model/battery/type/battery.type';
export class BatteryService {
  constructor() {}

  public static getBattery = async (): Promise<BatteryType[]> => {
    return new Promise<BatteryType[]>(async (resolve, reject) => {
      try {
        const results = await AppDataSource.getRepository(BatteryEntity).find();
        resolve(results);
      } catch (error) {
        reject({ message: error });
      }
    });
  };
  public static postBattery = async (data: BatteryType): Promise<BatteryType> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { dealerName, batteryType, batterySerialNumber, status, createdDateTime, updatedDateTime } = data;
        const postRepository = AppDataSource.getRepository(BatteryEntity);
        const newPost = postRepository.create({
          dealerName,
          batteryType,
          batterySerialNumber,
          status,
          createdDateTime,
          updatedDateTime,
        });
        const results = await postRepository.save(newPost);
        resolve(results);
      } catch (error) {
        reject({ message: error });
      }
    });
  };
  public static putBattery = async (uid: number, body: BatteryType) => {
    return new Promise<unknown>(async (resolve, reject) => {
      try {
        const { dealerName, batteryType, batterySerialNumber, status, createdDateTime, updatedDateTime } = body;
        const uidFound = await AppDataSource.getRepository(BatteryEntity).findOneBy({ uid: uid });
        if (!uidFound) {
          resolve({ message: 'No record found' });
        }

        const data = {
          dealerName,
          batteryType,
          batterySerialNumber,
          status,
          createdDateTime,
          updatedDateTime,
        };
        const results = await AppDataSource.getRepository(BatteryEntity).update(uid, data);
        resolve({
          message: 'Updated successfully',
          affectedRows: results.affected,
        });
      } catch (error) {
        reject({ message: error });
      }
    });
  };
  public static deleteBattery = async (uid: number) => {
    return new Promise<unknown>(async (resolve, reject) => {
      try {
        const results = await AppDataSource.getRepository(BatteryEntity).delete(uid);
        resolve({
          message: 'Deleted successfully',
          affectedRows: results.affected,
        });
      } catch (error) {
        reject({ message: error });
      }
    });
  };
}
