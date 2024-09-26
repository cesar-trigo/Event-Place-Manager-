import { ProjectMongoDAO as ProjectDAO } from "../dao/ProjectMongoDAO.js";

class ProjectService {
  constructor(dao) {
    this.dao = dao;
  }

  createProject = async project => {
    return await this.dao.create(project);
  };

  getProjectById = async id => {
    return await this.dao.getById(id);
  };

  getAllProjects = async () => {
    return await this.dao.getAll();
  };

  addParticipant = async (pid, participant) => {
    return await this.dao.addParticipant(pid, participant);
  };
}

export const projectService = new ProjectService(new ProjectDAO());
