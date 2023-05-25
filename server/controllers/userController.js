import UserService from '../services/userService.js';

class UserController {
    static getAllUsers = async (req, res) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).error(error.message);
        }
    }
}

export default UserController;