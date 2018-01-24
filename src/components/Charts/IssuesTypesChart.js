import React, { Component } from 'react';
import { Chart } from '@progress/kendo-charts-react-wrapper';

class IssuesTypesChart extends Component {
    constructor(props) {
        super(props);
        this.state = { init: true }
    }

    updateDonutLegend(event) {
        this.setState({
            init: false
        });
        this.props.seriesHover({
            hoverColor: event.point.options.color,
            donutPercent: Math.round(event.value * 100 || 0) + '%',
            donutLabel: event.category
        });

    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.init;
    }

    render() {
        const series = [{ holeSize: 100, data: this.props.data, type: 'donut', field: 'value', categoryField: 'type', overlay: false }]
        const legend = { position: 'bottom', labels: { font: '0.65em Roboto, Arial, sans-serif'} };
        return (
            <Chart
                seriesHover={this.updateDonutLegend.bind(this)}
                series={series}
                legend={legend}>
            </Chart>
        );
    }
}

export default IssuesTypesChart;