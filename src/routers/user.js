import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "../controllers/user.js";

export const UserRouter = Router();

UserRouter
  .post("/createUser", createUser)
  .get("/details", getUsers)
  .get("/:id", getUserById)
  .patch("/:id", updateUserById)
  .delete("/:id", deleteUserById);

// app.get("/students", async (request, response) => {
//   response.send(students);
// });
