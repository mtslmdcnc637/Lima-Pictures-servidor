const mongoose = require("mongoose");
const Video = mongoose.model('Video', {
    link: String
})

module.exports = Video