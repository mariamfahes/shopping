import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact_us from "../contact_us/contact_us.js";
import Admin from "../admin/Admin.js";
//import Home from "./home/home.js";
import TestMenu from "../menu/menu";
import Login from "../login/login";
import Category from "../category/category.js";
export default function Nav_bar() {
  return (
    <div>
    //     {/* <nav>
    //       <ul> */}
    //         {/* <li>
    //           <Link to="/home">Home</Link>
    //         </li> */}
    //         <li>
    //           <Link to="/category">Admin</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact_us">contact_us</Link>
    //         </li>
    //       {/* </ul>
    //     </nav> */}

    //     
    //   </div>
    //     {/* <nav>
    //       <ul> */}
    //         {/* <li>
    //           <Link to="/home">Home</Link>
    //         </li> */}
    //         <li>
    //           <Link to="/category">Admin</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact_us">contact_us</Link>
    //         </li>
    //       {/* </ul>
    //     </nav> */}

    //     <Router>
    //       <Route path="/category" component={Category} />

    //       <Route path="/contact_us" component={Contact_us} />
    //       {/* <Route path="/home">
    //         <Home /> */}
    //       {/* </Route> */}
    //     </Router>
    //   </div>
    // </Router>
  );
}
// // import React from "react";
// // import ReactDOM from "react-dom";
// // //import "./index.css";
// // //import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// // import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
// // //import category from "./category/category.js";
// // //import Login from "./login/login.js";
// // //import Category from "./category/category.js";
// // //import Item from "./items/item.js";
// // import Admin from "./admin/admin.js";
// // import Contact_us from "./contact_us/contact_us.js";
// // //import Menu from "./menu/menu";

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <Switch>
// //         <Route path="admin">
// //           <Admin />
// //         </Route>

// //         <Route path="/contact_us">
// //           <Contact_us />
// //         </Route>
// //         {/* <Route path="/home">
// //           <Home />
// //         </Route>
// //         <Route path="/item">
// //           <Item />
// //         </Route>
// //         <Route path="/message">
// //           <Message />
// //         </Route>

// //         <Route path="/">
// //           <Login />
// //         </Route>  */}
// //       </Switch>
// //     </BrowserRouter>
// //   </React.StrictMode>,
// //   document.getElementById("root")
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
