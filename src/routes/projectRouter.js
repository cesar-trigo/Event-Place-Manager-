import { Router } from "express";
import projectController from "../controllers/projectController.js";

const { create, getAll } = projectController;

export const projectRouter = Router();

projectRouter.post("/create", create);
projectRouter.get("/", getAll);
