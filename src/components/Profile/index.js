import React, { Component } from 'react';

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

    render() {
        return (
            this.state &&
        <div>

        <div>
            <div className="row mb-4">
                <div className="col-sm">
                    <h2>
                        <span className="small text-uppercase text-muted d-block">Account</span>
                        {this.state.login} - {this.state.name}
                    </h2>
                </div>
                <div className="col-sm text-sm-right">
                    <button className="btn btn-secondary">Sign out</button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-7">



            </div>
        </div>

        </div>
        );
    }
}

export default Profile;
