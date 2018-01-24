import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Results from "../../components/Results";
import SavedArticles from "../../components/SavedArticles";
//import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Saved extends Component {
  state = {
    saved: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  findArticles = event => {
  	event.preventDefault();

  	// API.findArticles("Trump", 2017, 2018)
  	// .then(res =>
  	// 	console.log(res)
  	// )
  	// .catch(err => console.log(err));
  }

	render() {
		return (
		    <Container>
            	<Jumbotron>
					<h1 className="text-center">Saved Pages</h1>
            	</Jumbotron>
		        <Row>
					<Col size="sm-12">
		          		<SavedArticles />
		          		{/*{this.state.saved.length ? (
              				<List>
                				{this.state.saved.map(article => (
                  					<ListItem key={article._id}>
	                    				<Link to={"/books/" + article._id}>
	                      					<strong>
	                        					{article.title} by {article.author}
	                      					</strong>
	                    				</Link>
                    					{/*<DeleteBtn onClick={() => this.deleteBook(book._id)} />*/}
                  					{/*</ListItem>
                				))}
              				</List>
            			) : (
              				<h3>No Results to Display</h3>
            			)}*/}
		          	</Col>
		        </Row>
		    </Container>
	    );
	}
}

export default Saved;