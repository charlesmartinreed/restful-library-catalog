const express = require("express");
const router = express.Router();
const Author = require("../models/authors");

/*
====================
ROUTE - GET ALL AUTHORS
====================
*/

router.get("/", (req, res) => {
  res.render("authors/index");
});

/*
====================
ROUTE - GET NEW AUTHOR
====================
*/
router.get("/new", (req, res) => {
  res.render("authors/new", {
    author: new Author()
  });
});

/*
====================
ROUTE - POST NEW AUTHOR
====================
*/
router.post("/", async (req, res) => {
  // note that we're grabbing the author name through express' built-in parser - see the app.use call in server.js

  const author = new Author({
    name: req.body.author_name
  });

  try {
    const newAuthor = await author.save();
    //   res.redirect(`authors/${newAuthor.id}`);
    res.redirect("authors");
  } catch (error) {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating new Author"
    });
  }
});

module.exports = router;
