import express from "express";
import { postSales, getSales, getSale } from "../controllers/sales";

const router = express.Router();

router.get("/", getSales);

router.post("/", postSales);

router.get("/:id", getSale);

export default router;
