const express = require("express");
const router = express.Router();
const { createMovie, updateMovie, deleteMovie, updateMovieRating, addCommentToMovie, filterMovies } = require("../controllers/movie.controller");
const movieValid = require("../middlewares/movie_middlewares");
const isAdmin = require("../middlewares/isAdmin");

router.post("/create", movieValid, createMovie);
router.patch("/movie/update/:id",updateMovie)

router.delete("/movie/delete/:id",isAdmin,deleteMovie)
router.patch("/rating/:id", updateMovieRating);
router.patch("/comment/:id", addCommentToMovie);

router.get("/filter", filterMovies);


module.exports = router;
