import express from "express";
import postRoutes from "./routes/postRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/categories', categoryRoutes);

export default app;
