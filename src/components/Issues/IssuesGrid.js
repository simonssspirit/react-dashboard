import React, { Component } from 'react';
import { Grid, Column, GridCell } from '@progress/kendo-react-grid';

const cellWithTemplate = (Component) => {
    return class extends React.Component {
        render() {
            return (<td><Component {...this.props} /></td>);
        }
    }
}

const IssuesGrid = (props) => {
    return(
        <Grid data={props.issues}>
            <Column field="number" cell={cellWithTemplate(NumberCellTemplate)} />
            <Column field="title" cell={cellWithTemplate(TitleCellTemplate)} />
            <Column field="labels" cell={cellWithTemplate(LabelCellTemplate)} />
        </Grid>
    );
}

const NumberCellTemplate = (props) => {
    return <a href={props.dataItem.html_url}>{props.dataItem.number}</a>
}

const TitleCellTemplate = (props) => {
    let classes = [props.dataItem.state === 'open' ? 'issue-open': 'issue-closed', 'issue-status'].join(' ');
    return <span className={classes}>{props.dataItem.title}</span>
}

const LabelCellTemplate = (props) => {
    let colors = {
        'SEV: LOW' : '#ff9800',
        'SEV: MEDIUM' : '#ff5d2a',
        'SEV: HIGH' : '#d50000',
        'ENHANCEMENT' : '#00c853',
        'FEATURE' : '#2e7d32',
        'OTHER' : '#1ca8dd',
        'PASSED QA' : '#57b45b',
        'BUG' : '#cf3257',
        'NEEDS QA' : '#bc007c',
        'DOCUMENTATION' : '#455a64',
        'DEMO' : '#673ab7',
        'DELETED' : '#f44336',
        'IN PROGRESS' : '#ffd600'
    };
    return props.dataItem.labels.map(label => {
            let color = colors[label.name.toUpperCase()] || colors.OTHER;

            return <span key={label.name} className="badge" style={{ backgroundColor: color }}>
                    {label.name}
                   </span>
    });
}

export default IssuesGrid;