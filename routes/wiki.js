const express = require('express');
const wikiRouter = express.Router();
const addPage = require('../views/addPage')
const {Page} = require('../models')


wikiRouter.use(express.urlencoded({ extended: false }));

wikiRouter.get("/", (req, res, next) => {
    console.log("first get");
    res.end()
    
} )

// wikiRouter.post('/', (req, res, next) => {
//     console.log("first post")
// })

wikiRouter.get('/add', (req, res, next) => {
    res.send(addPage());
})

wikiRouter.post('/', async (req, res, next) => {

    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
    const page = new Page({
      title: req.body.title,
      content: req.body.content
    });
  
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise.
    try {
      await page.save();
      res.redirect('/');
    } catch (error) { next(error) }
  });




module.exports = wikiRouter;