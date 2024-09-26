import { UserMongoDAO as UserDAO } from "../dao/UserMongoDAO.js";

class UserService {
  constructor(dao) {
    this.dao = dao;
  }

  createUser = async user => {
    return await this.dao.create(user);
  };

  getUserByEmail = async email => {
    return await this.dao.getByEmail(email);
  };

  getUserById = async id => {
    return await this.dao.getById(id);
  };
}

export const userService = new UserService(new UserDAO());
