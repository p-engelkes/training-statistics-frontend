import * as React from "react";
import {history} from "../../store/store";
import {Route, Router} from "react-router";
import {Home} from "../home";

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

const routes: RouteModel[] = [
    new RouteModel("/", true, Home)
];

export const Routing = () => {
    const routeComponents = routes.map((route, index) => (
        <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
        />
    ));

    console.log(routeComponents);

    return (
        <Router history={history}>
            <div>
                {routeComponents}
            </div>
        </Router>
    )
};