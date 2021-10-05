const express = require("express");
const app = express();
const contactRouter = require('./src/routes/contacts');
const path = require('path')

//SET
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

//USE
app.use('/contact', contactRouter)
app.use(express.static(__dirname + '/public'));

//GET
app.get('/', (req, res) => {
    const profile = {
        name: 'Thokozani',
        surname: 'Xaba',
        linkedIn: 'https://www.linkedin.com/in/thokozani-xaba-24b061172/',
        github: 'https://github.com/Thokozani7/'
    } 
    res.render('index', { profile: profile }) });

app.listen(8080);