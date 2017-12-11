import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MainMenu from './components/MainMenu';

/* import logo from './logo.svg'; */
import './App.css';

class App extends Component {
  render() {
    const MainMenuRouter = withRouter(props => <MainMenu {...props} />);
    return (
      <div>
        <MainMenuRouter />
      </div>
    );
  }
}

export default App;
