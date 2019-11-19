const express = require("express");
const router = express.Router();

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
  res.render("authors/new");
});

/*
====================
ROUTE - POST NEW AUTHOR
====================
*/
router.post("/", (req, res) => {
  res.send("Creating Authors");
});

module.exports = router;
