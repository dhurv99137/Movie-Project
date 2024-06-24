const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  value: {
    type: Number,
    min: 0,
    max: 10,
  }
});

const commentSchema = new mongoose.Schema({
  text: String,
});

const actorSchema = new mongoose.Schema({
  name: String,
});

const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Number,
  category: String,
  actors: [actorSchema],
  image: String,
  ratings: [ratingSchema],
  comments: [commentSchema],
  addedBy: String,
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
