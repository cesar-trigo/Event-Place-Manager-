import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { projectRouter } from "./projectRouter.js";
import { departmentRouter } from "./departmentRouter.js";

export const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/project", projectRouter);
indexRouter.use("/department", departmentRouter);
