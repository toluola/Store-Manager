import _ from "underscore";

const products = [];

export const getProduct = (req, res) => {
	res.status(200).json({
		message: "Products fetched successfully",
		result: products
	});
};

export const saveProduct = (req, res) => {
	const product = {
		credentials: req.body
	};
	_.each(product, item => {
		products.push(item);
	});
	res.status(200).json({
		message: "Product added successfully",
		createdProduct: product
	});
};

export const getEachProduct = (req, res) => {
	const id = req.params.Id;
	const data = products.filter(user => user.id === id)[0];
	res.status(200).json({
		message: "Product fetched successfully",
		result: data
	});
};
