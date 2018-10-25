import express from "express";
import { getSales, postSales, getEachSales } from "../controllers/sales";

const router = express.Router();

router.get("/", getSales);

router.post("/", postSales);

router.get("/:Id", getEachSales);

export default router;


