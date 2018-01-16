export const issuesInRange = (issue, from) => {
    return (new Date(issue.created_at).getTime() > from.getTime());
}

const colors = {
    'SEV: LOW': '#ff9800',
    'SEV: MEDIUM': '#ff5d2a',
    'SEV: HIGH': '#d50000',
    'ENHANCEMENT': '#00c853',
    'FEATURE': '#2e7d32',
    'OTHER': '#1ca8dd',
    'PASSED QA': '#57b45b',
    'BUG': '#cf3257',
    'NEEDS QA': '#bc007c',
    'DOCUMENTATION': '#455a64',
    'DEMO': '#673ab7',
    'DELETED': '#f44336',
    'IN PROGRESS': '#ffd600'
  };


const mapUser = (user) => {
    return {
        id: user.id,
        name: user.login,
        avatarUrl: user.avatar_url,
        avatarUrlThumb: user.avatar_url + "&size=60"
    };
}

const mapLabels = (label) => {
    const name = label.name.toUpperCase();

    if (name in colors) {
        label.color = colors[name];
    } else {
        label.color = colors["OTHER"];
    }

    return label;
}

export const mapIssue = (issue) => {
    return {
      id: issue.number,
      title: issue.title,
      body: issue.body,
      author: mapUser(issue.user),
      assignees: (issue.assignees ? issue.assignees.map(mapUser) : []),
      state: issue.state,
      date: new Date(issue.created_at),
      dateClosed: (issue.closed_at ? new Date(issue.closed_at) : undefined),
      count: 1,
      labels: issue.labels.map(mapLabels),
      milestone: issue.milestone,
      created_at: issue.created_at,
      assignee: issue.assignee ? issue.assignee.login : 'none'
    };
}