import User from "../models/userSchema.js";

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
      return new Error(error);
    }
  }

  /**
   * Creates a new user in the database.
   * @param {object} newUser - The user object to create.
   * @returns {Promise<User|Error>} - A promise that resolves to the created user object, or an Error if there was an error creating the user.
   */
  static async createUser(newUser) {
    try {
      const user = new User(newUser);
      return await user.save();
    } catch (error) {
      return new Error(error);
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
      return new Error(error);
    }
  }

  static async updateUser(update) {
    try {
      await User.findOneAndUpdate(update);
    } catch (error) {
      return new Error(error);
    }
  }
}

export default UserService;
