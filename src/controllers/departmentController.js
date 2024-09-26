import { departmentDTO } from "../DTO/departmentDTO.js";
import { DepartmentManager } from "../manager/departmentManager.js";
import { catched } from "../utils/catched.js";
import { httpResponse } from "../utils/httpResponse.js";

class DepartmentController {
  static async createDepartment(req, res) {
    const data = req.body;
    const department = await DepartmentManager.create(data);
    const departmentResponse = departmentDTO(department);
    httpResponse(res, 201, departmentResponse);
  }

  static async getAllDepartment(req, res) {
    const departments = await DepartmentManager.getAll();
    const departmentsResponse = departments.map(department => departmentDTO(department));
    httpResponse(res, 200, departmentsResponse);
  }
}

export default {
  create: catched(DepartmentController.createDepartment),
  getAll: catched(DepartmentController.getAllDepartment),
};
