import axios from "axios";

export default {
  findArticles: function(query, begin_date, end_date) {
    return axios.get("/api/articles", 
    	{ params: 
    		{ 
    			query: query,
    			begin_date: begin_date,
    			end_date: end_date
    		}
    	}
    );
  }
};



