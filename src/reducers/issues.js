var initialState = [
]

export const issues = (state = initialState, action) => {
    if (action.type === 'ISSUES_RECEIVED') {
        let issues = action.payload;
        let newState = issues;
        return newState;
    } else {
        return state;
    }
};