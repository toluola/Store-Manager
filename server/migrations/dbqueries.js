const entries = `
CREATE TABLE IF NOT EXISTS Products(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price INT NOT NULL, 
  quantity INT NOT NULL, 
);`;

const dropTables = `
DROP TABLE IF EXISTS authentication cascade;
DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS entries cascade;
DROP TABLE IF EXISTS "notificationStatus" cascade;`;

export default `${entries}`;
export { dropTables };
