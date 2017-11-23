import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, ButtonGroupItem as Button } from '@progress/kendo-react-buttons';

import IssuesContainer from './IssuesContainer';
import IssuesGridContainer from './IssuesGridContainer';

class IssuesIndex extends Component {
    render() {
        return (
            <div>
                <IssuesContainer />
                <IssuesGridContainer />
            </div>
        );
    };
}

export default IssuesIndex;
