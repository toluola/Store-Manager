/* eslint-disable linebreak-style */
import pool from "./dbSetup";

const Seed = {
  async seedr() {
    try {
      /* eslint-disable no-console */

      console.log("Dumping table profiles");
      await pool.query(`
      INSERT INTO profiles (firstname, lastname, email, role, image, password) VALUES 
        ('Tolu', 'Olaniyan', 'toluola7@gmail.com', 'admin', 'images/pix1.png', '$2b$05$trEqCsQFMC7N.gVK2yM39eLonMNsei8vdoCBfGGVOtnjWFRmCzvA6');
    `);
      await process.exit(0);
    } catch (e) {
      console.log("Caught: ", e.message);
    }
  }
};

export default Seed;

Seed.seedr();
