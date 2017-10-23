import React, { Component } from 'react';
import IssuesGrid from './IssuesGrid.js';

import { connect } from 'react-redux';
import { issuesReceived } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class IssuesGridContainer extends Component {
    constructor(props) {
        super(props);
        this.headers = {
            // Generate your own token through
            // https://github.com/settings/tokens

            'Authorization': "token b95116792cba5a8169a1ec10640d8c16535c6419"
        }
    }

    componentDidMount() {
        debugger;
        console.log('component did mount');
        // let page = 2;
        // const url = baseUrl + '?state=all&page=' + page + '&per_page=100';
        // fetch(url, { method: 'get', accept: 'application/json', headers: this.headers })
        //     .then(response => this.update(response), error => console.log(error));
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

IssuesGridContainer = connect(mapStateToProps)(IssuesGrid);
export default IssuesGridContainer;
