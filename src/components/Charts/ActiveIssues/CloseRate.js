import React from 'react';
import { Chart } from '@progress/kendo-charts-react-wrapper';

const CloseRate = (props) => {
    const series = [{ type: 'bullet', taget: {color: '#FFF'},data: props.bulletData, currentField: 'current', targetField: 'target', color: '#CC3458'}]
    const categoryAxis = [{plotBands: [{from: 0, to:100, color: '#35C473'}]}];
    const formatp = (number) => {
        return Intl.NumberFormat(navigator.language, {style: 'percent'}).format(number);
    };

    const formatd = (date) => {
        if (!date) {
            return '';
        }
        return new Date(parseInt(date, 10)).toDateString();
    }

    return (
        <div className="col-12 col-lg-6 col-xl pb-4 close-rate">
            <span className="comp-label">
                <strong>{formatp(props.closeRate.average)}</strong>
                <small>Close rate</small>
            </span>
            <p className="m-0 small text-uppercase text-muted">
                Highest:
                {formatp(props.closeRate.highest.close_rate) }
                on {formatd(props.closeRate.highest.created_at)}
            </p>
            <p className="m-0 small text-uppercase text-muted">
                Lowest:
                {formatp(props.closeRate.lowest.close_rate)}
                on {formatd(props.closeRate.lowest.created_at)}
            </p>
            <Chart
                chartArea={{margin: -20, height: 20}}
                series={series}
                categoryAxis={categoryAxis}
            >
            </Chart>
        </div>
    );
};

export default CloseRate;