import { DepartmentMongoDAO as DepartmentDAO } from "../dao/DepartmentMongoDAO.js";

class DepartmentService {
  constructor(dao) {
    this.dao = dao;
  }

  createDepartment = async department => {
    return await this.dao.create(department);
  };

  getAllDepartments = async () => {
    return await this.dao.getAll();
  };

  getDepartmentById = async id => {
    return await this.dao.getById(id);
  };
}

export const departmentService = new DepartmentService(new DepartmentDAO());
