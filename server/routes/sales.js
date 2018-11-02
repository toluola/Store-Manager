import express from "express";
import { postSales, getSales, getSale } from "../controllers/sales";
import { authenticate } from "../helpers/utils";

const router = express.Router();

router.get("/", authenticate, getSales);

router.post("/", postSales);

router.get("/:id", authenticate, getSale);

export default router;
