import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OverlayTrigger, Popover, Col, Row } from 'react-bootstrap'
import UserIcon from '@material-ui/icons/AccountCircle'
import UserData from './Dependencies/UserData'
import SignOutButton from './Dependencies/SignOutButton'
import './Style/UserConnectedInfoStyle.css'


class UserConnectedInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfoPopover: false
        }
    }

    render() {
        return (<div className="signUserMainDiv">
            <Row className="signUserMainRow">

                <Col className="signUserMainCol">
                    <OverlayTrigger key="userInformationTT" trigger="click" rootClose placement="bottom" overlay={
                        <Popover id="userInfoPopover">
                            <Popover.Title className="popOverTitle"><strong>{this.props.userConnectedInfo.username}</strong></Popover.Title>
                            <Popover.Content className="popOverContent">
                                <UserData />
                                <hr className="signOutBreakingLine"></hr>
                                <SignOutButton />
                            </Popover.Content>
                        </Popover>}>

                        <UserIcon className="userConnectedSign" />
                    </OverlayTrigger >
                    
                    <span className="userConnectedUserNameSpan">{this.props.userConnectedInfo.username}</span>
                </Col>
            </Row>
        </div>



        )
    }
}

export default connect(store => store.Main)(UserConnectedInfo)