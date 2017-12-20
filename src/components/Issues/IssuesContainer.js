import Issues from './Issues';

import { connect } from 'react-redux';
import { periodChanged } from './../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onPeriodChange: period => {
            dispatch(periodChanged(period));
        }
    }
}

const mapStateToProps = (state) => {
    return state.issuesPeriod;
}

const IssuesContainer = connect(mapStateToProps, mapDispatchToProps)(Issues);
export default IssuesContainer;
