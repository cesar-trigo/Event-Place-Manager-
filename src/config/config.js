import dotenv from "dotenv";

dotenv.config();

// Exportación de la configuración
export const config = {
  PORT: process.env.PORT || 8000,
};
