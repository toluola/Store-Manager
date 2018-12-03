import express from "express";
import salesController from "../controllers/sales";
import authRoute from "../helpers/utils";

const router = express.Router();

router.get("/", authRoute.verifyTokenAdmin, salesController.getAllSales);

router.post("/", authRoute.verifyToken, salesController.addNewSale);

router.get("/:id", authRoute.verifyToken, salesController.getSingleSale);

export default router;
