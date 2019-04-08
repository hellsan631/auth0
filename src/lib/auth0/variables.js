const AUTH_SCOPES = [
  'read:current_user',
  'update:current_user_metadata',
  'create:current_user_metadata',
  'delete:current_user_metadata',
  'openid',
  'profile',
]

const getHost = () => {
  return window.location.origin
}

export const AUTH_CONFIG = {
  database: 'Username-Password-Authentication',
  domain: 'targetproof.auth0.com',
  clientID: 'im66rJznvmvjLaEar4VwH45YmW76zU5O',
  callbackUrl: `${getHost()}/callback`,
  logoutUrl: `${getHost()}/home`,
  scopes: AUTH_SCOPES.join(' '),
  defaultRoute: '/home',
  loginRoute: '/my-quotes',
}
