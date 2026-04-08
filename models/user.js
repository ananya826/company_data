const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cin: {
        type: String,
        default: null,
        required: true,
        unique: true
    },
    company_name: {
        type: String,
        default: null,
        required: true
    },
    status: {
        type: String,
        default: null,
        required: true
    },
    incorporation_date: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        default: null,
        required: true
    },
    director_1: {
        type: String,
        default: null,
        required: true
    },
    director_2: {
        type: String,
        default: null
    },
    paid_up_capital: {
        type: String,
        default: null,
        required: true
    },
    last_filing_date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        default: null,
        required: true,
        unique: true
    }
});
//User is model name and userSchema is the schema we created above
module.exports = mongoose.model('users', userSchema);