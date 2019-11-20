const express = require("express");
const router = express.Router();
const Author = require("../models/authors");

/*
====================
ROUTE - GET ALL AUTHORS
====================
*/

router.get("/", async (req, res) => {
  let searchOptions = {};

  // get request sends information through query strings, post sends through the body
  if (req.query.author_name !== null && req.query.author_name !== "") {
    // case insensitive, allows partial searches
    searchOptions.name = new RegExp(req.query.author_name, "i");
  }
  try {
    // passing the object with no conditions (empty object) grabs all the authors
    const authors = await Author.find(searchOptions);

    res.render("authors/index", {
      authors: authors,
      searchOptions: req.query
    });
  } catch (error) {
    // database not accessible
    console.log(error);
    res.redirect("/", {
      errorMessage: "Database not currently accessible"
    });
  }
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
