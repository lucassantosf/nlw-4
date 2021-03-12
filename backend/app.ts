import 'reflect-metadata';
import express, { response } from 'express';
import createConnection from './src/database';
import { router } from './src/routes';

createConnection();
const app = express();

app.use(express.json())
app.use(router)

export {app}