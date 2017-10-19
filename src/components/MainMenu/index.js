import React, { Component } from 'react';

class MainMenu extends Component {
    constructor() {
        super();

        this.state = {
            showNav = true
        }
    }

    render() {
        return (
            <div class="row">
                <div id="top-bar" class="top-bar col-xs-12 bg-inverse d-md-none"></div>
                <div id="nav">

                </div>
            </div>
        );
    }
}

export default MainMenu