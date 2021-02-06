import React from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Confirm } from "react-st-modal";
import Image from "react-bootstrap/Image";
import Menu from "../menu/menu";
export default class category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8000/api/Message";
    const token = window.localStorage.getItem("token");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    // console.log(result, "hiiiiiiii");
    console.log(result.message.data, "hhhh");
    this.setState({ Message: result.message.data });
  }

  deletemessage = async (id) => {
    const token = window.localStorage.getItem("token");
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const url = `http://localhost:8000/api/Message/${id}`;

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      const refrechusers = this.state.Message.filter(
        (Message) => Message.id !== id
      );
      this.setState({ Message: refrechusers });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div
        className="usersContainer"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Menu />
        <div className="row">
          <div
            className="col-3"
            style={{
              width: "20%",
              height: "100vh",
              display: "flex",
              position: "fixed",
            }}
          ></div>
          <div
            className="col-9 home-middle-container"
            style={{ marginLeft: "20%" }}
          >
            <div style={{ height: "90vh", width: "90%" }}>
              <div className=" card">
                <div
                  className="card-header"
                  style={{ textAlign: "center" }}
                ></div>

                <div className="card-body">
                  <div className="to">
                    <div className="tb">
                      {/* <form onSubmit={this.createcategory}>
                        <input
                          style={{ margin: "10px" }}
                          type="text"
                          name="name"
                          placeholder=" Name"
                        ></input>

                        <input
                          type="text"
                          name="email"
                          placeholder=" email"
                          className="f2"
                        />
                        <input
                          type="text"
                          name="title"
                          placeholder="title"
                          className="f2"
                        />
                        <input
                          type="text"
                          name="content"
                          placeholder=" content"
                          className="f2"
                        />

                        <input
                          type="submit"
                          name="add"
                          placeholder="add user"
                          className="btn btn-primary btn-sm"
                          style={{ color: "white" }}
                        />
                      </form> */}
                    </div>

                    <div className="content-table">
                      <table className="table table-hover">
                        <thead>
                          <tr>{/* <th>name</th> */}</tr>
                        </thead>

                        <tbody>
                          {this.state.Message.map((message, index) => (
                            <tr key={index}>
                              {/* <td> {users.id}</td> */}
                              <td>{message.name}</td>
                              <td>{message.title}</td>
                              <td>{message.email}</td>
                              <td>{message.content}</td>

                              <td>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={async () => {
                                      const isConfirm = await Confirm(
                                        "Are you sure you want to delete the User?",
                                        "You cannot undo this action"
                                      );
                                      if (isConfirm) {
                                        this.deletemessage(message.id);
                                      }
                                    }}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
