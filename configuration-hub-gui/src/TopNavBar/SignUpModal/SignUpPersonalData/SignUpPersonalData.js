import React from 'react'
import { Component } from 'react'
import {Row, Col, Form } from 'react-bootstrap'

class SignUpPersonalData extends Component{

    render(){
        return(
            <Row>
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm EmailAddForm" id="EmailAddForm" type="text" placeholder="Email Address" />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Control className="SignUpForm userNameForm" id="userNameForm" placeholder="User Name" />
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUpPersonalData