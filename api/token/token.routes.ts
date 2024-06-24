import express, { Router } from 'express';
import { getToken } from './token.controller';

export const tokenRoutes: Router = express.Router();

tokenRoutes.get('/', getToken);
