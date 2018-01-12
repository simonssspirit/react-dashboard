import React, { Component } from 'react';
import ActiveIssues from './../Charts/ActivesIssues';

const Statistics = (props) => {
    const { dispatch } = props;

    return (
        <div className="row">
        <div className="col-md-12">
            <ActiveIssues
                data={props.groupedIssues}
                months={props.months}
                issues={props.issues}
                closeRate={props.closeRate}
                active={props.active}
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

export default Statistics;
