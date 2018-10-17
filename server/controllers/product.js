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
	const added = _.each(product, item => {
		products.push(item);
	});
	if (added) {
		res.status(201).json({
			message: "Product added successfully",
			createdProduct: product
		});
	} else {
		res.status(400).json({
			message: "Something went wrong"
		});
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
	}
};
