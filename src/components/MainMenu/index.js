import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';

import Dashboard from './../Dashboard';
import IssuesIndex from './../Issues';
import Signin from './../Signin';
import Profile from './../Profile';
import { withGithubUser, withGithubApi } from './../Github';

class MainMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            showNav: props.location.pathname !== '/signin',
            year: (new Date()).getFullYear()
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <div id="app" className="app container-fluid">
            <div className="row">
                <div id="top-bar" className="top-bar col-xs-12 bg-dark d-md-none"></div>
                {
                    this.state.showNav ?

                    <div id="nav" className="col-xs-3 material-color text-white py-5 k-vbox">
                        <h3 id="app-title">Issues</h3>
                        <p id="app-subtitle">Sample Dashboard</p>
                        <hr className="k-hr"/>
                        <p className="h4 mt-5">Project</p>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item" id="dashbaord">
                                <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                            </li>
                            <li className="nav-item" id="issues">
                                <NavLink to="/issues" className="nav-link" activeClassName="active">Issues</NavLink>
                            </li>
                        </ul>
                        <p className="h4 mt-5">Account</p>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item" id="profile">
                                <NavLink to="/profile" className="nav-link" activeClassName="active">My Profile</NavLink>
                            </li>
                            <li className="nav-item" id="signout">
                                <NavLink to="/signin" className="nav-link" activeClassName="active">Sign Out</NavLink>
                            </li>
                        </ul>
                        <hr className="k-flex" />
                        <div id="copy">
                            <p>Copyright &copy; {this.state.year},<br /><a href="http://www.progress.com">Progress Software Corporation</a> and/or its subsidiaries or affiliates.</p>
                            <p>All Rights Reserved.</p>
                        </div>
                    </div >
                    : null
                }
                <div className="col-xs p-4 py-5 container-body">
                    {this.props.location.pathname === '/' ? <Redirect from="/" to="dashboard" /> : null }
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/issues" component={IssuesIndex} />
                    <Route path="/profile" component={withGithubApi(withGithubUser(Profile))} />
                    <Route path="/signin" component={Signin} />
                 </div>
            </div>
            </div>
        );
    }
}

export default MainMenu