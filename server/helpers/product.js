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
		}
		
	static productPriceError(request, response) {
			if(typeof priceSave !== "number")
			return sendResponse({
			response,
			status: 201,
			message: ""
		});
		} else if (typeof quantitySave !== "number") {
			res.status(404).json({
				message: `The quantity ${quantitySave} you Entered is not a Number`
			});
		}

		next();
	}
}

export default ProductHelper;
