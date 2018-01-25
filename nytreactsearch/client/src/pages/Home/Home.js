import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Results from "../../components/Results";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {
  state = {
    articles: [],
    topic: "cats",
    startYear: "2017",
    endYear: "2018"
  };

  findArticles = event => {
  	event.preventDefault();

  	API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
		.then(res => {
			this.setState({ articles: res.data.docs})
			console.log(this.state.articles);
		})
	  	.catch(err => console.log(err));
  }

	render() {
		return (
		    <Container>
            	<Jumbotron>
					<h1 className="text-center">New York Times Article Scrubber</h1>
					<h2 className="text-center">Search for and annotate articles of interest!</h2>
            	</Jumbotron>
		        <Row>
		        	<Col size="sm-12">
		          		<div className="panel panel-primary">
          					<div className="panel-heading">
            					<h3 className="panel-title text-center"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
          					</div>
          					<div className="panel-body">
					            <form role="form">
	              					<div className="form-group">
	                					<label htmlFor="search">Topic:</label>
	                					<input type="text" className="form-control" id="topic"></input>
	              					</div>

	              					{/*<div className="form-group">
	                					<label for="pwd">Number of Records to Retrieve:</label>
	                					<select className="form-control" id="num-records-select">
											<option value="1">1</option>
											<option value="5" selected>5</option>
											<option value="10">10</option>
										</select>
	              					</div>*/}

	              					<div className="form-group">
	                					<label htmlFor="start-year">Start Year:</label>
	                					<input type="text" className="form-control" id="start-year"></input>
	              					</div>
	              					<div className="form-group">
	                					<label htmlFor="end-year">End Year:</label>
	                					<input type="text" className="form-control" id="end-year"></input>
	              					</div>
	              					<button type="submit" onClick={this.findArticles} className="btn btn-primary" id="run-search"><i className="fa fa-search"></i> Search</button>
	              					{/*<button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>*/}

            					</form>
          					</div>
        				</div>
		          	</Col>
		        </Row>
		        <Row>
					<Col size="sm-12">
		          		<Results />
		          	</Col>
		        </Row>
		    </Container>
	    );
	}
}

export default Home;