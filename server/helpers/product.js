class ProductHelper {
	static productError(req, res, next) {
		const idSave = req.body.id;
		const nameSave = req.body.name;
		const priceSave = req.body.price;
		const quantitySave = req.body.quantity;

		if (idSave === "") {
			res.status(404).json({
				message: "The Id field can not be Empty"
			});
		}
		if (nameSave === "") {
			res.status(404).json({
				message: "The Name Field can not be Empty"
			});
		}
		if (quantitySave === "") {
			res.status(404).json({
				message: "The Quantity Field can not be Empty"
			});
		}
		if (priceSave === "") {
			res.status(404).json({
				message: "The Price Field can not be Empty"
			});
		}
		if (typeof priceSave !== "number") {
			res.status(404).json({
				message: `The price ${priceSave} you Entered is not a Number`
			});
		}
		if (typeof quantitySave !== "number") {
			res.status(404).json({
				message: `The quantity ${quantitySave} you Entered is not a Number`
			});
		}

		next();
	}
}

export default ProductHelper;
