import React from 'react';
import './Button.css';
import { Col, Button } from 'reactstrap';

export default (props) => {
  return(
    <Col xs={ props.size } className="text-center bg-primary ">
      <Button color="link" className="text-light"><i className={props.action} ></i></Button>
    </Col>
  );
}