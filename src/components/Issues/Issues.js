import React, { Component } from 'react';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';

class Issues extends Component {
    static periods = ["3","6","12"];

    constructor(props) {
        super(props);
        this.state = {
            period: "3",
            range: {
                to: new Date(),
                from: this.getRangeStart(3)
            }
         };
    }

    getRangeStart(months ) {
        let since = new Date();
        since.setMonth(since.getMonth() - months);
        return since;
    }

    changePeriod = (e) => {
        let months = e.taget.value;
        this.setState({
            period: months,
            range: {
                to: new Date(),
                from: this.getRangeStart(months)
            }
        });
    }

    render() {
        return (
            <div>
                <div className="row mb-4">
                    <div className="col-sm">
                        <h2>
                            <span className="small text-uppercase text-muted d-block">Issues</span>
                            { [this.state.range.from.toDateString(), ' - ', this.state.range.to.toDateString()] }
                        </h2>
                    </div>
                    <div className="col-sm text-sm-right">
                        <ButtonGroup>
                            {
                                Issues.periods.map(p => <Button
                                    key={p} value={p}
                                    onClick={this.changePeriod}
                                    selected={this.state.period === p}
                                    togglable={true}
                                    >{`${p} Months`}
                                    </Button>)
                            }
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    };
}

export default Issues;
