import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

// const Loading = <div>Loading...</div>;

export const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    Component: React.lazy(() => "./pages/Home"),
  },
  {
    name: "Chat",
    path: "/chat",
    exact: true,
    Component: React.lazy(() => "./components/Chat"),
  },
];

const Routes = () => {
  return (
    <Switch>
      {/* {routes.map((route) => {
        const { name, path, exact, Component } = route;
        return (
          <Route key={name} path={path} exact={exact}>
            <Suspense fallback={Loading}>
              <Component />
            </Suspense>
          </Route>
        );
      })} */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
