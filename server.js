const express = require("express");
const app = express();
const port = 3000;
const bodyParser=require("body-parser")
const ejs=require("ejs")
const https = require("https");

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', require('./routes/indexRouter.js'))
app.use('/menu', require('./routes/menuRouter.js'))
app.use('/about', require('./routes/aboutRouter.js'))
app.use('/contact', require('./routes/contactRouter.js'))
app.use('/booking', require('./routes/bookingRouter.js'))

// app.get('/',((req, res) => {
//     res.sendFile(__dirname+'/public/index.html');
// }))
//
// app.get('/menu',((req, res) => {
//     res.sendFile(__dirname+'/public/menu.html')
// }))
//
// app.get('/about',((req, res) => {
//     res.sendFile(__dirname+'/public/about.html')
// }))
//
// app.get('/contact',((req, res) => {
//     res.sendFile(__dirname+'/public/contact.html')
// }))
//
// app.get('/book',((req, res) => {
//     res.sendFile(__dirname+'/public/booking.html')
// }))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
