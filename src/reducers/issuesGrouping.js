let initialState = {
    open: [],
    closed: []
}

export const groupedIssues = (state = initialState, action) => {
    if (action.type === 'GROUP_ISSUES') {
        let issues = action.payload;
        let newState = { open: [], closed: [] }

        issues.reduce((acc, curr) => {
            newState[curr.state].push(curr);
            return acc;
        });
        return newState;
    } else {
        return state;
    }
}
