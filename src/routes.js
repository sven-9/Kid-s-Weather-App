import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import CreateAccountComponent from './Components/CreateAccount';

const ROUTES = [
  { path: "/", key: "Home", exact: true, component: () => <h1>Welcome Home</h1> },
  { path: "/login", key: "Login", exact: true, component: Login},
  { path: "/create-account", key: "Create Account", exact: true, component: CreateAccountComponent},
  { path: "/forgot-password", key: "Forgot Password", exact: true, component: ForgotPassword},
  // This if for if we need nested pages 
  // { 
  //   path: "/app",
  //   key: "App",
  //   component: RenderRoutes,
  //   routes: [
  //     {
  //       path: "/app",
  //       key: "APP_ROOT",
  //       exact: true,
  //       component: () => <h1>App Index</h1>,
  //     },
  //     {
  //       path: "/app/page",
  //       key: "APP_PAGE",
  //       exact: true,
  //       component: () => <h1>App Page</h1>,
  //     },
  //   ],
  // },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
 function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
 export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
 function displayRouteMenu(routes) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key}
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul>
      {routes.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </ul>
  );
}

export {displayRouteMenu};