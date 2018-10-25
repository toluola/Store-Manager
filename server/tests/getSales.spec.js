import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales";

chai.use(chaiHttp);

export default function() {
	describe("GET all Sales Route", () => {
		it("should return all sales", async () => {
			const response = await chai.request(app).get(rootUrl);
			expect(response).to.have.status(200);
			expect(response.body.result).to.be.an("array");
			expect(response.body.result[0]).to.have.property("id");
			expect(response.body.result[0]).to.have.property("name");
			expect(response.body.result[0]).to.have.property("price");
			expect(response.body.result[0]).to.have.property("quantity");
			expect(response.body.result[0]).to.have.property("created_by");
			expect(response.body)
				.to.have.property("message")
				.eql("Sales orders successfully fetched");
		});
	});
}
