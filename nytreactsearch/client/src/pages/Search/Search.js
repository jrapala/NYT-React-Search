import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Search extends Component {
	render() {
		return (
			<div>
			<Header />
	      	<Container fluid>
	        	<Row>
	          		<Col size="md-10">
	          		</Col>
	          	</Row>
	          	<Row>
	          		<Col size="md-6">
	          		</Col>
	        	</Row>
	      	</Container>
	      	</div>
	    );
	}
}

export default Search;