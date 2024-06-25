import http from 'http';
import express, { Application } from 'express';
import cors from 'cors';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import { calculateRoutes } from './api/calculate/calculate.routes';
import { tokenRoutes } from './api/token/token.routes';
dotenv.config();

const app: Application = express();
const server: http.Server = http.createServer(app);

app.use(express.json());

const swaggerDocument = YAML.load('./server-stub-output/api/openapi.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const corsOptions: cors.CorsOptions = {
    origin: ['http://127.0.0.1:4040', 'http://localhost:4040'],
    credentials: true,
};

app.use(cors(corsOptions));

app.use('/api/generate-token', tokenRoutes);
app.use('/api/calculate', calculateRoutes);

const port = process.env.PORT || 4040;
server.listen(port, () => {
    console.log(`Server listening on port http://127.0.0.1:${port}/`);
});

export { app, server };
