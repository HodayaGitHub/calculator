import express, { Router } from 'express';
import { calculate } from './calculate.controller';
import { verifyToken } from '../../middlewares/auth.middleware';

export const calculateRoutes: Router = express.Router();

calculateRoutes.post('/', verifyToken, calculate);
