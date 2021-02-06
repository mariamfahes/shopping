import React from "react";
import { Redirect } from "react-router-dom";

class Register extends React.Component {
  state = {
    autho: 0,
    err: "",
  };

  registerCheck = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8000/api/register";
    const body = {
      name: e.target.adminName.value,
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

    const result = await response.status;
    this.setState({ autho: result });
    console.log(result);

    if (result == 200) {
      alert("Successful Registration");
      console.log(response);
    } else {
      alert("Email or Password is Wrong");
    }
  };

  render() {
    if (this.state.autho === 200) {
      return <Redirect to="./login" />;
    }

    return (
      <>
        <form onSubmit={this.registerCheck} method="post">
          <div className="sign-u">
            <input
              type="text"
              name="adminName"
              placeholder="Name"
              required=""
            />
          </div>

          <div className="sign-u">
            <input
              type="email"
              name="adminEmail"
              placeholder="Email Address"
              required=""
            />
          </div>

          <div className="sign-u">
            <input
              type="password"
              name="adminPassword"
              placeholder="Password"
              required=""
            />
          </div>
          <div className="sign-u">
            <input type="password" placeholder="Confirm Password" required="" />
          </div>
          <div className="clearfix"> </div>
          <div className="sub_home">
            <input type="submit" value="Submit" />
          </div>
          <div className="registration">
            Already Registered.
            <a className="" href="./login">
              Login
            </a>
          </div>
        </form>
      </>
    );
  }
}
export default Register;
