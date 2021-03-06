/* eslint-disable linebreak-style */
import pool from "./dbSetup";

const Migration = {
  async migrate() {
    try {
      /* eslint-disable no-console */
      console.log("Creating table products");
      await pool.query(`drop table if exists products; create table if not exists products (id serial not null constraint products_pkey primary key,name text not null,price integer not null,quantity integer,status text default 'active'::text,cdate timestamp default now() not null);
    `);

      console.log("Creating table profiles");
      await pool.query(`drop table if exists profiles; create table profiles(
        id serial not null constraint profiles_pkey primary key,
        firstname text,
        lastname text,
        email text not null,
        role text default 'store_attendant'::text,
        image text,
        password text not null
      ); create unique index profiles_email_uindex on profiles (email);
     `);

      console.log("Creating table sales");
      await pool.query(`drop table if exists sales; create table sales(
        id serial not null constraint sales_pkey primary key,
        product_id integer constraint sales_products_id_fk references products on update cascade on delete cascade,
        profile_id integer constraint sales_profiles_id_fk references profiles on update cascade on delete cascade,
        name text,description text,
        price numeric(11,2),
        quantity integer,
        cdate timestamp default now() not null
      );
   `);
      await process.exit(0);
    } catch (e) {
      console.log("Caught: ", e.message);
    }
  }
};

export default Migration;

Migration.migrate();
