# Other configuration

### Callback URL

The OAuth callback URL is used by external API to communicate authorization responses to the Pizzly server. 

By default, the callback URL is `$SERVER_HOST:$SERVER_PORT/oauth/callback`. If you are following the [Getting Started](getting-started.md), it is `http://localhost:3003/oauth/callback`. 

You will need to register this callback URL with the external API, in additional to obtaining a developer ID, secret and registering access scopes.

You can customize the callback URL to point to a proxy server by editing the `AUTH_CALLBACK_URL` environment variable in the `.env` file at the root of the Pizzly folder.

### CLI Host & Port

By default, the CLI uses the host/port `http://localhost:3003` to call the Pizzly server. You can customize this by setting the environment variable named `PIZZLY_HOSTPORT` in your CLI environment, using a `.bashrc` or `.zshrc` file.

Learn more about the [Pizzly CLI](pizzly-cli).

### Connection Configuration & Template String Interpolation {#connection-config}

Certain APIs have dynamic OAuth URLs. For example, Zendesk has the following authorization URL `https://[SUBDOMAIN].zendesk.com/oauth/authorizations/new` where the subdomain is specific to a Pizzly Connection.

To address this, an optional `connectionConfig` parameter, itself having a freeform `params` field, can be passed to the `pizzly.auth(...)` method in the frontend Javascript SDK. 

Taking the example of Zendesk again, the authorization URL is `https://${connectionConfig.params.subdomain}.zendesk.com/oauth/authorizations/new` in the [Provider Templates](https://nango.dev/oauth-providers). 

You would have to call the frontend Javascript SDK with the following parameters:
```javascript
pizzly.auth(<provider-config-key>, <connection-id>, { params: { subdomain: <zendesk-subdomain>}})

```