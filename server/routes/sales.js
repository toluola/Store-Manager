import express from "express";
import { getSales, postSales, getEachSales } from "../controllers/sales";

const router = express.Router();

router.get("/admin", getSales);

router.post("/attendant", postSales);

router.get("/:user/:Id", getEachSales);

export default router;


