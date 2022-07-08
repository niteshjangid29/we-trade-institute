const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    address1: {
        type: String,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipcode: {
        type: Number,
    },
    country: {
        type: String,
    },
    profession: {
        type: String,
    },
    salary: {
        type: String,
    },
    whyTrading:  {
        type: String,
    },
    trade:  {
        type: String,
    },
    demateAccount:  {
        type: String,
    },
    returnInYear:  {
        type: String,
    },
}, { versionKey: false });


// create collection
const Admission = mongoose.model('admissionDetail', admissionSchema);
module.exports = Admission;