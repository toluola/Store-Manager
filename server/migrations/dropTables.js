import { Client } from "pg";
import dotenv from "dotenv";
import { dropTables } from "./dbqueries";

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const client = new Client(connectionString);
client.connect();
client.query(dropTables, error => {
	console.log("error", error);
	client.end();
});

