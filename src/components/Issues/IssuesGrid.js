import React, { Component } from 'react';
import { Grid, Column, GridCell } from '@progress/kendo-react-grid';

const cellWithTemplate = (Componennt) => {
    return class extends React.Component {
        render() {
            return (<GridCell {...this.props}><Componennt /></GridCell>);
        }
    }
}

const NumberCellTemplate = (props) => {
    return <a href={props.dataItem.html_url}>{props.dataItem.number}</a>
}

const TitleCellTemplate = (props) => {
    let classes = [props.state === 'open' ? 'issue-open': 'issue-closed', 'issue-status'].join(' ');
    return <span className={classes}>{props.title}</span>
}

const IssuesGrid = (props) => {
    const IdTemplate = cellWithTemplate(NumberCellTemplate);
    const TitleTemplate = cellWithTemplate(TitleCellTemplate);

    return(
        <Grid data={props.issues}>
            <Column field="number" cell={IdTemplate} />
            <Column field="title" cell={TitleTemplate} />
        </Grid>
    );
}

export default IssuesGrid;