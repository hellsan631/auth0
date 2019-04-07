const AUTH_SCOPES = [
  'read:current_user',
  'update:current_user_metadata',
  'create:current_user_metadata',
  'delete:current_user_metadata',
  'openid',
  'profile',
]

export const AUTH_CONFIG = {
  domain: 'targetproof.auth0.com',
  clientID: 'im66rJznvmvjLaEar4VwH45YmW76zU5O',
  callbackUrl: 'http://localhost:3000/callback',
  logoutUrl: 'http://localhost:3000/home',
  scopes: AUTH_SCOPES.join(' '),
  defaultRoute: '/home',
  loginRoute: '/my-quotes',
}
