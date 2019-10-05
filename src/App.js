import React, { Component } from 'react';
import './App.css';
import Wizard from './components/Wizard';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <Container textAlign='center'>
        <Wizard />
      </Container>
    )
  }
}

export default App;
