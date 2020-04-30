const express = require('express');
const morgan = require('morgan');
const HTML = require('html-template-tag');
const layout = require('./views/layout');
const app = express();
const {db} = require('./models');


db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


const PORT = 3000;




app.get("", (req, res) => {
    res.send(layout(""));
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });