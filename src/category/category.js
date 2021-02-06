import React from "react";

//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Confirm } from "react-st-modal";
import Menu from "../menu/menu";
import Image from "react-bootstrap/Image";
export default class category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      updateinput: "",
      // image: "",
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8000/api/Category";
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
    console.log(result.categories.data, "hhhh");
    this.setState({ categories: result.categories.data });
  }
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    //this.setState({ [e.target.image]: e.target.files[0] });
  };

  deletecategory = async (id) => {
    const token = window.localStorage.getItem("token");
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const url = `http://localhost:8000/api/Category/${id}`;

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      const refrechusers = this.state.categories.filter(
        (category) => category.id !== id
      );
      this.setState({ categories: refrechusers });
    } catch (error) {
      console.log(error);
    }
  };
  createcategory = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");

    const name = e.target.name.value;
    const image = e.target.image.files[0];
    const body = new FormData();
    body.append("name", name);
    body.append("image", image);
    try {
      const url = `http://localhost:8000/api/Category`;
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
        body,
      });
      const result = await response.json();
      console.log(result, "hii");
    } catch (error) {
      console.log(error);
    }
    e.target.name.value = "";
    e.target.image.value = "";
    this.componentDidMount();
  };
  updatecategories = async (id) => {
    const token = window.localStorage.getItem("token");
    const name = this.state.updateinput;
    const image = this.state.image;
    const body = new FormData();
    body.append("name", name);
    body.append("image", image);

    console.log(name);
    console.log(image);
    const url = `http://localhost:8000/api/Category/${id}`;
    const response = await fetch(url, {
      method: "put",
      headers: { Authorization: "Bearer " + token },
      body,
    });
    const result = await response.json();
    console.log(result);

    this.componentDidMount();
  };

  render() {
    return (
      <div
        className="usersContainer"
        style={{ height: "100vh", width: "100vw" }}
      >
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
          <Menu />
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
                      <form onSubmit={this.createcategory}>
                        <input
                          style={{ margin: "10px" }}
                          type="text"
                          name="name"
                          placeholder=" Name"
                        ></input>

                        <input
                          type="file"
                          name="image"
                          placeholder=" Image"
                          className="f2"
                        />

                        <input
                          type="submit"
                          name="add"
                          placeholder="add user"
                          className="btn btn-primary btn-sm"
                          style={{ color: "white" }}
                        />
                      </form>
                    </div>
                    <div className="content-table">
                      <table className="table table-hover">
                        <thead>
                          <tr>{/* <th>name</th> */}</tr>
                        </thead>

                        <tbody>
                          {this.state.categories.map((category, index) => (
                            <tr key={index}>
                              {/* <td> {users.id}</td> */}
                              <td>{category.name}</td>
                              <td>
                                <Image
                                  src={`http://localhost:8000/storage/${category.image}`}
                                  style={{ width: "50px" }}
                                />
                              </td>

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
                                        this.deletecategory(category.id);
                                      }
                                    }}
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faEdit}
                                    onClick={async () => {
                                      const isConfirm = await Confirm(
                                        <input
                                          id="title"
                                          type="text"
                                          placeholder="New Title"
                                          name="updateinput"
                                          onChange={this.handleInputChange}
                                          value={this.state.iupdateinput}
                                        />,
                                        <input
                                          id="title"
                                          type="file"
                                          placeholder=" Image"
                                          name="updateinput"
                                          onChange={this.handleInputChange}
                                          value={this.state.image}
                                        />
                                      );
                                      if (isConfirm) {
                                        this.updatecategories(category.id);
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
