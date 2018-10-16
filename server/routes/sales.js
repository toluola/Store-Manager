import express from "express";
import { getSales, postSales, postEachSales } from "../controllers/sales";

const router = express.Router();

router.get("/", getSales);

router.post("/", postSales);

router.get("/:Id", postEachSales);

export default router;
