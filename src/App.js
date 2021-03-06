import React, { Component } from 'react';

import {  BrowserRouter,
          Route,
          Switch } from 'react-router-dom';

import {  Presenter,
          Viewer,
          MainViewViewer,
          Home } from './containers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/mainviewviewer" component={MainViewViewer} />
          <Route path="/presenter" component={Presenter} />
          <Route path="/viewer" component={Viewer} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
