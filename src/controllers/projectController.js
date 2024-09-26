import { projectDTO } from "../DTO/projectDTO.js";
import { ProjectManager } from "../manager/projectManager.js";
import { catched } from "../utils/catched.js";
import { httpResponse } from "../utils/httpResponse.js";

class ProjectController {
  static async createProject(req, res) {
    const data = req.body;
    const project = await ProjectManager.create(data);
    const projectResponse = projectDTO(project);
    httpResponse(res, 201, projectResponse);
  }

  static async getAllProjects(req, res) {
    const projects = await ProjectManager.getAll();
    const projectsResponse = projects.map(project => projectDTO(project));
    httpResponse(res, 200, projectsResponse);
  }
}

export default {
  create: catched(ProjectController.createProject),
  getAll: catched(ProjectController.getAllProjects),
};
