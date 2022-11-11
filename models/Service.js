const mongoose = require("mongoose");
const Service = mongoose.model('Service', {
    icon: String,
    title: String,
    text: String,
})

module.exports = Service