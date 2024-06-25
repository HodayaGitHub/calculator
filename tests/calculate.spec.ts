import request from 'supertest';
import http from 'http';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import { calculateRoutes } from '../api/calculate/calculate.routes';
import { generateToken } from '../utils/jwt.utils'; // Adjust path as needed
import { OPERATION_HEADER_NAME } from '../common/consts';
import { Operation } from '../common/models';

dotenv.config();

const app: Express = express();
const server: http.Server = http.createServer(app);
let token: string;

beforeAll((done) => {
    token = generateToken();
    done();
});

app.use(express.json());
app.use('/api/calculate', calculateRoutes);

describe('POST /api/calculate', () => {
    it('should add correctly when valid inputs and operation header are provided', (done) => {
        const payload = {
            num1: 10,
            num2: 5,
        };

        const operation = Operation.Add;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('result');
                expect(res.body.result).toBe(15);
                done();
            });
    });

    it('should subtract correctly when valid inputs and operation header are provided', (done) => {
        const payload = {
            num1: 10,
            num2: 5,
        };
        const operation = Operation.Subtract;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('result');
                expect(res.body.result).toBe(5);
                done();
            });
    });

    it('should multiply correctly when valid inputs and operation header are provided', (done) => {
        const payload = {
            num1: 10,
            num2: 5,
        };
        const operation = Operation.Multiply;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('result');
                expect(res.body.result).toBe(50);
                done();
            });
    });

    it('should divide correctly when valid inputs and operation header are provided', (done) => {
        const payload = {
            num1: 10,
            num2: 5,
        };
        const operation = Operation.Divide;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('result');
                expect(res.body.result).toBe(2);
                done();
            });
    });

    it('should return 400 for division by zero', (done) => {
        const payload = {
            num1: 10,
            num2: 0,
        };
        const operation = Operation.Divide;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('error');
                expect(res.body.error).toBe('Division by zero is not allowed');
                done();
            });
    });

    it('should return 400 for invalid operation', (done) => {
        const payload = {
            num1: 10,
            num2: 5,
        };

        const invalidOperation = 'invalid';

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, invalidOperation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('error');
                expect(res.body.error).toBe('Invalid operation');
                done();
            });
    });

    it('should return 400 for invalid input (letter instead of number)', (done) => {
        const payload = {
            num1: 'Hodaya',
            num2: 5,
        };
        const operation = Operation.Add;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('error');
                expect(res.body.error).toBe('Invalid parameters');
                done();
            });
    });

    it('should return 400 for empty input', (done) => {
        const payload = {};  

        const operation = Operation.Add;

        request(server)
            .post('/api/calculate')
            .set(OPERATION_HEADER_NAME, operation)
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('error');
                expect(res.body.error).toBe('Invalid parameters');
                done();
            });
    });


});

