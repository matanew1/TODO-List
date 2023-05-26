import User from '../models/userSchema.js';

class UserService {
    static async getAllUsers() {
        try {
            return await User.find();
        } catch (error) {
            return new Error(error);
        }
    }

    static async createUser(newUser) {
        try {
            const user = new User(newUser)
            return await user.save()
        } catch (error) {
            return new Error(error);
        }
    }

    static async deleteAllUsers() {
        try {
            await User.deleteMany({})
        } catch (error) {
            return new Error(error)
        }
    }
}

export default UserService;