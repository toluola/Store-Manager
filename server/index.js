import "babel-polyfill";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products";
import salesRoutes from "./routes/sales";
import userRoutes from "./routes/user";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/sales", salesRoutes);
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1", (req, res) => {
	res.status(200).json({
		message: "welcome to the store manager"
	});
});

app.use((req, res, next) => {
	const error = new Error("Invalid URL");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
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
