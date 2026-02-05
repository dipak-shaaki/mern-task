import express from 'express';
import morgan from 'morgan';
// import logger from './middlewares/logger.middleware.js';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

const app= express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);
// app.use(logger); optional custom logger

//routes
app.use('/auth',authRoutes);
app.use('/notes',noteRoutes);


export default app;