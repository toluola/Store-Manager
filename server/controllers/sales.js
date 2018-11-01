import Sales from "../models/Sales";
import { sendResponse } from "../helpers/utils";

const postSales = async (request, response) => {
	try {
		const { name, price, quantity, created_by } = request.body;
		const newSales = new Sales({ name, price, quantity, created_by });
		const sales = await newSales.save();
		sendResponse({ response, data: sales, status: 201 });
	} catch (error) {
		sendResponse({ response, error: [error.message], status: 401 });
	}
};
const getSales = async (request, response) => {
	const sales = await Sales.find();
	sendResponse({ response, data: sales });
};
const getSale = async (request, response) => {
	try {
		const { id } = request.params;
		const sales = await Sales.findById(id);
		sendResponse({ response, data: sales });
	} catch (error) {
		sendResponse({ response, error: [error.message], status: 404 });
	}
};
// const sales = [];
// class SalesController {
// 	static getSales(req, res) {
// 		if (sales.length > 0) {
// 			res.status(200).json({
// 				message: "Sales orders successfully fetched",
// 				result: sales
// 			});
// 		} else {
// 			res.status(404).json({
// 				message: "No sales order found"
// 			});
// 		}
// 	}

// 	static postSales(req, res) {
// 		const sale = {
// 			product_info: {
// 				id: req.body.id,
// 				name: req.body.name,
// 				price: req.body.price,
// 				quantity: req.body.quantity,
// 				created_by: req.body.created_by
// 			}
// 		};
// 		const idSave = req.body.id;
// 		const nameSave = req.body.name;
// 		const newId = sales.filter(user => user.id === idSave)[0];
// 		const newName = sales.filter(user => user.name === nameSave)[0];

// 		if (newId) {
// 			res.status(400).json({
// 				message: `The Id '${idSave}' you Entered already exist`
// 			});
// 		} else if (newName) {
// 			res.status(400).json({
// 				message: `The Name '${nameSave}' you Entered already exist`
// 			});
// 		} else {
// 			const added = _.each(sale, item => {
// 				sales.push(item);
// 			});
// 			res.status(201).json({
// 				message: "Sales record added successfully",
// 				createdProduct: sale
// 			});
// 		}
// 	}

// 	static getEachSales(req, res) {
// 		const id = req.params.Id;
// 		const data = sales.filter(user => user.id === id)[0];
// 		if (data) {
// 			res.status(200).json({
// 				message: "Sale order successfully fetched",
// 				result: data
// 			});
// 		} else {
// 			res.status(404).json({
// 				message: "Sales record not found"
// 			});
// 		}
// 	}
// }

// export default SalesController;

export { postSales, getSales, getSale };
