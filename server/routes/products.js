import express from "express";
import { postProduct, getProducts, getProduct } from "../controllers/product";

const router = express.Router();

router.get("/", getProducts);

router.post("/", postProduct);

router.get("/:id", getProduct);

export default router;
