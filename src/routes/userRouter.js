import { Router } from "express";
import { UserController } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
