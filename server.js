if (process.env.NODE_ENV !== "production") {
  // get all the variables from our env file and expose them, when in local development mode
  require("dotenv").config();
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");

const app = express();

/*
======================
VIEW ENGINE SETUP
======================
layout file is basically the boilerplate that should be used on every page - nav, header, footer, etc...

views folder is for server rendered content, public folder is for site assets
*/

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

/*
======================
MONGODB/MONGOOSE SETUP
======================
*/
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Now connected to Mongoose"));

/*
======================
PATH ROUTES
======================
*/
app.use("/", indexRouter);

/*
======================
SERVER START
======================
*/

app.listen(process.env.PORT || 3000);
