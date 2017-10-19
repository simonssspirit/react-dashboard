import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';
import Signin from './components/Signin';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    const MainMenuRouter = withRouter(props => <MainMenu {...props} />);
    return (
      <div>
        <MainMenuRouter />
        <div className="col-xs p-4 py-5">
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/issues" component={Issues}/>
          <Route path="/signin" component={Signin}/>
        </div>
      </div>
    );
  }
}

export default App;
