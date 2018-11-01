import express from "express";
import {
	postProduct,
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct
} from "../controllers/product";

const router = express.Router();

router.get("/", getProducts);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.post("/", postProduct);

router.get("/:id", getProduct);

export default router;
