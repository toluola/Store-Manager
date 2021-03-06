import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../index";
import getProductSpec from "./getProduct.spec";
import postProductSpec from "./postProduct.spec";
import getEachProductSpec from "./getEachProduct.spec";
import postSalesSpec from "./postSales.spec";
import getSalesSpec from "./getSales.spec";
import getEachSalesSpec from "./getEachSales.spec";
import errorSalesSpec from "./errorSales.spec";

chai.use(chaiHttp);
const rootUrl = "/";

describe("Error", () => {
	it(" Invald route should return error", async () => {
		const res = await chai.request(app).get(rootUrl);
		expect(res).to.have.status(404);
		expect(res.body).to.be.an("object");
		expect(res.body.error)
			.to.have.property("message")
			.to.eql("Invalid URL");
	});
});

postProductSpec();
getProductSpec();
getEachProductSpec();
postSalesSpec();
getSalesSpec();
getEachSalesSpec();
errorSalesSpec();
