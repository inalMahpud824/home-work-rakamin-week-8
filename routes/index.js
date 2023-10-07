const {
  getAllFilm,
  getAllFilmById,
  getAllCategory,
  getFilmByCategory,
} = require("../controller/filmController");

const router = require("express").Router();

router.get("/film", getAllFilm);
router.get("/film/:id", getAllFilmById);
router.get("/category", getAllCategory);
router.get("/film/category/:categoryName", getFilmByCategory);
module.exports = router;
