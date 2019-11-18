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
