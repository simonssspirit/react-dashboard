import React, { Component } from 'react';

import IssuesContainer from './IssuesContainer';
import IssuesGridContainer from './IssuesGridContainer';

class IssuesIndex extends Component {
    componentDidMount() {
        console.log('issues mounted');
    }

    cmponentWillUnmount() {
        console.log('issues unmounted');
    }

    render() {
        return (
            <div className="issues" id="issues">
                <IssuesContainer />
                <IssuesGridContainer />
            </div>
        );
    };
}

export default IssuesIndex;
