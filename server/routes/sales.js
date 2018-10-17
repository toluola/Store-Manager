<<<<<<< HEAD
import express from "express";
import { getSales, postSales, postEachSales } from "../controllers/sales";

const router = express.Router();

router.get("/admin", getSales);

router.post("/attendant", postSales);

router.get("/:user/:Id", postEachSales);

export default router;
||||||| merged common ancestors
=======
import express from "express";
import _ from "underscore";

const router = express.Router();

const sales = [];

router.get("/", (req, res) => {
	res.status(200).json({
		message: "Handling GET request to /products",
		result: sales
	});
});
router.post("/", (req, res) => {
	console.log(req.body);
	const sale = {
		credentials: req.body
	};
	_.each(sale, item => {
		sales.push(item);
	});

	console.log(sales);
	res.status(200).json({
		message: "Handling POST request to /products",
		createdProduct: sale
	});
});

router.get("/:Id", (req, res) => {
	const id = req.params.Id;
	const data = sales.filter(user => user.id === id)[0];
	res.status(200).json({
		message: "handling get request",
		result: data
	});
});

export default router;
>>>>>>> 2787bc4ad9f4ba6440d95f2666efd960ffee4588
