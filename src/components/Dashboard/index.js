import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import ChartsContaner from './ChartsContaner';

class Dashboard extends Component {
    static periods = ["3","6","12"];

    render() {
        return (
            <div>
                <HeaderContainer />
                <ChartsContaner />
            </div>
        );
    }
}

export default Dashboard;
