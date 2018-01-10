import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import './index.scss';
import '@progress/kendo-ui';

import { issuesStore } from "./store";
import { Provider } from "react-redux";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((

    <Provider store={issuesStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
