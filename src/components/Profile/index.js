import React, { Component } from 'react';
import { Button } from '@progress/kendo-react-buttons'
import { Popup } from '@progress/kendo-react-popup';
import { Switch } from '@progress/kendo-inputs-react-wrapper';

class Profile extends Component {
    componentDidMount() {
        console.log('profile mounted');
        let url = this.props.gitUserApiUrl;
        let options = this.props.gitOptions;

        if (typeof(url) !== 'undefined') {
            fetch(url, options)
                .then(response => response.json())
                .then(json => this.setState(json));
        }
    }

    onUpdateClick() {

    }

    onDeleteClick() {

    }

    render() {
        return (
            this.state &&
        <div>
        {/* if userId */}
            <div>
                <div className="row mb-4">
                    <div className="col-sm">
                        <h2>
                            <span className="small text-uppercase text-muted d-block">Account</span>
                            {this.state.login} - {this.state.name}
                        </h2>
                    </div>
                    <div className="col-sm text-sm-right">
                        <Button>Sign out</Button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-7">

                    <div className="card" id="profile">
                        <h3 className="card-header">Public Profile</h3>
                        <div className="card-block">

                            <div className="row">
                                <div className="col-md-3 text-xs-center">
                                    <img src={this.state.avatar_url} style={{'maxWidth': '100%'}} className="img-circle mx-auto" />
                                </div>
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label className="h6">Username</label>
                                        <input type="text" id="username" className="form-control" defaultValue={this.state.login} />
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Name</label>
                                        <input type="text" id="name" className="form-control" defaultValue={this.state.name} />
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Email</label>
                                        <input type="email" id="email" className="form-control" defaultValue={this.state.email} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label h6">
                                            <input type="checkbox" className="form-check-input" defaultChecked /> Keep my email address private
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Company</label>
                                        <input type="text" id="company" className="form-control" defaultValue={this.state.company} />
                                    </div>
                                    <div className="form-group">
                                        <label className="h6">Location</label>
                                        <input type="text" id="location" className="form-control" defaultValue={this.state.location} />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={this.onUpdateClick}>Update profile</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card" id="delete-account">
                        <h3 className="card-header">Delete Account</h3>
                        <div className="card-block">
                            <p>You will immediately lose access to your repositories and all other information associated with your account.
                                <strong>This cannot be undone!</strong>
                            </p>
                            <button className="btn btn-danger" onClick={this.onDeleteClick}>Delete Account</button>
                        </div>
                    </div>

                </div>

                <div className="col-md-5">

                    <div className="card" id="notifications">
                        <h3 className="card-header">Notifications</h3>
                        <div className="card-block">
                            <h4 className="h6">Automatically watch repositories?</h4>
                            <p className="text-muted">When you are given push access to a repository, automatically receive notifications for it.</p>
                            <p>
                                <Switch></Switch>
                            </p>
                            <h4 className="h6">Receive updates to any conversations via email?</h4>
                            <p>
                                <Switch checked={true}></Switch>
                            </p>
                            <h4 className="h6">Receive updates to any repositories via email?</h4>
                            <p>
                                <Switch checked={true}></Switch>
                            </p>
                        </div>
                    </div>
                    <div className="card" id="password">
                        <h3 className="card-header">Update password</h3>
                        <div className="card-block">
                            <div className="form-group">
                                <label className="h6">Old password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="h6">New password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="h6">Confirm password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                            <button className="btn btn-secondary">Change password</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        );
    }
}

export default Profile;
