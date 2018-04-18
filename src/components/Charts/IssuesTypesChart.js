import React, { Component } from 'react';
import { Chart,
     ChartSeries,
     ChartSeriesItem,
     ChartLegend} from '@progress/kendo-react-charts';

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
        const series = { holeSize: 120, data: this.props.data, type: 'donut', field: 'value', categoryField: 'type', overlay: false }
        const legend = { position: 'bottom', labels: { font: '0.65em Roboto, Arial, sans-serif'} };
        return (
            <Chart onSeriesHover={this.updateDonutLegend.bind(this)}>
                <ChartSeries>
                    <ChartSeriesItem {...series}/>
                </ChartSeries>
                <ChartLegend {...legend} />
            </Chart>
        );
    }
}

export default IssuesTypesChart;