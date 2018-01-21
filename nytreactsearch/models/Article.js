const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Creating an Article Schema object
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique : true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  url: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
    default: "No snippet available."
  }
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", nytreact);

// Export the Article model
module.exports = Article;
