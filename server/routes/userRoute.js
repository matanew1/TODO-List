import { Router } from "express";
const router = Router();
import UserController from "../controllers/userController.js";
import configuration from "../config/config.js";
import cors from "cors";

const corsOptions = configuration.corsOptions;

router.options("/users", cors(corsOptions));

/**
 * Defines the routes for user-related operations.
 */

/**
 * GET /users - Retrieve all users.
 */
router.get("/users", cors(corsOptions), UserController.getAllUsers);

/**
 * GET /users/:email - Retrieve a user by email.
 */
router.get("/users/:email", cors(corsOptions), UserController.getUserByEmail);

/**
 * POST /users - Create a new user.
 */

router.post("/users", cors(corsOptions), UserController.createUser);

/**
 * DELETE /users - Delete all users.
 */
router.delete("/users", cors(corsOptions), UserController.deleteAllUsers);

/**
 * PUT /users - Update a user.
 */
router.put("/users", cors(corsOptions), UserController.updateUser);

/**
 * POST /login - login a user.
 */
router.post("/login", cors(corsOptions), UserController.loginUser);

export default router;
