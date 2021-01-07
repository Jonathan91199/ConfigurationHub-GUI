import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar} from 'react-bootstrap'
import { setSignInModalState } from '../Actions/MainReducerAction'
import SignInIcon from '@material-ui/icons/ExitToApp'
import SignInModal from './SignInModal/SignInModal'
import curleyLogo from './Style/curleyLogo.png'
import './Style/TopNavBarStyle.css'

class TopNavBar extends Component {
    constructor(props) {
        super(props)
        this.handleSignInClick = this.handleSignInClick.bind(this)
    }

    handleSignInClick() {
        this.props.dispatch(setSignInModalState({value : true}))
    }
    render() {

        const Name =
            <div>
                <span className="logoName">ConfigurationHub </span>
                <img src={curleyLogo} className="logoPic"></img>
                &nbsp;
            </div>
        return (
            <div>
                <Navbar className="MainNavbarStyle" expand="lg">
                    <Navbar.Brand className="justify-content-center">{Name} </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav> */}
                        <div className="box-1">
                            <div className="SignInFirstBtn btn-one" onClick={this.handleSignInClick}>
                                <span>SIGN IN <SignInIcon/></span>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <SignInModal/>
            </div>
        )
    }
}

export default connect(store => store.Main)(TopNavBar)

