import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 8000,
  MONGO_URL: process.env.MONGO_URL,
};
