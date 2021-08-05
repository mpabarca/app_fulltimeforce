export type CommitData = {
    sha: string
    node_id: string
    commit: {
        author: {
            name: string
            email: string
            date: string
        }
        message: string
    }
    html_url: string
    author: {
        login: string
        avatar_url: string
        html_url: string
    }
    
};

export type Props = {
    nameAuthor: string;
    dateCommit: {
        quantity: number
        unit: string
        date: string
        more30days: boolean
    };
    messageCommit: string;
    urlCommit: string;
    branchToStartCommit: string;
    avatar_url: string;
    author_profile: string;
};