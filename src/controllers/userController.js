import { projectDTO } from "../DTO/projectDTO.js";
import { userDTO } from "../DTO/userDTO.js";
import { ProjectManager } from "../manager/projectManager.js";
import { UserManager } from "../manager/userManager.js";
import { catched } from "../utils/catched.js";
import { CustomError } from "../utils/customErros.js";
import { ERROR_TYPES } from "../utils/eErrors.js";
import { httpResponse } from "../utils/httpResponse.js";
import { isValidObjectId } from "mongoose";
class UserController {
  static register = async (req, res) => {
    const data = req.body;
    const { email } = req.body;

    const existingUser = await UserManager.getByEmail(email);
    if (existingUser) {
      CustomError.createError("register --> UserController", `Email ${email} already exists`, ERROR_TYPES.CONFLICT);
    }

    const user = await UserManager.create(data);
    const userResponse = userDTO(user);
    httpResponse(res, 201, userResponse);
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await UserManager.getByEmail(email);
    if (!existingUser) {
      CustomError.createError("login --> UserController", "incorrect email or password", ERROR_TYPES.AUTHENTICATION);
    }
    const validatePassword = await UserManager.checkPassword(password, existingUser.password);
    if (!validatePassword) {
      CustomError.createError("login --> UserController", "incorrect email or password", ERROR_TYPES.AUTHENTICATION);
    }
    const userResponse = userDTO(existingUser);
    httpResponse(res, 200, userResponse);
  };

  static joinProject = async (req, res) => {
    const { uId } = req.params;
    const { pId } = req.params;

    if (!isValidObjectId(uId)) {
      CustomError.createError("joinProject --> UserController", "User not found", ERROR_TYPES.NOT_FOUND);
    }

    if (!isValidObjectId(pId)) {
      CustomError.createError("joinProject --> UserController", "Project not found", ERROR_TYPES.NOT_FOUND);
    }
    const existingUser = await UserManager.getById(uId);

    const newParticipants = await ProjectManager.addParticipant(pId, existingUser._id);

    const projectResponse = projectDTO(newParticipants);
    httpResponse(res, 200, projectResponse);
  };
}

export default {
  register: catched(UserController.register),
  login: catched(UserController.login),
  joinProject: catched(UserController.joinProject),
};
