import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class Dashboard extends Component {
    login = () => {
        this.props.history.push('dashboard');
    }
    render() {
        return (
            <div id="login" className="row justify-content-center">
                <div className="signin-form p-5 col-xl-3">
                    <div className="card">
                        <div className="card-block">
                            <form className="k-form">
                                <h1 id="app-title" className="mb-0">REACT DASHBOARD</h1>
                                <h4 id="app-subtitle" className="mb-4">Login Form</h4>
                                <hr className="k-hr" />
                                <div className="form-group mt-4">
                                    <InputLabel>Username</InputLabel>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group mb-4">
                                    <InputLabel>Password</InputLabel>
                                    <Input type="password" className="form-control" />
                                    <p className="text-xs-right small">
                                        <a>Forgot it?</a>
                                    </p>
                                </div>
                                <div className="form-group text-right">
                                    <Button color='primary' onClick={this.login}>Log in</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
