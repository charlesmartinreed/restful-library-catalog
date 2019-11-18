/*
==================
INDEX ROUTES
==================
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // this will render our index.ejs file
  res.render("index");
});

router.get("/users", (req, res) => {
  res.send(JSON.stringify([1, 2, 3]));
});

module.exports = router;
