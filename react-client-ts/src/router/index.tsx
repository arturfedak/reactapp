import React from 'react';
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import * as createHistory from "history";
import Home from "../components/Home";

export const history = createHistory.createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </React.Fragment>
    </Router>
);

export default AppRouter;