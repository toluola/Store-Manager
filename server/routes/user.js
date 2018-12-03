import express from "express";
import userController from "../controllers/user";
import authRoute from "../helpers/utils";

const router = express.Router();

router.post("/signup", authRoute.verifyTokenAdmin, userController.signup);
router.post("/login", userController.login);

export default router;
