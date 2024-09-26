import { userModel } from "../dao/models/userModel.js";

export class UserMongoDAO {
  getByEmail = async email => {
    return await userModel.findOne({ email: email }).lean();
  };

  getById = async id => {
    return await userModel.findById(id).lean();
  };

  create = async user => {
    return await userModel.create(user);
  };
}
