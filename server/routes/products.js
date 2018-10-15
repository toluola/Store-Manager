import express from "express";
import _ from "underscore";

const router = express.Router();
const products = [];

router.get("/", (req, res) => {
	res.status(200).json({
		message: "Handling GET request to /products",
		result: products
	});
});

router.post("/", (req, res) => {
	console.log(req.body);
	const product = {
		credentials: req.body
	};
	_.each(product, item => {
		products.push(item);
	});

	console.log(products);
	res.status(200).json({
		message: "Handling POST request to /products",
		createdProduct: product
	});
});

router.get("/:Id", (req, res) => {
	const id = req.params.Id;
	const data = products.filter(user => user.id === id)[0];
	res.status(200).json({
		message: "handling get request",
		result: data
	});
});

export default router;
