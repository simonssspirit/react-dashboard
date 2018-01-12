import React, { Component } from 'react';

class Statistics extends Component {

    render() {
        return (
            <div className="row">
            <div className="col-md-12">
                <ActiveIssues
                    data={this.props.issues.groupedIssues}
                    months={this.props.months}
                    issues={this.props.issues}
                    closeRate={this.props.issues.closeRate.average}
                    active={this.props.issues.active}
                />
            </div>
            {/* <div className="col-md-4">
                <issue-types [data]="issues.issueTypes"></issue-types>
            </div>
            <div className="col-md-8">
                <types-distribution [data]="issues.typesDistribution" [months]="months" *ngIf="issues.active.length"></types-distribution>
            </div> */}
            </div>
        );
    }
}

export default Statistics;
