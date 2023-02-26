const express = require('express');
const {engine} = require('express-handlebars')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const router = require('./routes/index');
const methodOverride = require('method-override')

const db = require('./config/db/index');
// connect to db

db.connect();

app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded());
app.use((methodOverride('_method')));
// Template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum : (a,b) => a+b,
  }
})); // hbs new
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// method
router(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
