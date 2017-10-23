import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, ButtonGroupItem as Button } from '@progress/kendo-buttons-react-wrapper';

class Issues extends Component {
    changePeriod = (e) => {
       let indexToPeriod = {
           0: 3,
           1: 6,
           2: 12
       }
       this.props.onPeriodChange(indexToPeriod[e.index])
    }

    render() {
        return (
            <div className="issues" id="issues">
                <div className="row mb-4">
                    <div className="col-sm">
                        <h2>
                            <span className="small text-uppercase text-muted d-block">Issues</span>
                            {/* {{range.from | date}} - {{range.to | date}} */}
                        </h2>
                    </div>
                    <div className="col-sm text-sm-right">
                        <ButtonGroup select={this.changePeriod}>
                            <Button>3 Months</Button>
                            <Button>6 Months</Button>
                            <Button>12 Months</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    };
}

export default Issues;
