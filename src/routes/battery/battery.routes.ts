import express from "express";
import { BatteryController } from "../../controllers/battery/battery.controller";

const router = express.Router();

router.get("/battery", BatteryController.getBattery);
router.post("/battery", BatteryController.postBattery);
router.put("/battery/:id", BatteryController.putBattery);
router.delete("/battery/:id", BatteryController.deleteBattery);

export default router;
