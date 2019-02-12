import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton'

class App extends Component {
  constructor (atr){
    super(atr);
    this.state = {
      number: 0
    };
  }
  
  render(){
    return (
      <div>
        {/* <h3>Welcome to React Calculator</h3>
        <p>
          We have given you a starter project. You'll want to build out your
          components in their respective files, remove this code and replace it
          with the proper components.
        </p>
        <p>
          <strong>
            Don't forget to `default export` your components and import them here
            inside of this file in order to make them work.
          </strong>
        </p> */}
        <Container>
          <Row>
            <CalculatorDisplay number={this.state.number} />
          </Row>
          <Row>
            <NumberButton number="Clear" size="9" />
            <ActionButton action="fas fa-divide fa-4x" size="3" />
            <NumberButton number="9" size="3" />
            <NumberButton number="8" size="3" />
            <NumberButton number="6" size="3"/>
            <ActionButton action="fas fa-times fa-4x" size="3" />
            <NumberButton number="7" size="3" />
            <NumberButton number="5" size="3" />
            <NumberButton number="4" size="3" />
            <ActionButton action="fas fa-minus fa-4x" size="3" />
            <NumberButton number="3" size="3" />
            <NumberButton number="2" size="3" />
            <NumberButton number="1" size="3" />
            <ActionButton action="fas fa-plus fa-4x" size="3" />
            <NumberButton number="0" size="9" />
            <ActionButton action="fas fa-equals fa-4x" size="3" />
          </Row>
        </Container>
      </div>
    );
  }
};

export default App;
