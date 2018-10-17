import express from "express";
import { getSales, postSales, postEachSales } from "../controllers/sales";

const router = express.Router();

router.get("/admin", getSales);

router.post("/attendant", postSales);

router.get("/:user/:Id", postEachSales);

export default router;


