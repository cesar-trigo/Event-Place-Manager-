import { departmentModel } from "./models/departmentModel.js";

export class DepartmentMongoDAO {
  getAll = async () => {
    return await departmentModel.find().lean();
  };
  create = async data => {
    return await departmentModel.create(data);
  };
}
