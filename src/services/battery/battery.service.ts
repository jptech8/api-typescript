import { AppDataSource } from '../../config/database/database.config';
import { BatteryEntity } from '../../model/battery/entity/battery.entity';
import { BatteryType } from '../../model/battery/type/battery.type';
export class BatteryService {
  constructor() {}

  public static getBattery = async (): Promise<BatteryType[]> => {
    try {
      const results = await AppDataSource.getRepository(BatteryEntity).find();
      return results;
    } catch (error) {
      throw { message: error };
    }
  };
  public static postBattery = async (data: BatteryType): Promise<BatteryType> => {
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
      return results;
    } catch (error) {
      throw { message: error };
    }
  };
  public static putBattery = async (uid: number, body: BatteryType) => {
    try {
      const { dealerName, batteryType, batterySerialNumber, status, createdDateTime, updatedDateTime } = body;
      const uidFound = await AppDataSource.getRepository(BatteryEntity).findOneBy({ uid: uid });
      if (!uidFound) {
        return { message: 'No record found' };
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
      return {
        message: 'Updated successfully',
        affectedRows: results.affected,
      };
    } catch (error) {
      throw { message: error };
    }
  };
  public static deleteBattery = async (uid: number) => {
    try {
      const results = await AppDataSource.getRepository(BatteryEntity).delete(uid);
      return {
        message: 'Deleted successfully',
        affectedRows: results.affected,
      };
    } catch (error) {
      throw { message: error };
    }
  };
}
