import { departmentService } from "../services/departamentService.js";

export class DepartmentManager {
  static create = async data => {
    return await departmentService.createDepartment(data);
  };

  static getAll = async () => {
    return await departmentService.getAllDepartments();
  };
}
