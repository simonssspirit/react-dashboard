export const issuesInRange = (issue, from) => {
    return (new Date(issue.created_at).getTime() > from.getTime());
}

export const groupIssues= (issues) => {
    return issues.reduce((acc, curr) => {
        acc[curr.state].push(curr);
        return acc;
    });
}
