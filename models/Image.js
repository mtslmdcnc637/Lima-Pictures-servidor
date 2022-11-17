const mongoose = require("mongoose");
const Image = mongoose.model('Image', {
    link: String,
    title: String,
    description: String,
})

module.exports = Image