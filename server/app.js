import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

mongoose.connect('mongodb://kkennymore:Etiosa11%2F%2F@localhost:27017/?authMechanism=DEFAULT&authSource=summitech_posts', () => {
  console.log('Contected to mongodb...');
});

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/v1/api', routes);

export default app;
