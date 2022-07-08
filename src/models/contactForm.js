const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    city: {
        type: String,
    },
    message: {
        type: String,
    },
    check: {
        type: String,
    }
}, { versionKey: false });


// create collection
const Contact = mongoose.model('contactDetail', contactSchema);
module.exports = Contact;