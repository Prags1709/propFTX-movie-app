const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    title: { type: String, required: true },
    posterUrl: { type: String, required: true },
    year: { type: Number, required: true },
    certificate: { type: String, required: true },
    genre: [{ type: String, required: true }],
    director: { type: String, required: false },
    actors: [{ type: String, required: false }],
    rating: { type: String, required: false },
});

const MovieModel = mongoose.model("movie", movieSchema)

module.exports = {MovieModel}