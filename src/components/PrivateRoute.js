import {
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const isAuthenticated = false;

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  );
}
