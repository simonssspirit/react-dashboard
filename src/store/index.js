import { createStore } from "redux";
import { issuesDashboard } from '../reducers';

export const issuesStore = createStore(stocksWatch, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());