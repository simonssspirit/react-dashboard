import React, { Component } from 'react';

import Issues from './index.js';
import IssuesGridContainer from './IssuesGridContainer';

import { connect } from 'react-redux';
import { periodChanged } from './../../actions';

class IssuesContainer extends Component {
    period(periodLength) {
        this.props.dispatch(periodChanged(periodLength));
    }

    render() {
        return (
            <div>
                <Issues />
                <IssuesGridContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPeriodChange: period => {
            dispatch(periodChanged(period));
        }
    }
}

const mapStateToProps = (state) => {
    return state.period;
}

IssuesContainer = connect(mapStateToProps, mapDispatchToProps)(Issues);
export default IssuesContainer;
