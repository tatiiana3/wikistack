const express = require('express');
const morgan = require('morgan');
const HTML = require('html-template-tag');
const layout = require('./views/layout');
const app = express();
const {db} = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user')



app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter)

const syncdb = async () => {
    await db.sync({ force: true });
}

 syncdb();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(layout(""));
})

app.get('/', (req, res) => {
    res.redirect('/wiki');
})


app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });