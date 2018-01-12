import React, { Component } from 'react';
import IssuesGrid from './IssuesGrid.js';

import { connect } from 'react-redux';
import { issuesToggleExpand, issuesPageChange } from './../../actions';

import { issuesInRange } from './../../lib/issues';

class IssuesGridContainer extends Component {
    render() {
        return(
            <IssuesGrid
                issues={this.props.issues}
                skip={this.props.skip}
                take={this.props.take}
                total={this.props.total}
                pageSize={this.props.take}
                expand={this.props.onToggleExpand}
                page={this.props.onIssuesPageChange} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleExpand: (e) => dispatch(issuesToggleExpand(e.dataItem)),
        onIssuesPageChange: (e) => dispatch(issuesPageChange(e.page))
    };
}

const mapStateToProps = (state) => {
    let { skip, take } = state.issuesPaging;
    let periodStart = state.issuesPeriod.range.from;
    let itemsInPeriod = state.issues.filter(issue => issuesInRange(issue, periodStart));
    let items = itemsInPeriod.slice(skip, skip + take);
    let total = itemsInPeriod.length;

    return {
        issues: items,
        total: total,
        skip,
        take
    }
}

IssuesGridContainer = connect(mapStateToProps)(IssuesGridContainer);
export default IssuesGridContainer;
