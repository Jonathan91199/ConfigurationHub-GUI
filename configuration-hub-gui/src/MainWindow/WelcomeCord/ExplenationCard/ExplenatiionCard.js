
import React from 'react'
import { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'
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

            <Card style={{ width: '100%', minWidth: "40rem" }} className="WelcomeCard FirstCard">
                <Card.Body>
                    <Card.Title className="WelcomeCardTitle">Welcome To ConfigurationHub</Card.Title>
                    <Card.Subtitle className="WelcomeCardSubTitle mb-2">a REST API Configuration</Card.Subtitle>
                    <Accordion.Toggle as={"span"} style={{ cursor: "pointer" }} variant="link" eventKey="0">
                        Learn More !
                          </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div>
                            <Card.Text as="div">
                                <Explentaion />
                            </Card.Text>
                            <Card.Link style={{ cursor: "pointer" }} onClick={() => { this.handleClick("SignIn") }}>Sign In</Card.Link>
                            <Card.Link style={{ cursor: "pointer" }} onClick={() => { this.handleClick("SignUp") }}>Sign Up</Card.Link>
                        </div>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        )
    }
}
export default connect(store => store.Main)(ExplenationCard)
