import React from 'react'
import { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap'
import './Style/SignUpNameFormsStyle.css'

class SignUpNameForms extends Component {

    render() {
        return (
            <Row className="SignUpFormRows">
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm FirstNameForm" id="FirstNameForm" type="text" placeholder="First Name" />
                        <span className="SignUpErrorTagSpan" id="FirstNameFormErrorTag"></span>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm LastNameForm" id="LastNameForm" type="text" placeholder="Last Name" />
                        <span  className="SignUpErrorTagSpan" id="LastNameFormErrorTag"></span>

                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUpNameForms