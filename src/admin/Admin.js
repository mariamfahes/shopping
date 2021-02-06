import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../login/login";
//import reportWebVitals from "./reportWebVitals";
//import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
export default function Admin() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login" replace>Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" exact component={Login} />
            
        </Switch>
      </div>
    </Router>
  );
  // //<Login />;
}
