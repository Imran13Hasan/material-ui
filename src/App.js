import React from 'react';
import './App.css';
import Posts from '../src/Components/Posts/Posts'
import Header from './Components/Header/Header';
import Details from './Components/Details/Details';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {

  return (
    <Router>
      <Header></Header>

      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path="/details/:link">
          <Details />
        </Route>
        <Route></Route>
        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
