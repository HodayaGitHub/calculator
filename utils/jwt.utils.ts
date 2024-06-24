import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY: string | undefined = process.env.JWT_SECRET;

export function generateToken(): string {
    if (!SECRET_KEY) {
        throw new Error('JWT_SECRET is not defined');
    }

    // Create JWT token with our signed data
    const token: string = jwt.sign({dummy: 1}, SECRET_KEY, { expiresIn: '1h' });
    return token;
}
