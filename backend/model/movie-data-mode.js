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

movieSchema.index({
    title: "text", 
    posterUrl: "text", 
    year: "text", 
    certificate: "text", 
    genre: "text", 
    director: "text", 
    actors: "text", 
    rating: "text" 
});

const MovieModel = mongoose.model("movie", movieSchema)

module.exports = {MovieModel}