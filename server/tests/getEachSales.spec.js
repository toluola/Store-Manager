import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales/2";

chai.use(chaiHttp);

export default function() {
	describe("GET sales by id Route", () => {
		it("should return only one sales of a particular id", async () => {
			const response = await chai.request(app).get(rootUrl);
			expect(response).to.have.status(200);
			expect(response.body).to.be.an("object");
			expect(response.body.data).to.have.property("sales_id");
			expect(response.body.data).to.have.property("name");
			expect(response.body.data).to.have.property("price");
			expect(response.body.data).to.have.property("quantity");
			expect(response.body.data).to.have.property("created_by");
			expect(response.body)
				.to.have.property("message")
				.eql("Sale order successfully fetched");
			expect(response.body)
				.to.have.property("error")
				.eql(null);
		});
	});
}
