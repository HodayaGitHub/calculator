import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AUTH_HEADER } from '../common/consts';

dotenv.config();

const SECRET_KEY: string | undefined = process.env.JWT_SECRET;

export function verifyToken(req: Request, res: Response, next: NextFunction): void {
  const authToken: string | undefined = req.headers[AUTH_HEADER] as string | undefined;

  if (!authToken) {
    res.status(401).json({ message: 'No authorization header provided' });
    return;
  }

  // Validate Bearer header structure
  const tokenParts: string[] = authToken.split(' ');
  if (tokenParts[0] !== 'Bearer' || tokenParts.length !== 2) {
    res.status(400).json({ message: 'Invalid token format. Expected format: Bearer <token>' });
    return;
  }

  // Make sure secret key is defined in the env params
  if (!SECRET_KEY) {
    res.status(500).json({ message: 'JWT secret key is not defined' });
    return;
  }

  const jwtToken: string = tokenParts[1];

  // Validate the token data has not changed
  jwt.verify(jwtToken, SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Failed to authenticate token' });
      return;
    }

    if (decoded) {
      next();
    } else {
      res.status(403).json({ message: 'Failed to authenticate token' });
    }
  });
}