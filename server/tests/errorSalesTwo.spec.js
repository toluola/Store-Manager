import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";

const rootUrl = "/api/v1/sales";

chai.use(chaiHttp);

export default function() {
	const salesOne = {
		id: "1",
		name: "",
		price: 47,
		quantity: 5,
		created_by: "tolu"
	};

	describe("POST  sales", () => {
		it("return an error for post sales", async () => {
			const response = await chai
				.request(app)
				.post(rootUrl)
				.send(salesOne);
			expect(response).to.have.status(404);
			expect(response.body)
				.to.have.property("message")
				.eql("The Name Field can not be Empty");
		});
	});
}
