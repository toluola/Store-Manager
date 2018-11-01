import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import client from "./connection";

dotenv.config();

const authenticate = async (request, response, next) => {
	try {
		const token = request.headers["x-auth-token"];
		if (!token) throw new Error("token is required");
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		request.user = decoded.data;
		next();
	} catch (error) {
		response.status(401).json({
			data: {},
			message: "You are not Authorized",
			error: [error.message]
		});
	}
};

const checkAuth = async (request, response, next) => {
	try {
		const token = request.headers["x-auth-token"];
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (decoded.data.status !== "attendant") {
			next();
		}
	} catch (error) {
		response.status(401).json({
			data: {},
			message: "You are not Authorized",
			error: [error.message]
		});
	}
};

const sendResponse = ({
	data = {},
	status = 200,
	error = null,
	response,
	message
}) => {
	response.status(error && status < 400 ? 400 : status).json({
		data,
		error,
		message
	});
};

export { sendResponse, authenticate, checkAuth };
