import mongoose from 'mongoose'

const connectDb = async () => {
  try {

        console.log('MONGO_URI:', process.env.MONGO_URI ? ' Set' : ' Undefined'); // Debug
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDb;