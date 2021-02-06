import React from "react";
import "./menu.module.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
//import Logo from "../assests/Logo-Group.png";
//import BackgroundMenu from "../assests/mountain.jpeg";
import { Link } from "react-router-dom";

class Testmenu extends React.Component {
  state = {
    collapsed: false,
  };

  logout = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/logout";
    const token = window.localStorage.getItem("token");
    const body = {};
    const respond = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    });
    console.log(respond);
    const result = await respond.json();
    console.log(result);
    await localStorage.removeItem("token");
  };
  collapse = async (e) => {
    e.preventDefault();
    if (this.state.collapsed === false) {
      this.setState({ collapsed: true });
    } else {
      this.setState({ collapsed: false });
    }
  };

  render() {
    return (
      <div>
        <ProSidebar collapsed={this.state.collapsed}>
          <SidebarHeader style={{ height: "20%" }}>
            <Menu iconShape="square">
              <MenuItem
                onClick={this.collapse}
                icon={<i className="fa fa-bars fa-sm"></i>}
                className=""
              >
                SHOPPING ON LINE
              </MenuItem>
              {/* <img  src={Logo} style={{width:"55%",height:"60%", marginLeft:"20%"}} /> */}
              {/* this style for was for Menu style={{  marginLeft:"19%",width:"60%",backgroundColor:"white",border:"solid 20px #1d1d1d",borderRadius:"50%"}} popperArrow={this.state.collapsed} */}
            </Menu>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<i className="fa fa-home fa-sm"></i>}>
                Dashboard
                <Link to="/" />
              </MenuItem>
              <MenuItem icon={<i className="fa fa-user fa-sm"></i>}>
                category <Link to="/Category" />
              </MenuItem>
              <MenuItem icon={<i className="fa fa-user fa-sm"></i>}>
                item <Link to="/Item" />
              </MenuItem>

              <MenuItem icon={<i className="fa fa-user fa-sm"></i>}>
                contact us <Link to="/message" />
              </MenuItem>
              <MenuItem icon={<i className="fa fa-user fa-sm"></i>}>
                home <Link to="/home" />
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem
                onClick={this.logout}
                icon={<i className="fa fa-sign-out fa-sm"></i>}
              >
                LOGOUT <Link to="loginout" />
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        ;
      </div>
    );
  }
}
export default Testmenu;
