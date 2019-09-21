import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import {Link, withRouter} from 'react-router-dom';
import "./Navigation.css";
//import {Link} from 'react-router-dom';
import { BrowserRouter, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">
              <h1 className="app-name1">
                <span className="text-white font-weight-bold text-center">BootCamp</span>HUB
            </h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  **<NavLink tag={Link} to="/plantInfo">Plant Info</NavLink>**
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </BrowserRouter>
      </div>
    );
  }
}
export default Navigation;
