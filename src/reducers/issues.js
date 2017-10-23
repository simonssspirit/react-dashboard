var initialState = [
]

export const issues = (state = initialState, action) => {
    if (action.type === 'ISSUES_RECEIVED') {
        let issues = action.payload;
        let newState = issues.filter(issue => issue.pull_request ? false : true);
        return newState;
    } else {
        return state;
    }
};