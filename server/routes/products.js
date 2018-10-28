import express from "express";
import ProductController from "../controllers/product";
import ProductHelper from "../helpers/product";

const router = express.Router();

router.get("/", ProductController.getProduct);

router.post("/", ProductHelper.productError, ProductController.saveProduct);

router.get("/:Id", ProductController.getEachProduct);

export default router;
