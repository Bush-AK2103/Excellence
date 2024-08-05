const mongoose = require('mongoose');

// Define the schema
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    message: { type: String }
});

// Create a model from the schema
const Booking = mongoose.model('Booking', bookingSchema);
const Arya = new Booking({ name: 'Aya' });
// console.log(Arya.name); 

module.exports = Booking;
