import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales/90";
const rootUrl2 = "/api/v1/products/90";

chai.use(chaiHttp);

export default function() {
	describe("GET sales error", () => {
		it("should return an error sales of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl);
			expect(response).to.have.status(404);
			expect(response.body)
				.to.have.property("data")
				.eql({});
		});
	});
	describe("GET product error", () => {
		it("should return an error product of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl2);
			expect(response).to.have.status(404);
			expect(response.body)
				.to.have.property("data")
				.eql({});
		});
	});
}
