import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';

class Dashboard extends Component {
    static periods = ["3","6","12"];

    render() {
        return (
            <div>
                <HeaderContainer />
            </div>
        );
    }
}

export default Dashboard;
