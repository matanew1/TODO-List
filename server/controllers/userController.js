import UserService from "../services/userService.js";

/**
 * Controller class for handling user-related operations.
 */
class UserController {
  /**
   * Get all users.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves with the list of users.
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
   * Create a new user.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves with the created user.
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
      } else {
        res.status(500).send(error.message);
      }
    }
  };

  /**
   * Get user ID by email.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves with the user ID.
   */
  static getUserByEmail = async (req, res) => {
    try {
      const user = await UserService.getUserByEmail(req.params.email);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  /**
   * Delete all users.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when all users are deleted.
   */
  static deleteAllUsers = async (req, res) => {
    try {
      await UserService.deleteAllUsers();
      res.status(200).send("All users deleted.");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  /**
   * Update a user.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the user is updated.
   */
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
