import express from "express";
import productController from "../controllers/product";
import authRoute from "../helpers/utils";

const router = express.Router();

router.get("/", authRoute.verifyToken, productController.getAllProducts);

router.put(
	"/:id",
	authRoute.verifyTokenAdmin,
	productController.updateSingleProduct
);

router.delete(
	"/:id",
	authRoute.verifyTokenAdmin,
	productController.deleteSingleProduct
);

router.post("/", authRoute.verifyTokenAdmin, productController.addNewProduct);

router.get("/:id", authRoute.verifyToken, productController.getSingleProduct);

export default router;
