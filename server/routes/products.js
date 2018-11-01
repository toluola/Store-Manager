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

router.get("/", authenticate, getProducts);

router.put("/:id", authenticate, updateProduct);

router.delete("/:id", authenticate, deleteProduct);

router.post("/", authenticate, postProduct);

router.get("/:id", authenticate, getProduct);

export default router;
