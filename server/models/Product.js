import client from "../helpers/connection";

export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  async save() {
    const productQuery =
      "INSERT INTO Products (name, price, quantity ) VALUES($1, $2, $3) RETURNING *";
    const addProduct = await client.query(productQuery, [
      this.name,
      this.price,
      this.quantity
    ]);
    return addProduct.rows[0];
  }

  static async find() {
    const fetchProducts = await client.query(`SELECT * FROM Products`);
    return fetchProducts.rows;
  }

  static async findById(id) {
    const fetchProduct = await client.query(
      `SELECT * FROM Products WHERE "product_id" = ${id}`
    );
    if (fetchProduct.rowCount === 0) throw new Error("Product not found");
    return fetchProduct.rows[0];
  }
}
