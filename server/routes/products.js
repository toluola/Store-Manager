import express from "express";
import {
	getProduct,
	saveProduct,
	getEachProduct
} from "../controllers/product";

const router = express.Router();

router.get("/", getProduct);

router.post("/admin", saveProduct);

router.get("/:Id", getEachProduct);

export default router;
