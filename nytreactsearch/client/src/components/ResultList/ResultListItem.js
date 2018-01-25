import React from "react";
import { Container, Row, Col } from "../Grid";

export const ResultListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3><a href={props.href} target="_blank">{props.title}</a></h3>
          <p>{props.snippet}</p>
        </Col>
      </Row>
    </Container>
  </li>
);
