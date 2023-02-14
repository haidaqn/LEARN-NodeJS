const express = require('express');
const {engine} = require('express-handlebars')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const router = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));


// Template engine
app.engine('hbs', engine({extname: '.hbs'})); // hbs new 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// method
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
