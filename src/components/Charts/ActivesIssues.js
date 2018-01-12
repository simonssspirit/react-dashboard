import React from 'react';
import { Chart } from '@progress/kendo-charts-react-wrapper';

const ActiveIssues = (props) => {
    const seriesDefault = { type: 'column' };
    const data = [];
    console.log(props);
    return (
        <div className="card">
            <h3 className="card-header">Active Issues</h3>
            <div className="card-block">

                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg active-issues">
                        <span className="comp-label">
                            {/* <strong>{{ issues.open + issues.closed }}</strong> */}
                            <small>Active issues</small>
                        </span>
                        <Chart
                            seriesDefaults={seriesDefault}
                            series={data}
                            kur="kur">

                        </Chart>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ActiveIssues;

/* <kendo-chart style="height: 80px;">
                                <kendo-chart-series-defaults type="column" [stack]="true" [gap]="0.5" [overlay]="false"></kendo-chart-series-defaults>
                                <kendo-chart-series>
                                    <kendo-chart-series-item [color]="'#888'" [data]="active" field="count" categoryField="date" aggregate="count"></kendo-chart-series-item>
                                </kendo-chart-series>
                                <kendo-chart-category-axis>
                                    <kendo-chart-category-axis-item
                                        [baseUnit]="baseUnit"
                                        [majorTicks]="{visible: false}"
                                        [labels]="{step: 4, skip: 2, font: '10px sans-serif'}"
                                        [majorGridLines]="{visible: false}"
                                        [line]="{visible: false}"
                                    ></kendo-chart-category-axis-item>
                                </kendo-chart-category-axis>
                                <kendo-chart-value-axis>
                                    <kendo-chart-value-axis-item [visible]="false" [majorGridLines]="{visible: false}">
                                    </kendo-chart-value-axis-item>
                                </kendo-chart-value-axis>
                            </kendo-chart> */