import User from "../models/userSchema.js";
import exceptions from "../config/exceptions.js";
import pkg from 'bcryptjs';
const { compareSync } = pkg

/**
 * A class that provides user-related services.
 */
class UserService {
  /**
   * Retrieves all users from the database.
   * @returns {Promise<Array<User>|Error>} - A promise that resolves to an array of user objects, or an Error if there was an error retrieving the users.
   */
  static async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Retrieves a user by email from the database.
   * @param {string} email - The email of the user to retrieve.
   * @returns {Promise<User|null|Error>} - A promise that resolves to the user object if found, null if not found, or an Error if there was an error retrieving the user.
   */
  static async getUserByEmail(email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Creates a new user in the database.
   * @param {object} newUser - The user object to create.
   * @returns {Promise<User|Error>} - A promise that resolves to the created user object, or an Error if there was an error creating the user.
   */
  static async createUser(newUser) {
    try {
      const existUser = await UserService.getUserByEmail(newUser.email);
      if (existUser) 
        throw new Error(exceptions.ALREADY_EXIST.message);
      
      const user = new User(newUser);
      return await user.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async loginUser(user) {
    try {
    const plain = user.password;
    const userEntity = new User(user);
    const userSaved = await this.getUserByEmail(userEntity.email);

    if (!userSaved)
      throw new Error(exceptions.USER_DOESNT_EXIST.message);
    console.log(exceptions.USER_DOESNT_EXIST.message)

    if (!await this.#decreypt(plain, userSaved.password))
      throw new Error(exceptions.INVALID_USER_INPUT.message);
    console.log(`Password ${plain} Is Correct`)

    return await userSaved;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deletes all users from the database.
   * @returns {Promise<void|Error>} - A promise that resolves to void if all users were successfully deleted, or an Error if there was an error deleting the users.
   */
  static async deleteAllUsers() {
    try {
      await User.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Updates a user in the database.
   * @param {object} update - The update object containing the fields to update.
   * @returns {Promise<void|Error>} - A promise that resolves to void if the user was successfully updated, or an Error if there was an error updating the user.
   */
  static async updateUser(update) {
    try {
      await User.findOneAndUpdate(update);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async #decreypt(plainPassword, hashPassword) {
    return compareSync(plainPassword, hashPassword) 
  }
}

export default UserService;
