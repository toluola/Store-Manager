import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../helpers/connection";

export default class User {
	constructor({ fullName, email, username, password }) {
		this.fullName = fullName;
		this.email = email ? email.toLowerCase() : email;
		this.username = username ? username.toLowerCase() : username;
		this.password = password;
	}

	static async remove(username) {
		const removeUser = await client.query(
			`DELETE FROM authentication WHERE username='${username}' RETURNING id, username`
		);
		return removeUser;
	}

	async save() {
		this.password = await bcrypt.hash(this.password, 5);
		const queryAuthentification =
			"INSERT INTO authentication(username, password) VALUES($1, $2) RETURNING id";
		const addUserQuery =
			'INSERT INTO users("fullName", email, "authId") VALUES($1, $2, $3) RETURNING id';
		try {
			const addAuthentication = await client.query(
				queryAuthentification,
				[this.username, this.password]
			);
			this.authId = addAuthentication.rows[0].id;
			const addUser = await client.query(addUserQuery, [
				this.fullName,
				this.email,
				this.authId
			]);
		} catch (error) {
			if (
				error.message ===
				'duplicate key value violates unique constraint "authentication_username_key"'
			)
				error.message =
					"username has been chosen, please choose another username";
			if (
				error.message ===
				'duplicate key value violates unique constraint "users_email_key"'
			) {
				await User.remove(this.username);
				error.message =
					"email has been chosen, please choose another email";
			}
			throw error;
		}
		return this.strip();
	}

	async login() {
		const authQuery = `SELECT users.id, authentication.password, authentication.username, users."fullName", users.email FROM authentication 
    INNER JOIN users ON users."authId" = authentication.id 
    WHERE authentication.username = '${this.username}'`;
		const getUser = await client.query(authQuery);
		const user = getUser.rows[0];
		if (!user) throw new Error("invalid credentials");
		const isCorrectPassword = await bcrypt.compare(
			this.password,
			getUser.rows[0].password
		);
		if (isCorrectPassword) {
			this.fullName = user.fullName;
			this.email = user.email;
			this.id = user.id;
			this.token = await this.generateToken();
			return this.strip();
		}
		throw new Error("invalid credentials");
	}

	async generateToken() {
		return jwt.sign(
			{
				exp: (Math.floor(Date.now() / 1000) + 60 * 60) * 24 * 7,
				data: this.strip()
			},
			process.env.JWT_SECRET
		);
	}

	strip() {
		const { password, authId, ...noPassword } = this;
		return noPassword;
	}
}
