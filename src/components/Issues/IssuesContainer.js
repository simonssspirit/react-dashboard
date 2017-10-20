import React, { Component } from 'react';
import Issues from './index.js';
import { connect } from 'react-redux';
import { issuesStore as store } from './../../store';
import { periodChanged } from './../../actions';

class IssuesContainer extends Component {

    period(periodLength) {
        store.dispatch(periodChanged(periodLength));
    }

    render() {
        return (
            <Issues onPeriodChange={this.period} />
        );
    }
}

IssuesContainer = connect()(IssuesContainer);
export default IssuesContainer;
