import { Nango } from '@nangohq/node-client';

// Test from the 'nango' folder root with command: npm run example syncRedditSubredditPosts [SUBREDDIT]
// Endpoint docs: https://www.reddit.com/dev/api/#GET_new
export let syncRedditSubredditPosts = async (subreddit: string) => {
    let config = {
        friendly_name: 'Reddit Subreddit Posts', // Give this Sync a name for prettier logs.
        mapped_table: 'reddit_posts', // Name of the destination SQL table
        response_path: 'data.children', // For finding records in the API response.
        paging_cursor_object_response_path: 'data.name', // For finding pagination data in responses.
        paging_cursor_request_path: 'after', // For adding pagination data in requests.
        max_total: 100, // For fetching limited records while testing.
        frequency: '1 minute' // How often sync jobs run in natural language.
    };

    return new Nango().sync(`https://www.reddit.com/r/${subreddit}/new.json`, config);
};
