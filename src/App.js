import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    console.log(props);
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <div>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </div>
    );
  }
}

export default App;
