import UserService from "../services/userService.js";
import exceptions from "../config/exceptions.js";
import getMAC from "getmac";

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
      if (!req.cookies?.id) res.cookie("Id", getMAC());
      res.status(201).send(user);
    } catch (error) {
      switch (error.message) {
        case `Error: ${exceptions.ALREADY_EXIST.message}`:
          res.status(exceptions.ALREADY_EXIST.statusCode).send(error.message);
          break;
        default:
          res.status(500).send(error.message);
          break;
      }
    }
  };

  /**
   * Login user.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves with the created user.
   */
  static loginUser = async (req, res) => {
    try {
      const user = await UserService.loginUser(req.body);
      if (!user) {
        res.status(404).send("User not found.");
      } else {
        if (!req.cookies?.id) res.cookie("Id", getMAC());
        res.status(200).send(user);
      }
    } catch (error) {
      if (error.message === `Error: ${exceptions.INVALID_USER_INPUT.message}`) {
        res
          .status(exceptions.INVALID_USER_INPUT.statusCode)
          .send(error.message);
      } else if (
        error.message === `Error: ${exceptions.USER_DOESNT_EXIST.message}`
      ) {
        res
          .status(404)
          .send(
            error.message === `Error: ${exceptions.USER_DOESNT_EXIST.message}`
          );
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
