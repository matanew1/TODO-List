// libraries
import express from 'express';
// app
const app = express();

// own 
import middlewares from './middlewares/middlewares.js';
import userRoutes from './routes/userRoute.js';

//middlewares
app.use(middlewares);

//routes
app.use('/', userRoutes);

export default app;


