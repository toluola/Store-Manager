import dbConfig from "../database/dbSetup";
import validation from "./Helpers";

class salesController {
  // Get all sales
  static getAllSales(req, resp, next) {
    dbConfig.query("SELECT * FROM sales", (err, res) => {
      if (err) {
        return next(err);
      }

      return resp.status(200).json({
        sales: res.rows,
        message: "Sales Fetched Successfully"
      });
    });
  }

  // Get a single sale
  static getSingleSale(req, resp, next) {
    if (!validation.isNumber(req.params.id)) {
      return resp
        .status(400)
        .json({ message: "Please specify a number in the parameters list" });
    }

    const requestId = req.params.id;
    let queryOneSale;
    let paramsOneSale;

    // If requester is admin:
    if (req.auth_token.profile.role === "admin") {
      queryOneSale = "SELECT * FROM sales WHERE id = $1";
      paramsOneSale = [requestId];
    } else {
      // Store attendant can only view sale made by him
      queryOneSale = "SELECT * FROM sales WHERE id = $1 AND profile_id = $2";
      paramsOneSale = [requestId, req.auth_token.profile.id];
    }

    dbConfig.query(queryOneSale, paramsOneSale, (err, res) => {
      if (err) {
        return next(err);
      }

      if (res.rows.length > 0) {
        return resp.status(200).json({
          sale: res.rows[0],
          message: "A single sale record"
        });
      }
      if (paramsOneSale.length > 1) {
        // i.e. is store attenant trying to access sale h doesn't own
        return resp
          .status(400)
          .json({ message: "Unable to get sale record. As its not yours" });
      }
      return resp.status(404).json({ message: "sale not found" });
    });
  }

  static addNewSale(req, resp, next) {
    const validateBody = validation.validateBodyParamsForCreating(req.body);
    if (validateBody) {
      return resp.status(400).json({
        message: validateBody,
        status: "Validation error"
      });
    }

    let requestProductId = req.body.product_id;
    if (!validation.isNumber(requestProductId)) requestProductId = null;

    const newSale = {
      productId: requestProductId || 2,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      profileId: req.auth_token.profile.id
    };

    const { productId, name, price, quantity, profileId } = newSale;

    // Create sale
    dbConfig.query(
      "INSERT INTO sales (product_id, name, price, quantity, profile_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [productId, name, price, quantity, profileId],
      (err, res) => {
        if (err) {
          return next(err);
        }

        // SPIT OUT ERROR FOR UNKNOWKN PROD_ID FROM FOREGIN KEY
        return resp.status(201).json({
          newSale: res.rows[0],
          message: "Sale created Successfully"
        });
      }
    );
  }
}

export default salesController;
