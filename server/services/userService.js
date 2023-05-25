import User from '../models/userSchema.js';

class UserService {
    static async getAllUsers() {
        try {
            return await User.find();
        } catch (error) {
            return new Error(error);
        }

    }
}

export default UserService;