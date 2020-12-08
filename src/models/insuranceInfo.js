const mongoose = require('mongoose');

const InsuranceInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please enter name.']
    },
    age: {
        type: Number,
        required: [true, 'Please add positive number']
    },
    contact_number: {
        type: String,
        required: [true, 'Please add positive number']
    },
    car_model: {
        type: String,
        trim: true,
        required: [true, 'Please enter car model name']
    },
    car_make_year: {
        type: String,
        trim: true,
        required: [true, 'Please enter car make year']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('InsuranceInfo', InsuranceInfoSchema);