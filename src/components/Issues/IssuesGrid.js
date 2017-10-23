import React, { Component } from 'react';
import { Grid, GridColumn } from '@progress/kendo-grid-react-wrapper';

class IssuesGrid extends Component {
    constructor(props) {
        super(props);
        this.data = props.issues;
    }

    render() {
        return(
            <Grid dataSource={this.data} />
        );
    }
}

export default IssuesGrid;