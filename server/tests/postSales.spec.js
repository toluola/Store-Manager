import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales";

chai.use(chaiHttp);

export default function() {
	const sales = {
		id: "1",
		name: "shoe",
		price: 47,
		quantity: 5,
		created_by: "tolu"
	};

	describe("POST  sales", () => {
		it("return the sales order created", async () => {
			const response = await chai
				.request(app)
				.post(rootUrl)
				.send(sales);
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
			expect(response.body.createdProduct.product_info).to.have.property(
				"created_by"
			);
			expect(response.body)
				.to.have.property("message")
				.eql("Sales record added successfully");
		});
	});
}
