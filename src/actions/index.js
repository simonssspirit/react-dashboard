export const periodChanged = (period) => {
    return {
        type: 'PERIOD_CHANGED',
        payload: period
    }
};

export const issuesReceived = (issues) => {
    console.log('issues received');
    return {
        type: 'ISSUES_RECEIVED',
        payload: issues
    }
}

export const issuesFetched = () => {
    return {
        type: 'ISSUES_FETCHED'
    }
}
