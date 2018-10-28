class SalesHelper {
	static salesError(req, res, next) {
		const idSave = req.body.id;
		const nameSave = req.body.name;
		const priceSave = req.body.price;
		const quantitySave = req.body.quantity;
		const createdBySave = req.body.created_by;
		if (idSave === "") {
			res.status(404).json({
				message: "The Id field can not be Empty"
			});
		}
		if (nameSave === "") {
			res.status(404).json({
				message: "The Name Field can not be Empty"
			});
		} else if (quantitySave === "") {
			res.status(404).json({
				message: "The Quantity Field can not be Empty"
			});
		} else if (priceSave === "") {
			res.status(404).json({
				message: "The Price Field can not be Empty"
			});
		} else if (createdBySave === "") {
			res.status(404).json({
				message: "Please Specify the Creator of the sales"
			});
		} else if (typeof priceSave !== "number") {
			res.status(404).json({
				message: `The price value ${priceSave} you Entered is not a Number`
			});
		} else if (typeof quantitySave !== "number") {
			res.status(404).json({
				message: `The Quantity value ${quantitySave} you Entered is not a Number`
			});
		}
		next();
	}
}

export default SalesHelper;
