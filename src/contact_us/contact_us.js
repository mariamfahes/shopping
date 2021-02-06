// import React from "react";

// //import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Menu from "../menu/menu";

// export default class category extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
     
//     };
//   }

  
//   createcategory = async (e) => {
//     e.preventDefault();
//     const token = window.localStorage.getItem("token");

//     const name = e.target.name.value;
//     const image = e.target.image.files[0];
//     const body = new FormData();
//     body.append("name", name);
//     body.append("image", image);
//     try {
//       const url = `http://localhost:8000/api/Category`;
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { Authorization: "Bearer " + token },
//         body,
//       });
//       const result = await response.json();
//       console.log(result, "hii");
//     } catch (error) {
//       console.log(error);
//     }
//     e.target.name.value = "";
//     e.target.image.value = "";
    
//   };








// render(){
// return

// <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
// )}