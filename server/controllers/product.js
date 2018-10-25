import _ from "underscore";

const products = [];

export const getProduct = (req, res) => {
	if (products.length > 0) {
		res.status(200).json({
			message: "Products fetched successfully",
			result: products
		});
	} else {
		res.status(404).json({
			message: "No product found"
		});
	}
};

export const saveProduct = (req, res) => {
	const product = {
		product_info: {
			id: req.body.id,
			name: req.body.name,
			price: req.body.price,
			quantity: req.body.quantity
		}
	};
	const idSave = req.body.id;
	const nameSave = req.body.name;
	const priceSave = req.body.price;
	const quantitySave = req.body.quantity;
	const newId = products.filter(user => user.id === idSave)[0];
	const newName = products.filter(user => user.name === nameSave)[0];
	if (newId || newName) {
		res.status(400).json({
			message: "Bad request"
		});
	} else if (
		idSave === "" ||
		nameSave === "" ||
		quantitySave === "" ||
		priceSave === "" ||
		typeof priceSave !== "number" ||
		typeof quantitySave !== "number"
	) {
		res.status(404).json({
			message: "Not found"
		});
	} else {
		const added = _.each(product, item => {
			products.push(item);
		});
		res.status(201).json({
			message: "Product added successfully",
			createdProduct: product
		});
		console.log(products);
	}
};

export const getEachProduct = (req, res) => {
	const id = req.params.Id;
	const data = products.filter(user => user.id === id)[0];
	if (data) {
		res.status(200).json({
			message: "Product fetched successfully",
			result: data
		});
	} else {
		res.status(404).json({
			message: "Product not found"
		});
		console.log(id);
	}
};
