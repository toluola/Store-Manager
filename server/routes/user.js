import express from "express";
import { signupRules } from "../models/User";
// import { validator } from "../helpers/utils";
import { signup, login } from "../controllers/user";

const router = express.Router();

router.post("/auth/signup", signup);
router.post("/auth/login", login);

export default router;
