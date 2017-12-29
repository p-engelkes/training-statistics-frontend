import * as React from "react";
import {history} from "../../store/store";
import {Route, Router} from "react-router";
import {Home} from "../home";
import {RegisterPage} from "../user/register/register.page";
import {LoginPage} from "../user/login/login.page";
import {userIsAuthenticated, userIsNotAuthenticated} from "./authentication";

class RouteModel {
    path: string;
    exact: boolean;
    component: any;

    constructor(path: string, exact: boolean, component: any) {
        this.path = path;
        this.exact = exact;
        this.component = component;
    }
}

const authenticatedRoutes: RouteModel[] = [
    new RouteModel("/", true, Home),
];

const unauthenticatedRoutes: RouteModel[] = [
    new RouteModel("/register", false, RegisterPage),
    new RouteModel("/login", false, LoginPage)
];

export const Routing = () => {
    const authenticatedRouteComponents = authenticatedRoutes.map((route, index) => (
        <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={userIsAuthenticated(route.component)}
        />
    ));

    const unauthenticatedRouteComponents = unauthenticatedRoutes.map((route, index) => (
       <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={userIsNotAuthenticated(route.component)}
       />
    ));

    return (
        <Router history={history}>
            <div>
                {authenticatedRouteComponents}
                {unauthenticatedRouteComponents}
            </div>
        </Router>
    )
};