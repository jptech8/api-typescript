import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseSchema.js1700836068231 implements MigrationInterface {
    name = 'DatabaseSchema.js1700836068231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "battery_entity" DROP COLUMN "createdDateTime"`);
        await queryRunner.query(`ALTER TABLE "battery_entity" ADD "createdDateTime" datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE "battery_entity" DROP COLUMN "updatedDateTime"`);
        await queryRunner.query(`ALTER TABLE "battery_entity" ADD "updatedDateTime" datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "battery_entity" DROP COLUMN "updatedDateTime"`);
        await queryRunner.query(`ALTER TABLE "battery_entity" ADD "updatedDateTime" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "battery_entity" DROP COLUMN "createdDateTime"`);
        await queryRunner.query(`ALTER TABLE "battery_entity" ADD "createdDateTime" nvarchar(255) NOT NULL`);
    }

}
