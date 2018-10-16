import React from 'react';
import ActiveIssuesDash from './../Charts/ActiveIssues';
import IssuesTypes from './../Charts/IssuesTypes';
import TypesDistribution from './../Charts/TypesDistribution';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    handleSelect = (e) => {
        this.setState({ selected: e.selected })
    }
    render() {
        return (
            <div id="statistics" className="row">
                <TabStrip selected={this.state.selected} onSelect={this.handleSelect} animation={false} className="col-12">
                    <TabStripTab title="All Issues">
                        <div className="row">
                            <div className="col-12 ">
                                <ActiveIssuesDash
                                    {...this.props}
                                />
                            </div>
                        </div>
                    </TabStripTab>
                    <TabStripTab title="Assigned to Me">
                        <div className="row">
                            <div className="col-12">
                                <ActiveIssuesDash
                                    {...this.props}
                                />
                            </div>
                        </div>
                    </TabStripTab>
                    <TabStripTab title="Created by Me">
                        <div className="row">
                            <div className="col-12">
                                <ActiveIssuesDash
                                    {...this.props}
                                />
                            </div>
                        </div>
                    </TabStripTab>
                </TabStrip>
                <div className="col-xl-4">
                    <IssuesTypes data={this.props.issuesTypes} />
                </div>
                <div className="col-xl-8">
                    <TypesDistribution data={this.props.typesDistribution} months="months" />
                </div>
            </div>
        );
    }
}

export default Statistics;
