import React, { Component } from 'react';
import IssuesGrid from './IssuesGrid.js';

import { connect } from 'react-redux';
import { issuesFetched, issuesReceived, issuesDetails, issuesToggleExpand, issuesPageChange } from './../../actions';

const baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';

class IssuesGridContainer extends Component {

    componentDidMount() {



        let dispatcher = (data) => {
            this.props.dispatch(issuesReceived(data));
            this.props.dispatch(issuesDetails(data));
        };

        this.props.dispatch(issuesFetched());

        return Promise.all(this.getPageFetchers(2))
            .then(responses => responses.map(res => res.json()))
            .then(issues => Promise.all(issues))
            .then(arraysOfData => arraysOfData.reduce((prev, current) => prev.concat(current)))
            .then(result => dispatcher(result))
    }

    getPageFetchers(numberOfPages) {
        let queue = [];
        let headers = {
            // Generate your own token through
            // https://github.com/settings/tokens

            'Authorization': "token b95116792cba5a8169a1ec10640d8c16535c6419"
        };

        let options = { method: 'GET', accept: 'application/json', headers: headers };

        for (let page= 1; page <= numberOfPages; page++) {
            let url = baseUrl + `?state=all&page=${page}&per_page=100'`;
            queue.push(fetch(url, options));
        }

        return queue;
    }

    expand(e) {
        this.props.dispatch(issuesToggleExpand(e.dataItem));
    }

    page(e) {
        this.props.dispatch(issuesPageChange(e.page));
    }

    render() {
        console.log(this.props);
        return(
            <IssuesGrid
                issues={this.props.issues}
                skip={this.props.skip}
                take={this.props.take}
                total={this.props.total}
                pageSize={this.props.take}
                expand={this.expand.bind(this)}
                page={this.page.bind(this)} />
        )
    }
}

const mapStateToProps = (state) => {
    let { skip, take } = state.issuesPaging;
    let items = state.issues.slice(skip, skip + take);
    let total = state.issues.length;

    return {
        issues: items,
        total: total,
        skip,
        take
    }
}

IssuesGridContainer = connect(mapStateToProps)(IssuesGridContainer);
export default IssuesGridContainer;
