import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectMongo } from './db/initMongoConnection.js';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';

export function setupServer() {
  const PORT = Number(getEnvVar('PORT', '3000'));

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use(router);

  app.listen(PORT, async () => {
    await connectMongo();
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
