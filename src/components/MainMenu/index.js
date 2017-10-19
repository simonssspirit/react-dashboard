import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class MainMenu extends Component {
    constructor() {
        super();

        this.state = {
            showNav: true,
            year: (new Date()).getFullYear()
        }
    }

    render() {
        return (
            <div class="row">
                <div id="top-bar" class="top-bar col-xs-12 bg-inverse d-md-none"></div>
                {
                    this.state.showNav ?
                    <div id="nav" class="col-xs-3 bg-inverse text-white py-5 k-vbox">
                        <p class="h4 mt-5">Project</p>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item" id="dashbaord">
                                <Link to="/dashboard" class="nav-link">Dashboard</Link>
                            </li>
                            <li class="nav-item" id="issues">
                                <Link to="/issues" class="nav-link">Issues</Link>
                            </li>
                        </ul>
                        <p class="h4 mt-5">Account</p>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item" id="profile">
                                <Link to="/profile" class="nav-link">My Profile</Link>
                            </li>
                            <li class="nav-item" id="signout">
                                <Link to="/signin" class="nav-link">My Sign Out</Link>
                            </li>
                        </ul>
                        <hr class="k-flex" />
                        <div id="copy">
                            <p>Copyright &copy; {this.state.year},<br /><a href="http://www.progress.com">Progress Software Corporation</a> and/or its subsidiaries or affiliates.</p>
                            <p>All Rights Reserved.</p>
                        </div>
                    </div >
                    : null
                }
            </div >
        );
    }
}

export default MainMenu