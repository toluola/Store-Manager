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
import errorSalesTwoSpec from "./errorSalesTwo.spec";
import errorPostSpec from "./errorPost.spec";

chai.use(chaiHttp);
const rootUrl = "/api/v1/invalid";

describe("Error", () => {
	it(" Invald route should return error", async () => {
		const res = await chai.request(app).get(rootUrl);
		expect(res).to.have.status(404);
		expect(res.body).to.be.an("object");
		expect(res.body.error)
			.to.have.property("message")
			.to.eql("Not Found");
	});
});

postProductSpec();
getProductSpec();
getEachProductSpec();
postSalesSpec();
getSalesSpec();
getEachSalesSpec();
errorSalesSpec();
errorSalesTwoSpec();
errorPostSpec();
