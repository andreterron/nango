---
sidebar_label: Contribute a new API
---

# Contributing a new API

Adding support for a new API to Pizzly is fast & easy. Please follow the steps below and we will be happy to accept your PR!

If you find a bug with one of the existing APIs feel free to use these steps to submit a PR with a fix. Thank you!

## Step 0: A quick overview of how API templates work in Pizzly

Support for the OAuth flow of different APIs in Pizzly is implemented with templates: A small config that tells Pizzly how to perform the OAuth flow for the specific API.

All templates of Pizzly live in a single file called [providers.yaml](https://nango.dev/oauth-providers) in the server package. [More about YAML here](https://yaml.org/).

Most templates only need to make use of 2-3 configuration keys, but in some cases you might need more.
For a full list of configuration options please check the [type definitions here](https://github.com/NangoHQ/Pizzly/blob/master/packages/server/lib/models.ts).

The most commonly used configuration options are:
```yaml
# All keys & slugs use lowercase and snake_case
provider_slug:                                              # Shorthand for the provider, ideally the API's name. Must be unique.
    # Mandatory fields
    auth_mode: OAUTH2                                       # Either OAUTH1 (for OAuth 1.0a) or OAUTH2
    authorization_url: https://gitlab.com/oauth/authorize   # The URL of the authorization page for the OAuth service
    token_url: https://gitlab.com/oauth/token               # The URL for the token request

    # Optional fields
    authorization_params:                                   # Additional parameters to pass along in the authorization step
        response_type: code
    token_params:                                           # Additional parameters to pass along in the token request
        mycoolparam: value
    refresh_url: https://api.example.com/oauth/refresh      # The URL to use for refreshing the access token, if different from token_url
    scope_separator: ','                                    # String to use to separate scopes. Defaults to ' ' (1 space) if not provided
```

Templates support [string interpolation for dynamic URLs](./pizzly-configuration.md#connection-config). 

## Step 1: Add your new API to `providers.yaml`

Fork the repo and edit the `packages/auth/providers.yaml` file as explained above to add support for the new API. The API documentation should contain all the details you need on the OAuth flow to complete this step.

[We are here](#where-to-get-help) if you need help with this.

## Step 2: Test your new API

To test your new API:
1. Add a provider config for the new API with the CLI (see [Getting started](getting-started.md) if needed)
2. Start Pizzly locally (see below)
3. Use the built-in test page to trigger an OAuth flow of your new API. For this CD to `packages/frontend` and run a local Python webserver with `python3 -m http.server 8080`. You can now access the test page at [http://localhost:8080/bin/sample.html](http://localhost:8080/bin/sample.html).
4. Run a full OAuth dance and make sure it works as expected

**To run Pizzly locally follow these steps:**

You need the latest stable node version as well as a recent version of npm (or npm compatible package manager) installed on your machine.

In the root of the repo run:
```bash
npm i
npm run ts-build
```

Then start the Postgresql docker container. The easiest way to do this is to run docker compose and then stop the Pizzly server (but keep the DB running):
```bash
docker compose up
```

Then stop the Pizzly server and keep the postgres container running.

Now you can start the Pizzly server locally:
```bash
cd packages/server
npm run start
```

After a short while you should see a message that the server is running an listening on port 3003.

## Step 3: Submit your PR

Submit your PR with the new API to the Pizzly repo. Please make sure to mention that you tested the full flow and that it works. We will review your PR asap and merge it into the main Pizzly repo for inclusion with the next release.

## Where to get help

If you get stuck or need help please join our [Slack community](https://nango.dev/slack) where the Pizzly contributors hang out. We will do our best to help you and get Pizzly to work with the OAuth flow of your API.