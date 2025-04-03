import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Vistaara",
    });
    console.log("Database is connected");
  } catch (error) {
    console.log();
  }
};

export default connectDB;
