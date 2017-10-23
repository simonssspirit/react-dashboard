export const periodChanged = (period) => {
    return {
        type: 'PERIOD_CHANGED',
        payload: period
    }
};

export const issuesReceived = (issues) => {
    return {
        type: 'ISSUES_RECEIVED',
        payload: issues
    }
}