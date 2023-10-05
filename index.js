const express = require("express");
const pool = require('./query.js')
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log("server berjalan di server: " + port);
});

app.get("/film", async (req, res) => {
  try {
    const result = await pool.query("select * from film");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/film/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM film WHERE film_id=${id} `);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});
