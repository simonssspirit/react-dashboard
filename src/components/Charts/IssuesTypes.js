import React, { Component } from 'react';
import IssuesTypeChart from './IssuesTypesChart';

class IssuesTypes extends Component {
    constructor(props)
    {
        super(props);
        let sevlow = props.data.find(series => series.type === 'SEV: LOW');
        this.state = {
            value: sevlow.value,
            category: sevlow.type,
            point: {
                options: {
                    color: 'rgb(255, 99, 88)'
                }
            }
        }

        this.seriesHover = this.seriesHover.bind(this);
    }

    seriesHover(event) {
        this.setState(event);
    }

    render() {
        return (
            <div className="card issue-types">
                <h4 className="card-header">Issue Types</h4>
                    <div className="card-block">
                    <IssuesTypeChart data={this.props.data} seriesHover={this.seriesHover} />
                    <div className="comp-label chart-label" style={{color: this.state.hoverColor}}>
                        <strong>{this.state.donutPercent}</strong>
                        <small>{this.state.donutLabel}</small>
                    </div>
                </div>
            </div>
        );
    }
};

export default IssuesTypes;
