export const issuesInRange = (issue, from) => {
    return (new Date(issue.created_at).getTime() > from.getTime());
}

export const groupIssues= (issues) => {
    if (issues.length == 0) {
        return [];
    }

    let grouped = {
        open: [],
        closed: []
    }



    return grouped;
}
