class ProductHelper {
	static productError(req, res, next) {
		const nameSave = req.body.name;
		const priceSave = req.body.price;
		const quantitySave = req.body.quantity;

		if (nameSave === "") {
			res.status(404).json({
				message: "The Name Field can not be Empty"
			});
		} else if (typeof priceSave !== "number") {
			res.status(404).json({
				message: `The price ${priceSave} you Entered is not a Number`
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
