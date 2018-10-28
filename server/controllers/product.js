import _ from "underscore";

const products = [];

class ProductController {
	static getProduct(req, res) {
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
	}

	static saveProduct(req, res) {
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
		const newId = products.filter(user => user.id === idSave)[0];
		const newName = products.filter(user => user.name === nameSave)[0];

		if (newId) {
			res.status(400).json({
				message: `The Id '${idSave}' you Entered already exist`
			});
		} else if (newName) {
			res.status(400).json({
				message: `The Name '${nameSave}' you Entered already exist`
			});
		} else {
			const added = _.each(product, item => {
				products.push(item);
			});
			res.status(201).json({
				message: "Product added successfully",
				createdProduct: product
			});
		}
	}

	static getEachProduct(req, res) {
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
	}
}

export default ProductController;
