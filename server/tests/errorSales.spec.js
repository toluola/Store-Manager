import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales/2";
const rootUrl2 = "/api/v1/products/2";

chai.use(chaiHttp);

export default function() {
	describe("GET sales error", () => {
		it("should return only one product of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl);
			expect(response).to.have.status(404);
			expect(response.body)
				.to.have.property("message")
				.eql("Sales record not found");
		});
	});
	describe("GET product error", () => {
		it("should return only one product of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl2);
			expect(response).to.have.status(404);
			expect(response.body)
				.to.have.property("message")
				.eql("Product not found");
		});
	});

	// describe("GET sales error", () => {
	// 	it("should return an error", async () => {
	// 		const response = await chai.request(app).get(rootUrl2);
	// 		expect(response).to.have.status(401);
	// 		expect(response.body)
	// 			.to.have.property("message")
	// 			.eql("Not authorized");
	// 	});
	// });
}
