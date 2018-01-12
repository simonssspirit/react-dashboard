import React, { Component } from 'react';
import Statistics from './Statistics';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        groupedIssues:  state.groupedIssues,
        months: state.issuesPeriod,
        issues: state.issues,
        closeRate: 5,
        active: state.issues
    };
}

// data={this.props.issues.groupedIssues}
// months={this.props.months}
// issues={this.props.issues}
// closeRate={this.props.issues.closeRate.average}
// active={this.props.issues.active}

const ChartsContainer = connect(mapStateToProps)(Statistics);
export default ChartsContainer;