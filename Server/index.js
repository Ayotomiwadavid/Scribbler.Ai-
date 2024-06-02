const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const router = require('./Routers/subscription');

const app = express();

app.listen(process.env.PORT || 5000, () => {
    console.log('App is listening on port', process.env.PORT);
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.get('/', (req, res) => {
    console.log("you're now connected to home page")
});