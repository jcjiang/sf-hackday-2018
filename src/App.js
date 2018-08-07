import React, { Component } from 'react';
import Button from './components/Button.js';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Button name="Presenter"/>
        <Button name="Viewer"/>
      </Main>
    );
  }
}

export default App;
