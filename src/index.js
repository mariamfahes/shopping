import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import category from "./category/category.js";
import Login from "./login/login.js";
import Category from "./category/category.js";
import Item from "./items/item.js";
import Message from "./message/message.js";
import Home from "./home/home.js";
import Menu from "./menu/menu";
import Nav_bar from "./Nav_bar/Nav_bar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/">
          <Nav_bar />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/category">
          <Category />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/item">
          <Item />
        </Route>
        <Route path="/message">
          <Message />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
