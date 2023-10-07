const pool = require("../query");

const getAllFilm = async (req, res) => {
  try {
    const result = await pool.query("select * from film");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
};

const getAllFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM film WHERE film_id=${id} `);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM category `);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
};

const getFilmByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const result = await pool.query(
      `SELECT film.title AS judul_film, category.name AS kategori
        FROM film
        INNER JOIN film_category ON film.film_id = film_category.film_id
        INNER JOIN category ON film_category.category_id = category.category_id
        WHERE category.name = '${categoryName}'; `
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllFilm, getAllFilmById, getAllCategory, getFilmByCategory };
