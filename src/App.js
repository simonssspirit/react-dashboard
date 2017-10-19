import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <MainMenu />
        <div class="col-xs p-4 py-5">
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/issues" component={Issues}/>
        </div>
      </div>
    );
  }
}

export default App;
