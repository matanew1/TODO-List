import UserService from "../services/userService.js";

class UserController {
  static getAllUsers = async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).error(error.message);
    }
  };

  static createUser = async (req, res) => {
    try {
      const newUser = req.body;
      console.log(newUser);
      const user = await UserService.createUser(newUser);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).error(error.message);
    }
  };

  static updateUser = async (req, res) => {
    try {
      const update = req.body;
      console.log(update);
      const user = await UserService.updateUser(update);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).error(error.message);
    }
  };

  static deleteAllUsers = async (req, res) => {
    try {
      await UserService.deleteAllUsers();
      res.status(200);
    } catch (error) {
      res.status(500).error(error.message);
    }
  };
}

export default UserController;
