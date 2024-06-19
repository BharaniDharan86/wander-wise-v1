import express from "express";
import { signUpUser } from "../controllers/authController.js";

const userRoutes = express.Router();

userRoutes.route("/signup").post(signUpUser);

export default userRoutes;
