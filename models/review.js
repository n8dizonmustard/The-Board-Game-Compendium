const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content: String,
    date: Date,
    userRating: Number
})