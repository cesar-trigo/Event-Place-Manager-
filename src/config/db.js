import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection error: ", err.message);
  }
};

connDB();
