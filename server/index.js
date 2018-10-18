import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products";
import salesRoutes from "./routes/sales";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/sales", salesRoutes);

app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
	next();
});

if (!module.parent) {
	app.listen(PORT, () => console.log(`Running on localhost:${PORT}`));
}

export default app;
