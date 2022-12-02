import { Nango } from '@nangohq/node-client';

// CLI command: npm start syncGithubStargazers [api-key]
// Endpoint documentation: https://docs.github.com/en/rest/activity/starring#list-stargazers
export let syncGithubStargazers = async (api_token: string) => {
    let owner = 'nangohq';
    let repo = 'nango';

    let config = {
        friendly_name: 'Github Stargazers',                // For pretty logs.
        headers: { authorization: `Bearer ${api_token}` }, // For auth.
        paging_header_link_rel: 'next'                     // For pagination.
    };

    return new Nango().sync(`https://api.github.com/repos/${owner}/${repo}/stargazers`, config);
};

// CLI command: npm start syncGithubUserRepos [api-key]
// Endpoint docs: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
export let syncGithubUserRepos = async (api_token: string) => {
    let username = 'bastienbeurier';

    let config = {
        friendly_name: 'Github User Repos',                // For pretty logs.
        headers: { authorization: `Bearer ${api_token}` }, // For auth.
        paging_header_link_rel: 'next'                     // For pagination.
    };

    return new Nango().sync(`https://api.github.com/users/${username}/repos?per_page=10`, config);
};
