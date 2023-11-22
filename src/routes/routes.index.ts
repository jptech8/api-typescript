import express, { Request, Response, NextFunction } from 'express';
import { getAbout } from '../controller/index.controller';
const app = express();
const router = express.Router()


 router.get('/about',getAbout)
export default router