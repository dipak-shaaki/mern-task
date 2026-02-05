import express from 'express';
import productRoutes from '../src/routes/productRoutes.js'
import connectDb from './config/database.js'
import dotenv from 'dotenv'

dotenv.config()
connectDb();

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

export default app;
