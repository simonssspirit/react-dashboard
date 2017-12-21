let getRangeStart = (months) => {
    let since = new Date();
    since.setMonth(since.getMonth() - months);
    return since;
}

let getState = (months) => {
    return {
        period: months,
        range: {
            to: new Date(),
            from: getRangeStart(months)
        }
    };
}

let initialState = getState(3);

export const issuesPeriod = (state = initialState, action) => {
    if (action.type === 'ISSUES_PERIOD_CHANGED') {
        let period = action.payload.period;
        let newState = getState(period);
        return newState;
    } else {
        return state;
    }
};
