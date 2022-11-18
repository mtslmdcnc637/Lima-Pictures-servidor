const mongoose = require('mongoose');
const Audio = mongoose.model('Audio', {
    link: String
})
module.exports = Audio