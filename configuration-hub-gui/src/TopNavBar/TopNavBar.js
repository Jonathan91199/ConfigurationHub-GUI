import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap'
import { setSignInModalState } from '../Actions/MainReducerAction'
import SignInModal from './SignInModal/SignInModal'
import SignUpModal from './SignUpModal/SignUpModal'
import curleyLogo from './Style/curleyLogo.png'
import SignInOption from './SignInOption/SignInOption'
import UserConnectedInfo from './UserConnectedInfo/UserConnectedInfo'
import './Style/TopNavBarStyle.css'

class TopNavBar extends Component {
    constructor(props) {
        super(props)
        this.handleSignInClick = this.handleSignInClick.bind(this)
    }

    handleSignInClick() {
        this.props.dispatch(setSignInModalState({ value: true }))
    }
    render() {
        let userSignIn = {
            true: <UserConnectedInfo />,
            false: <SignInOption />
        }

        const Name =
            <div>
                <span className="logoName">ConfigurationHub </span>
                <img alt="Logo" src={curleyLogo} className="logoPic"></img>
                &nbsp;
            </div>
        return (

                <div className="MainNavbarMainDiv">
                    <Navbar className="MainNavbarStyle" expand="lg">
                        <Navbar.Brand className="justify-content-center">{Name} </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            {userSignIn[this.props.isUserConnected]}
                        </Navbar.Collapse>
                    </Navbar>
                    <SignInModal />
                    <SignUpModal />

                </div>

        )
    }
}

export default connect(store => store.Main)(TopNavBar)

