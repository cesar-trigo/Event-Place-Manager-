import { projectService } from "../services/projectService.js";

export class ProjectManager {
  static create = async data => {
    return await projectService.createProject(data);
  };

  static getById = async id => {
    return await projectService.getProjectById(id);
  };

  static getAll = async () => {
    return await projectService.getAllProjects();
  };

  static addParticipant = async (pid, participant) => {
    return await projectService.addParticipant(pid, participant);
  };
}
