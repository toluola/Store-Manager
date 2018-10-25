import _ from "underscore";

const sales = [];

export const getSales = (req, res) => {
	if (sales.length > 0) {
		res.status(200).json({
			message: "Sales orders successfully fetched",
			result: sales
		});
	} else {
		res.status(404).json({
			message: "No sales order found"
		});
	}
};

export const postSales = (req, res) => {
	const sale = {
		product_info: {
			id: req.body.id,
			name: req.body.name,
			price: req.body.price,
			quantity: req.body.quantity,
			created_by: req.body.created_by
		}
	};
	const idSave = req.body.id;
	const nameSave = req.body.name;
	const priceSave = req.body.price;
	const quantitySave = req.body.quantity;
	const createdbySave = req.body.quantity;
	const newId = sales.filter(user => user.id === idSave)[0];
	const newName = sales.filter(user => user.name === nameSave)[0];
	if (newId || newName) {
		res.status(400).json({
			message: "Bad request"
		});
	} else if (
		idSave === "" ||
		nameSave === "" ||
		quantitySave === "" ||
		createdbySave === "" ||
		priceSave === "" ||
		typeof priceSave !== "number" ||
		typeof quantitySave !== "number"
	) {
		res.status(404).json({
			message: "Not found"
		});
	} else {
		const added = _.each(sale, item => {
			sales.push(item);
		});
		res.status(201).json({
			message: "sales order added successfully",
			createdProduct: sale
		});
	}
};

export const getEachSales = (req, res) => {
	const id = req.params.Id;
	const data = sales.filter(user => user.id === id)[0];
	if (data) {
		res.status(200).json({
			message: "Sale order successfully fetched",
			result: data
		});
	} else {
		res.status(404).json({
			message: "Sales record not found"
		});
	}
};
