const mongoose = require("mongoose");

/*
====================
MONGOOSE SCHEMAS
We create the schema here, export for use in other modules
====================
 */

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Author", authorSchema);
