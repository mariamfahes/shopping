import React from "react";
import Menu from "../menu/menu";
import Image from "react-bootstrap/Image";
export default class category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8000/api/Item";
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
    console.log(result.items.data, "hhhh");
    this.setState({ items: result.items.data });
  }

  render() {
    return (
      <div>
        <Menu />
        <div>
          {this.state.items &&
            this.state.items
              .filter((item) => item.category_id == 7)

              .map((item, index) => (
                <p key={index}>
                  {/* {item.name} */}

                  <Image
                    width={50}
                    src={"http://localhost:8000/storage/" + item.image}
                  />
                  {item.description}
                  {item.price}
                </p>
              ))}
        </div>
      </div>
    );
  }
}
