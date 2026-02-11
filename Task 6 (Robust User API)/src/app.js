import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import {logger} from "./config/logger.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";


const app = express ();

app.use(express.json());
app.use(mongoSanitize());
app.use(logger);

app.use("/auth",authRoutes );
app.use(errorHandler)

export default app ;
