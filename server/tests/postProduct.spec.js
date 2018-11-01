import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/products";

chai.use(chaiHttp);

export default function() {
	const products = {
		name: "shoe",
		price: 47,
		quantity: 5
	};

	describe("POST  all products", () => {
		it("should return all Products", async () => {
			const response = await chai
				.request(app)
				.post(rootUrl)
				.send(products);
			expect(response).to.have.status(201);
			expect(response.body.data).to.have.property("product_id");
			expect(response.body.data).to.have.property("name");
			expect(response.body.data).to.have.property("price");
			expect(response.body.data).to.have.property("quantity");
			expect(response.body)
				.to.have.property("message")
				.eql("Product added successfully");
			expect(response.body)
				.to.have.property("error")
				.eql(null);
		});
	});
}
