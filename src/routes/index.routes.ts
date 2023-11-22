import express, { Request, Response, NextFunction } from 'express';
import IndexController from '../controllers/index.controller';
const app = express();
const router = express.Router()

router.get('/ping',IndexController.getPing)
export default router