import React, { Component } from 'react';
import Button from './components/Button.js';
import Title from './components/Title.js';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
`;

const Presenter = () => (
  <div>
    <h2>hey</h2>
  </div>
);

const Viewer = () => (
  <div>
    <h2>butt   on</h2>
  </div>
);

const Home = () => (
  <Main>
    <Title description="Join a Meeting!"/>
    <Button name="Presenter" link="/presenter"/>
    <Button name="Viewer" link="/viewer"/>
  </Main>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/presenter" component={Presenter} />
          <Route path="/viewer" component={Viewer} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;