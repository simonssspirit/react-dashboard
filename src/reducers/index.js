import { combineReducers } from 'redux';
import { period } from './period';
import { issues } from './issues';
import { issuesPaging } from './issues-paging';

export const issuesDashboard = combineReducers({period, issues, issuesPaging});