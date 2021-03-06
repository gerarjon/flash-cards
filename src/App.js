import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import './App.css';
import MainPage from './pages/MainPage';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Flashcard from './components/Flashcard';

class App extends Component {
  render() {
    return (
      <Router basename='/flash-cards'>
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
