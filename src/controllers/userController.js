import { userModel } from "../dao/models/userModel.js";
import { UserManager } from "../manager/userManager.js";
export class UserController {
  static register = async (req, res) => {
    const { email } = req.body;

    try {
      const existingUser = await UserManager.getByEmail(email);
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const user = await userModel.create(req.body);
      //falta hashear contraseña
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      console.log(error);
    }
  };

  static login = (req, res) => {
    res.send("Login");
  };
}
