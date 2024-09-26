import { Router } from "express";
import userController from "../controllers/userController.js";

const { register, login, joinProject } = userController;

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.put("/:uId/project/:pId", joinProject);
