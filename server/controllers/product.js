import Product from "../models/Product";
import { sendResponse } from "../helpers/utils";

const postProduct = async (request, response) => {
	try {
		const { name, price, quantity } = request.body;
		const newProduct = new Product({ name, price, quantity });
		const product = await newProduct.save();
		sendResponse({
			response,
			data: product,
			status: 201,
			message: "Product added successfully"
		});
	} catch (error) {
		sendResponse({ response, error: [error.message], status: 401 });
	}
};
const getProducts = async (request, response) => {
	const products = await Product.find();
	sendResponse({
		response,
		data: products,
		message: "Products fetched successfully"
	});
};
const getProduct = async (request, response) => {
	try {
		const { id } = request.params;
		const product = await Product.findById(id);
		sendResponse({
			response,
			data: product,
			message: "Product fetched successfully"
		});
	} catch (error) {
		sendResponse({
			response,
			error: [error.message],
			status: 404
		});
	}
};

const updateProduct = async (request, response) => {
	try {
		const product = await Product.findByIdAndUpdate(request.params.id, {
			...request.body
		});
		sendResponse({ response, data: product });
	} catch (error) {
		sendResponse({ response, error: [error.message], status: 404 });
	}
};

const deleteProduct = async (request, response) => {
	try {
		const product = await Product.findByIdAndDelete(request.params.id);
		sendResponse({ response, data: product });
	} catch (error) {
		sendResponse({ response, error: [error.message], status: 404 });
	}
};

export { postProduct, getProducts, getProduct, updateProduct, deleteProduct };
