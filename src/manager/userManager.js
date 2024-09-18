import { userModel } from "../dao/models/userModel.js"; //quitar luego

export class UserManager {
  static getByEmail = async email => {
    return await userModel.findOne({ email: email }).lean();
  };
}
