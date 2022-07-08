const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
require("./db/conn");
const Contact = require('./models/contactForm');

//  public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// for mongodb connection
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// app.get(route, callback)
// routing
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/faq', (req, res) => {
    res.render('faq');
})

app.get('/learning-videos', (req, res) => {
    res.render('learning-videos');
})

app.get('/contact', (req, res) => {
    res.render('contact-us');
})

app.get('/admission-form', (req, res) => {
    res.render('admission-form');
})

app.get('/about-us', (req, res) => {
    res.render('about-us');
})

app.get('/blogs', (req, res) => {
    res.render('blogs');
})

app.get('/events', (req, res) => {
    res.render('events');
})

app.get('/offers', (req, res) => {
    res.render('offers');
})

app.get('/our-course', (req, res) => {
    res.render('our-course');
})

app.get('/study-material', (req, res) => {
    res.render('study-material');
})

app.get('/upcoming-events', (req, res) => {
    res.render('upcoming-events');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg: 'OOPS! Page Not Found'
    });
})

app.post('/', async (req, res) => {
    try{
        // console.log(req.body.name)
        // res.send(req.body.name);
        const contactData = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            message: req.body.message,
        })
        const contacted = await contactData.save();
        res.status(201).render("index");

    } catch(error) {
        res.status(400).send(error);
    }
    // let myData = new Contact(req.body);
    // myData.save().then(() => {
    //     res.send("This item has been saved to the database")
    // }).catch(() => {
    //     res.status(400).send("Item was not saved to the database")
    // })
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})










// const userSchema = new mongoose.Schema({
//     username: String,
//     password: Number
// }, {
//     versionKey: false //here
// });


// app.post("/about-us", (req, res) => {

//     let newUser = new userModel(req.body);
//     newUser.save().then(() => {
//         console.log("login data stored successfully.")
//     }).catch(() => {
//         console.log("login data not stored.")
//     });

// });
