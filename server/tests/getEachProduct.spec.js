import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/products/1";

chai.use(chaiHttp);

export default function() {
	describe("GET product by id Route", () => {
		it("should return only one product of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl);
			expect(response).to.have.status(200);
			expect(response.body).to.be.an("object");
			expect(response.body.data).to.have.property("product_id");
			expect(response.body.data).to.have.property("name");
			expect(response.body.data).to.have.property("price");
			expect(response.body.data).to.have.property("quantity");
			expect(response.body)
				.to.have.property("message")
				.eql("Product fetched successfully");
			expect(response.body)
				.to.have.property("error")
				.eql(null);
		});
	});
}
