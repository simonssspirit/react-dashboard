import React from 'react';
import { Grid, Column } from '@progress/kendo-react-grid';

import { LabelCellTemplate, TitleCellTemplate, NumberCellTemplate, MilestoneCellTemplate, AssigneeCellTemplate } from './IssuesGridCellTemplates.js';

class IssuesGrid extends React.Component {
    render() {
        return(
            <Grid data={this.props.issues} detail={RowDetailComponent} expandField="expanded" expandChange={this.props.expand}>
                <Column field="number" title="ID" _width="80px" cell={cellWithTemplate(NumberCellTemplate)} />
                <Column field="title" title="Title" cell={cellWithTemplate(TitleCellTemplate)} />
                <Column field="labels" title="Labels" _width="100px" cell={cellWithTemplate(LabelCellTemplate)} />
                <Column field="milestone" title="Milestone" _width="150px" cell={cellWithTemplate(MilestoneCellTemplate)} />
                <Column field="assignee" title="Assignee" cell={cellWithTemplate(AssigneeCellTemplate)} />
            </Grid>
        );
    }
}

const RowDetailComponent = (props) => {
    return <h1>FOO</h1>
}

const cellWithTemplate = (Component) => {
    return class extends React.Component {
        render() {
            return (<td><Component {...this.props} /></td>);
        }
    }
}

export default IssuesGrid;