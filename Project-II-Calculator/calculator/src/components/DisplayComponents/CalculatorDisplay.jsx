import React from 'react';
import './Display.css';
import { Col, Button } from 'reactstrap';

const Display = props => {
  return (
    <Col xs="12" className="bg-dark text-light text-right py-4">
      <h1>{props.number}</h1>
    </Col>
  );
}

export default Display;