import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from './Components/SideBar/SideBar'
import MainConfigurationWindow from './Components/MainConfigurationWindow/MainConfigurationWindow'
import './Style/SignedInMainWindowStyle.css'

class SignedInMainWindow extends Component {

    render() {
        return (
            <Row className="SignedInMainWindowMainRow">
                <Col>
                    <MainConfigurationWindow />
                </Col>
            </Row>



        )
    }
}

export default connect(store => store.Main)(SignedInMainWindow)