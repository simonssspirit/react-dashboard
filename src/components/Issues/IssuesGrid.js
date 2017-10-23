import React, { Component } from 'react';
import { Grid, GridColumn } from '@progress/kendo-grid-react-wrapper';

const IssuesGrid = (props) => {
    return(
        <Grid dataSource={props.issues}>
            <GridColumn field="number" title="ID" width="80" template=" \#  <a href='#: html_url #'>#: number # </a>">
            </GridColumn>
        </Grid>
    );
}

export default IssuesGrid;