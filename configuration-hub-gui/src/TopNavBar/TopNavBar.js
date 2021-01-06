import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import curleyLogo from './Style/curleyLogo.png'
import './Style/TopNavBarStyle.css'

class TopNavBar extends Component {
    render() {
        console.log(this.props)
        const Name =
            <div>
                <span className="logoName">ConfigurationHub </span>
                <img src={curleyLogo} className="logoPic"></img>
                &nbsp; |
            </div>
        return (
            <div>
                <Navbar className="MainNavbarStyle" expand="lg">
                    <Navbar.Brand className="justify-content-center">{Name} </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <div class="box-1">
                            <div class="btn btn-one">
                                <span>SIGN IN</span>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default connect(store => store.Main)(TopNavBar)

