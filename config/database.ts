import mongoose from "mongoose";

// mongoose.set("debug", true);

const mongodbUri: any = process.env.MONGODB_URI;
console.log(mongodbUri);

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(mongodbUri);
  } catch (error) {
    throw new Error("Error connecting to DB");
  }
};

export default connectDB;
