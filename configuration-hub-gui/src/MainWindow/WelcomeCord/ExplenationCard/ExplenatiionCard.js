
import React from 'react'
import { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../Style/WelcomeCardStyle.css'
import Explentaion from './Explenation'
import { setSignInModalState, setSignUpModalState } from '../../../Actions/MainReducerAction'


class ExplenationCard extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(type) {
        let signType = {
            "SignIn": setSignInModalState,
            "SignUp": setSignUpModalState
        }
        this.props.dispatch(signType[type]({ value: true }))
    }

    render() {
        return (

            <Col className="ExplenationMainCol">
                <Row className="ExplenationMainDiv">
                    <Col className="WelcomeCol">
                        <Row className="WelcomeTitle">
                            Welcome To ConfigurationHub
                        </Row>
                        <Row className="WelcomeSubTitle">
                            a REST API Configuration
                        </Row>
                    </Col>
                    <Col xs={7}>
                        <Explentaion />
                    </Col>
                </Row>

            </Col>
           
        )
    }
}
export default connect(store => store.Main)(ExplenationCard)
