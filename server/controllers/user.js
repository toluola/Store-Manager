import jwt from "jsonwebtoken";
import profiles from "../database/dbSetup";
import helpers from "./Helpers";

const { JWT_SECRET } = process.env;

class userController {
	static login(req, resp, next) {
		req.checkBody("email").isEmail();
		const errors = req.validationErrors();
		if (errors) {
			return resp.status(422).json({ errors });
		}
		const { email, password } = req.body;

		profiles.query(
			"SELECT * FROM profiles WHERE email = $1",
			[email],
			(err, res) => {
				if (err) {
					return next(err);
				}

				if (res.rows.length > 0) {
					if (
						!helpers.comparePassword(res.rows[0].password, password)
					) {
						return resp.status(400).json({
							message:
								"Password: authentication failed. Try later"
						});
					}
					// Don't payload user password
					res.rows[0].password = null;

					const payload = {
						profile: res.rows[0]
					};

					const token = jwt.sign(payload, JWT_SECRET, {
						expiresIn: "24h"
					});

					resp.status(201).json({
						message: "User logged in successfully",
						token
					});
				} else {
					resp.status(403).json({
						message: "Email: authentication failed. Try later"
					});
				}
			}
		);
	}

	static signup(req, resp, next) {
		req.checkBody("email").isEmail();
		req.checkBody("firstname").isLength({ min: 1 });
		req.checkBody("lastname").isLength({ min: 1 });
		req.checkBody(["password"]).isLength({ min: 5 });
		const errors = req.validationErrors();
		if (errors) {
			return resp.status(422).json({ errors });
		}
		const { firstname, lastname, email, password } = req.body;
		const role = "store_attendant";

		const hashPassword = helpers.hashPassword(password);

		profiles.query(
			"INSERT INTO profiles (firstname, lastname,email,role, password )VALUES ($1, $2, $3, $4, $5 ) returning (id, firstname, lastname,email,role)",
			[firstname, lastname, email, role, hashPassword],
			(err, res) => {
				if (err) {
					return resp.status(403).json({
						message: "Registration failed. Try later",
						error: err.message
					});
				}
				resp.status(201).json({
					profile: res.rows[0],
					message: "Store attendant created successfully"
				});
			}
		);
	}
}

export default userController;
