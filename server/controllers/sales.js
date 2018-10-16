import _ from "underscore";

const sales = [];

export const getSales = (req, res) => {
	res.status(200).json({
		message: "Sales orders successfully fetched",
		result: sales
	});
};

export const postSales = (req, res) => {
	const sale = {
		credentials: req.body
	};
	_.each(sale, item => {
		sales.push(item);
	});
	res.status(200).json({
		message: "Sale order successfully created",
		createdProduct: sale
	});
};

export const postEachSales = (req, res) => {
	const id = req.params.Id;
	const data = sales.filter(user => user.id === id)[0];
	res.status(200).json({
		message: "Sale order successfully fetched",
		result: data
	});
};
