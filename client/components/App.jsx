import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home.jsx';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    color: #303030;
  }
  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App;