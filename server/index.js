import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/products";
import salesRoutes from "./routes/sales";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/sales", salesRoutes);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => console.log("Running on localhost:3000"));
