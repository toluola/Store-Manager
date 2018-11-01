import client from "../helpers/connection";

export default class Sales {
  constructor({ name, price, quantity, created_by }) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.created_by = created_by;
  }

  async save() {
    const salesQuery =
      "INSERT INTO Sales (name, price, quantity, created_by) VALUES($1, $2, $3, $4) RETURNING *";
    const addSales = await client.query(salesQuery, [
      this.name,
      this.price,
      this.quantity,
      this.created_by
    ]);
    return addSales.rows[0];
  }

  static async find() {
    const fetchSales = await client.query(`SELECT * FROM Sales`);
    return fetchSales.rows;
  }

  static async findById(id) {
    const fetchSale = await client.query(
      `SELECT * FROM Sales WHERE "sales_id" = ${id}`
    );
    if (fetchSale.rowCount === 0) throw new Error("Sales not found");
    return fetchSale.rows[0];
  }
}
