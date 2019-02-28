import React from 'react';
import './Button.css';
import { Col, Button } from 'reactstrap';

export default (props) => {
  return(
    <Col xs={ props.size } className="text-center border border-grey align-middle" >
      <Button color="link" className="text-dark" onClick={props.handler} ><h1>{ props.number}</h1></Button>
    </Col>
  );
}