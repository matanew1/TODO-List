import { Router } from "express";
const router = Router();
import UserController from "../controllers/userController.js";

/**
 * Defines the routes for user-related operations.
 */

// Retrieves all users
router.get("/users", UserController.getAllUsers);

router.get("/users/:email", UserController.getUserIdByEmail);

// Creates a new user
router.post("/users", UserController.createUser);

// Deletes all users
router.delete("/users", UserController.deleteAllUsers);

// Update a user
router.put("/users", UserController.updateUser);

export default router;
