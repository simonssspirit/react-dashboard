import React, { Component } from 'react';
import { Grid, Column } from '@progress/kendo-react-grid';

const IssuesGrid = (props) => {
    return(
        <Grid data={props.issues}>

        </Grid>
    );
}

export default IssuesGrid;