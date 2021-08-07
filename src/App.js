import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import './App.css';
import MainPage from './pages/MainPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Flashcard from './components/Flashcard';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({ basename: '/flash-cards' });

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path="/:name" component={Flashcard} />;
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
