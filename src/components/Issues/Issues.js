import React, { Component } from 'react';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';

class Issues extends Component {
    changePeriod = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="row mb-4">
                    <div className="col-sm">
                        <h2>
                            <span className="small text-uppercase text-muted d-block">Issues</span>
                            {/* {{range.from | date}} - {{range.to | date}} */}
                        </h2>
                    </div>
                    <div className="col-sm text-sm-right">
                        <ButtonGroup>
                            <Button value="3" onClick={this.changePeriod}>3 Months</Button>
                            <Button value="6" onClick={this.changePeriod}>6 Months</Button>
                            <Button value="12" onClick={this.changePeriod}>12 Months</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    };
}

export default Issues;
