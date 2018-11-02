import express from "express";
import {
	postProduct,
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct
} from "../controllers/product";
import { authenticate } from "../helpers/utils";

const router = express.Router();

router.get("/", getProducts);

router.put("/:id", authenticate, updateProduct);

router.delete("/:id", authenticate, deleteProduct);

router.post("/", authenticate, postProduct);

router.get("/:id", getProduct);

export default router;
