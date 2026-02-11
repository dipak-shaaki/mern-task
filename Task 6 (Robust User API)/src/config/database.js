import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");

    } catch (error) {
        console.error("MongoDB connect error:", error);
        throw new Error("database connection failed");
    }
}

export { connectDb };