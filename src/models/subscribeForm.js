const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
}, { versionKey: false });


// create collection
const Subscribe = mongoose.model('subscribeDetail', subscribeSchema);
module.exports = Subscribe;