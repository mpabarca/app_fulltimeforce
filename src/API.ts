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
    
}

export const fetchAPIGitHub = async (): Promise<CommitData[]> => {
    const endpoint = "https://api.github.com/repos/mpabarca/app_fulltimeforce/commits";
    const data = await (await fetch(endpoint)).json();
    return data;
};