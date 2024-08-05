const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const localhost='http://127.0.0.1:3000'
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Excellence', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const Booking = require('./models/Booking');

// Express specific stuff
app.use('/static',express.static('static'));
// app.use(express.urlencoded());

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     res.status(200).render('index.pug')
// })

// app.get('/about', (req, res) => {
//     res.status(200).render('about.pug')
// })
// app.get('/contact', (req, res) => {
    //     res.status(200).render('contact.pug')
    // })
app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'static', 'index.html'));
    })
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'contact.html'));
});

app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'booking.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/booking', async (req, res) => {
    console.log("Received data:", req.body);
    const { name, email, phone, date, message } = req.body;
    try {
        // Create a new booking instance
        const newBooking = new Booking({
            name,
            email,
            phone,
            date,
            message
        });

        // Save the booking to the database
        await newBooking.save();

        // Send a success response
        res.status(200).send('Booking submitted successfully!');
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).send('Error submitting booking.');
    }
})
app.listen(port, () => {
    console.log(`Example app listening ${localhost} on port ${port}`)
})