import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Dashboard extends Component {
    login = () => {
        this.props.history.push('dashboard');
    }
    render() {
        return (
            <div>
                <div className="signin-form p-5">
                    <h1 id="app-title">ISSUES</h1>
                    <p id="app-subtitle">SAMPLE DASHBOARD</p>
                    <hr/>
                    <div className="form-group mt-4">
                        <Input type="text" placeholder="Email or Username" />
                    </div>
                    <div className="form-group mb-4">
                        <Input type="password"  placeholder="Password" />
                        <p className="text-xs-right small">
                            <a>Forgot it?</a>
                        </p>
                    </div>
                    <div className="form-group">
                        <Button color='primary' onClick={this.login}>Log in</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
