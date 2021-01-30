import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from './Components/SideBar/SideBar'
import './Style/SignedInMainWindowStyle.css'

class SignedInMainWindow extends Component {

    render() {
        return (
                    <Row className="SignedInMainWindowMainRow">
                        <Col   className="SignedInMainWindowMainCol">
                            <SideBar/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>



        )
    }
}

export default connect(store => store.Main)(SignedInMainWindow)