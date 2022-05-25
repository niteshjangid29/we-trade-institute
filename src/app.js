const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//  public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/J&A_Academy');
}

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    city: String,
    message: String,
    check: Boolean
}, { versionKey: false });

const Contact = mongoose.model('Contact', contactSchema);
// app.use(express.urlencoded());
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

app.post('/contact', (req, res) => {
    let myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    })
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})










const userSchema = new mongoose.Schema({
    username: String,
    password: Number
}, {
    versionKey: false //here
});

const userModel = mongoose.model('userModel', userSchema);



app.post("/about-us", (req, res) => {

    let newUser = new userModel(req.body);
    newUser.save().then(() => {
        console.log("login data stored successfully.")
    }).catch(() => {
        console.log("login data not stored.")
    });

});
