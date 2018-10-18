import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/products/admin";

chai.use(chaiHttp);

export default function() {
	const products = {
		id: "1",
		name: "shoe",
		price: "47",
		quantity: "5",
		created_by: "tolu"
	};

	describe("POST  all products", () => {
		it("should return all entries", async () => {
			const response = await chai
				.request(app)
				.post(rootUrl)
				.send(products);
			expect(response).to.have.status(201);
			expect(response.body.createdProduct.product_info).to.have.property(
				"id"
			);
			expect(response.body.createdProduct.product_info).to.have.property(
				"name"
			);
			expect(response.body.createdProduct.product_info).to.have.property(
				"price"
			);
			expect(response.body.createdProduct.product_info).to.have.property(
				"quantity"
			);
			expect(response.body)
				.to.have.property("message")
				.eql("Product added successfully");
		});
	});
}
