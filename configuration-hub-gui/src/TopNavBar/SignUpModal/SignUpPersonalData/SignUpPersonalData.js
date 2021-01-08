import React from 'react'
import { Component } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

class SignUpPersonalData extends Component {

    render() {
        return (
            <Row className="SignUpFormRows">
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm EmailAddForm" id="EmailAddForm" type="text" placeholder="Email Address" />
                        <span className="SignUpErrorTagSpan" id="EmailAddFormErrorTag"></span>

                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm userNameForm" id="userNameForm" placeholder="User Name" />
                        <span className="SignUpErrorTagSpan" id="userNameFormErrorTag"></span>

                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUpPersonalData