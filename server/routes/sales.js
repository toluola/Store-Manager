import express from "express";
import SalesController from "../controllers/sales";
import SalesHelper from "../helpers/sales";

const router = express.Router();

router.get("/", SalesController.getSales);

router.post("/", SalesHelper.salesError, SalesController.postSales);

router.get("/:Id", SalesController.getEachSales);

export default router;
