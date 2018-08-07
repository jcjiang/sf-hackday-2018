import React, { Component } from 'react';
import Button from './components/Button.js';
import Title from './components/Title.js';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Title description="Join a Meeting!"/>
        <Button name="Presenter"/>
        <Button name="Viewer"/>
      </Main>
    );
  }
}

export default App;