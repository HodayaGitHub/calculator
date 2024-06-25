import request from 'supertest';
import http from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import { calculateRoutes } from '../api/calculate/calculate.routes';
import { generateToken } from '../utils/jwt.utils';
import { AUTH_HEADER } from '../common/consts';
import jwt from 'jsonwebtoken';

process.env.JWT_SECRET = 'testsecret';

const app: Express = express();
const server: http.Server = http.createServer(app);
let token: string;

beforeAll(() => {
    token = generateToken();
});

app.use('/api/calculate', calculateRoutes);

app.get('/test-verify-token', verifyToken, (req, res) => {
    res.json({ message: 'Token verified successfully' });
});


describe('Auth Middleware Tests', () => {
    it('should return 400 if token format is invalid', (done) => {
        request(server)
            .get('/test-verify-token')
            .set('Authorization', 'InvalidTokenFormat')
            .expect(400)
            .end(done);
    });

    it('should return 400 if token format is invalid', (done) => {
        request(server)
            .get('/test-verify-token')
            .set('Authorization', 'InvalidTokenFormat')
            .expect(400)
            .end(done);
    });

});
