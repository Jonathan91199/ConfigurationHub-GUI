
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

            <Col>
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
            // <Card style={{ width: '100%', minWidth: "40rem" }} className="WelcomeCard">
            //     <Card.Body>
            //         <Card.Title className="WelcomeCardTitle">Welcome To ConfigurationHub</Card.Title>
            //         <Card.Subtitle className="WelcomeCardSubTitle mb-2">a REST API Configuration</Card.Subtitle>

            //                 <Card.Text as="div">
            //                     <Explentaion />
            //                 </Card.Text>
            //                 <Card.Link style={{ cursor: "pointer" }} onClick={() => { this.handleClick("SignIn") }}>Sign In</Card.Link>
            //                 <Card.Link style={{ cursor: "pointer" }} onClick={() => { this.handleClick("SignUp") }}>Sign Up</Card.Link>
            //     </Card.Body>
            // </Card>
        )
    }
}
export default connect(store => store.Main)(ExplenationCard)
