import React from 'react';
import './Button.css';
import { Col } from 'reactstrap';

export default (props) => {
  return(
    <Col xs={ props.size } className="text-center" >
      <h1>{ props.number}</h1>
    </Col>
  );
}