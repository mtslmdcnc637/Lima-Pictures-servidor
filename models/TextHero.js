const mongoose = require("mongoose");
const TextHero = mongoose.model('Service', {
    text: String,
})

module.exports = TextHero