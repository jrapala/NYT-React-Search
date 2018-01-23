import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Search extends Component {
	render() {
		return (
		    <Container>
            	<Jumbotron>
					<h1 className="text-center">New York Times Article Scrubber</h1>
					<h2 className="text-center">Search for and annotate articles of interest!</h2>
            	</Jumbotron>
		        <Row>
		        	<Col size="sm-12">
		          		<SearchForm />
		          	</Col>
		        </Row>
		        <Row>
					<Col size="sm-12">
		          		<Results />
		          	</Col>
		        </Row>
		        <Row>
					<Col size="sm-12">
		          		<Saved />
		          	</Col>
		        </Row>
		    </Container>
	    );
	}
}

export default Search;