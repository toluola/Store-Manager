import { Client } from "pg";
import dotenv from "dotenv";
import setupTables from "./dbqueries";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const client = new Client(connectionString);
client.connect();
client.query(setupTables, error => {
	console.log("error", error);
	client.end();
});
