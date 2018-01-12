let initialState = [];

export const issues = (state = initialState, action) => {
    if (action.type === 'ISSUES_RECEIVED') {
        let issues = action.payload;
        let newState = issues.filter(issue => issue.pull_request ? false : true);
        return newState;
    } else if(action.type ==='ISSUES_COLLAPSED') {
        let issues = action.payload;
        let newState = issues.map(issue => { let iss = Object.assign({}, issue); iss.expanded = false; return iss; });
        return newState;
    } else if (action.type === 'ISSUES_TOGGLE_EXPAND') {
        let dataItem = action.payload;
        let index = state.findIndex(i => i.number === dataItem.number);
        let clonedDataItem = Object.assign({}, state[index]);
        clonedDataItem.expanded = !dataItem.expanded;

        let newState = [
            ...state.slice(0, index),
            clonedDataItem,
            ...state.slice(index + 1)
        ];
        return newState;
    }
    else {
        return state;
    }
};