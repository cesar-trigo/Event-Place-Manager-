import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { logger } from "./middlewares/logger.js";
import { indexRouter } from "./routes/indexRouter.js";

const server = express();
const { PORT } = config;

server.use(cors());
server.use(logger);
server.use("/api", indexRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
