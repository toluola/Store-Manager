import Sales from "../models/Sales";
import { sendResponse } from "../helpers/utils";

const postSales = async (request, response) => {
	try {
		const { name, price, quantity, created_by } = request.body;
		const newSales = new Sales({ name, price, quantity, created_by });
		const sales = await newSales.save();
		sendResponse({
			response,
			data: sales,
			status: 201,
			message: "Sales record added successfully"
		});
	} catch (error) {
		sendResponse({ response, message: "Can not post sales", status: 401 });
	}
};
const getSales = async (request, response) => {
	const sales = await Sales.find();
	sendResponse({
		response,
		data: sales,
		message: "Sales orders successfully fetched"
	});
};
const getSale = async (request, response) => {
	try {
		const { id } = request.params;
		const sales = await Sales.findById(id);
		sendResponse({
			response,
			data: sales,
			message: "Sale order successfully fetched"
		});
	} catch (error) {
		sendResponse({
			response,
			message: "Can not fetch sale Record",
			status: 404
		});
	}
};

export { postSales, getSales, getSale };
