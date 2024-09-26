import { userService } from "../services/userServices.js";
import bcrypt from "bcrypt";

export class UserManager {
  static getByEmail = async email => {
    return await userService.getUserByEmail(email);
  };

  static getById = async id => {
    return await userService.getUserById(id);
  };

  static create = async user => {
    const createHash = await bcrypt.hash(user.password, 10);
    user.password = createHash;
    return await userService.createUser(user);
  };

  static checkPassword = async (password, userPassword) => {
    return await bcrypt.compare(password || "", userPassword);
  };
}
