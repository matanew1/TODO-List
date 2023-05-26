import UserService from '../services/userService.js';

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
  }

  /**
   * Creates a new user.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {void}
   */
  static createUser = async (req, res) => {
    try {
      const newUser = req.body;
      console.log(newUser);
      const user = await UserService.createUser(newUser);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  /**
   * Deletes all users.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @returns {void}
   */
  static deleteAllUsers = async (req, res) => {
    try {
      await UserService.deleteAllUsers();
      res.status(200).send('All users deleted.');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

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
}

export default UserController;
