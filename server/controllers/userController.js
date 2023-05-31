import UserService from "../services/userService.js";

/**
 * Controller class for handling user-related operations.
 */
class UserController {
  /**
   * Retrieves all users.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {void}
   */
  static getAllUsers = async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  /**
   * Creates a new user.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {void}
   */
  static createUser = async (req, res) => {
    try {
      const newUser = req.body;
      const user = await UserService.createUser(newUser);
      res.status(201).send(user);
    } catch (error) {
      console.log(error.message);
      if (error.message === "Error: User already exists") {
        res.status(409).send(error.message);
      } 
      else {
        res.status(500).send(error.message);
      }
    }
  };
  

  static getUserIdByEmail = async (req, res) => {
    try {
      const user = await UserService.getUserIdByEmail(req.params.email);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

  /**
   * Deletes all users.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {void}
   */
  static deleteAllUsers = async (req, res) => {
    try {
      await UserService.deleteAllUsers();
      res.status(200).send("All users deleted.");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static updateUser = async (req, res) => {
    try {
      const update = req.body;
      await UserService.updateUser(update);
      res.status(200).send("User Updated");
    } catch (error) {
      res.status(500).error(error.message);
    }
  };
}

export default UserController;
