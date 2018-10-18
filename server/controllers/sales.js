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

	const saleData = _.each(sale, item => {
		sales.push(item);
	});

	if (saleData) {
		res.status(200).json({
			message: "Sale order successfully created",
			createdProduct: sale
		});
	} else {
		res.status(400).json({
			message: "Something went wrong"
		});
	}
};

export const getEachSales = (req, res) => {
	const id = req.params.Id;
	const users = req.params.user;
	if (users === "admin" || sales.filter(user => user.created_by === users)) {
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
	} else {
		res.status(401).json({
			message: "Not authorized"
		});
	}
};
