import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectToMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_DB_URI;
    if (!mongoUri) {
      throw new Error("MONGO_DB_URI is not defined in the environment variables.");
    }
    console.log('Connecting to MongoDB with URI:', mongoUri); // Debugging log
    await mongoose.connect(mongoUri);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to the database", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongoDB;
