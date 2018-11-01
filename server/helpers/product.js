import { sendResponse } from "./utils";

class ProductHelper {
	static productNameError(request, response, next) {
		const nameSave = req.body.name;
		const priceSave = req.body.price;
		const quantitySave = req.body.quantity;

		if (nameSave === "") {
		return sendResponse({
			response,
			status: 201,
			message: "Name can not be Empty"
		});
		
		next();
	}
}

export default ProductHelper;
