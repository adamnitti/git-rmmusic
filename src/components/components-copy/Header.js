import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron, Nav } from 'reactstrap';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                <Jumbotron className="jumbotron bg-cover" fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h1>Shannon Kori</h1>
                                <h3>Drummer - Clinician - Educator</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="sm">                   
                <NavbarBrand className="mr-auto" href="/"><img src="../../img/sk.png" height="30" width="30" alt="SK Logo" /></NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/media" >Media
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>  
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;