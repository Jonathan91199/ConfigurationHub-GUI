import React from 'react'
import { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap'
import './Style/SignUpNameFormsStyle.css'

class SignUpNameForms extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm FirstNameForm" id="FirstNameForm" type="text" placeholder="First Name" />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm LastNameForm" id="LastNameForm" type="text" placeholder="Last Name" />
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUpNameForms