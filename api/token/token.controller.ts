import { Request, Response } from 'express';
import { generateToken } from "../../utils/jwt.utils";

/// For dev and demo purposes only 
export const getToken = (req: Request, res: Response): void => {
    const token = generateToken();
    res.json({token});
}