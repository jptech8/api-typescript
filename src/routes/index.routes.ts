import express from 'express';
import { PingController } from '../controllers/index.controller';

const router = express.Router();

router.get('/ping', PingController.getPing);

export default router;
