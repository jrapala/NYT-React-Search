import axios from "axios";

export default {
  // Find Articles
  findArticles: function(topic, startYear, endYear) {

    // SETUP VARIABLES
    // ==========================================================

      const AUTH_KEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

      // These variables will hold the results we get from the user's inputs via HTML
      const TOPIC = topic;
      const NUM_RESULTS = 5;
      const START_YEAR = startYear;
      const END_YEAR = endYear;

      const QUERY_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${AUTH_KEY}&q=${TOPIC}&begin_date=0101${START_YEAR}&end_date=0101${END_YEAR}`

      // Counter to keep track of article numbers as they come in
      let articleCounter = 0;

    // FUNCTIONS
    // ==========================================================


      function runQuery(numArticles, queryURL) {
        axios.get(queryURL)
        .then(function(NYTData) {
          console.log(NYTData);
        })
      }

    return runQuery(NUM_RESULTS, QUERY_URL);
  }
  
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
