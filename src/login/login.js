import React from "react";
import { Redirect } from "react-router-dom";
import "./login.module.css";

class Login extends React.Component {
  state = {
    autho: 0,
    err: "",
  };

  loginCheck = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8000/api/login";
    const body = {
      email: e.target.adminEmail.value,
      password: e.target.adminPassword.value,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch(function (error) {
      console.log(error);
    });
    console.log(response);
    const res = await response.json();
    console.log(res, "gggggg");
    const result = await response.status;

    if (result == 200) {
      var accessToken = res.access_token;
      //   var userId = res.Admin.name;
      window.localStorage.setItem("token", accessToken);
      //window.localStorage.setItem("id", userId);
      alert("Login Successfully");
      this.setState({ autho: result });
      console.log(res);
    } else {
      alert("Login Failed");
    }
  };

  render() {
    if (this.state.autho === 200) {
      return <Redirect to="./category" />;
    }

    return (
      <>
        {/* <form className="form-signin" onSubmit={this.loginCheck} method="post">
          <div>
            {" "}
            <input
              type="email"
              name="adminEmail"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              autoComplete="adminEmail"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div>
            <input
              type="password"
              name="adminPassword"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              autoComplete="current-password"
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
          >
            Sign in
          </button>
        </form> */}

        {/* <div class="container">
          <div class="slidercontainer">
            <iframe
              src="slider/index.html"
              frameborder="0"
              id="frame"
              style="width=800px "
              style="height=500px"
              style="margin-top:44px;"
            ></iframe>
          </div>
        </div> */}
        <form onSubmit={this.loginCheck} method="post">
          <input
            type="email"
            className="user"
            name="adminEmail"
            placeholder="Enter Your Email"
            required=""
          />
          <input
            type="password"
            name="adminPassword"
            className="lock"
            placeholder="Password"
            required=""
          />

          <input className="s" type="submit" name="Sign In" value="Sign In" />

          {/* <a className="" href="./register"></a> */}
        </form>
      </>
    );
  }
}
export default Login;
