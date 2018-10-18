import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales/admin/1";

chai.use(chaiHttp);

export default function() {
	describe("GET product by id Route", () => {
		it("should return only one product of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl);
			expect(response).to.have.status(200);
			expect(response.body).to.be.an("object");
			expect(response.body.result).to.have.property("id");
			expect(response.body.result).to.have.property("name");
			expect(response.body.result).to.have.property("price");
			expect(response.body.result).to.have.property("quantity");
			expect(response.body.result).to.have.property("created_by");
			expect(response.body)
				.to.have.property("message")
				.eql("Sale order successfully fetched");
		});
	});
}
