import { combineReducers } from 'redux';
import { issuesPeriod } from './issuesPeriod';
import { issues } from './issues';
import { issuesPaging } from './issuesPaging';
import { groupedIssues } from './issuesGrouping';

export const issuesDashboard = combineReducers({issues, issuesPeriod, issuesPaging, groupedIssues});