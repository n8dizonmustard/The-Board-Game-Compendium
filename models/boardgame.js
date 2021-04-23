const mongoose = require('mongoose');

const boardgameSchema = new mongoose.Schema({
    name: String,
    year: Number,
    minPlayers: Number,
    maxPlayers: Number,
    categories: [],
    price: String,
    description: String,
    image: String,
    rating: Number,
    minPlayTime: Number,
    maxPlayTime: Number,
    minAge: Number,
    publisher: String
})