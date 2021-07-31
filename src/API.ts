
export const fetchAPIGitHub = async () => {
    const endpoint = "https://api.github.com/repos/mpabarca/app_fulltimeforce/commits";
    const data = await (await fetch(endpoint)).json();
    console.log(data);
};