import React, { Component } from 'react';
import Statistics from './Statistics';

import { issuesInRange, groupIssues } from './../../lib/issues';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

const ChartsContainer = connect()(Statistics);