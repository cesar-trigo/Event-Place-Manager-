import express from "express";
import cors from "cors";

import { indexRouter } from "./routes/indexRouter.js";
import { logger } from "./middlewares/logger.js";
import { config } from "./config/config.js";
import { handleErros } from "./utils/handleErros.js";
import "./config/db.js";

const server = express();
const { PORT } = config;

server.use(express.json());
server.use(cors());
server.use(logger);
server.use("/api", indexRouter);
server.use(handleErros);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
