import { Router } from "express";
import departmentController from "../controllers/departmentController.js";

const { create, getAll } = departmentController;

export const departmentRouter = Router();

departmentRouter.post("/create", create);
departmentRouter.get("/", getAll);
