import { combineReducers } from 'redux';
import { period } from './period';
import { issues } from './issues';

export const issuesDashboard = combineReducers({period, issues});