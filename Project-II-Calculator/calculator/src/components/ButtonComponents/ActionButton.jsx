import React from 'react';
import './Button.css';
import { Col, Button } from 'reactstrap';

export default (props) => {
  return(
    <Col xs={ props.size } className="text-center bg-danger ">
      <Button color="link" onClick={props.handler} className="text-light"><i className={props.action} ></i></Button>
    </Col>
  );
}