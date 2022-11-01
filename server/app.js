import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import "regenerator-runtime/runtime.js";

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/summitech_posts', () => {
  console.log('Contected to mongodb...');
});

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/v1/api', routes);

export default app;
