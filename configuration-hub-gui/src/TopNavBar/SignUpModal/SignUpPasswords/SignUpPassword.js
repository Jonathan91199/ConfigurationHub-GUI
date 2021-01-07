import React from 'react'
import { Component } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import './Style/SignUpPasswordStyle.css'

class SignUpPassword extends Component {
    constructor(props) {
        super(props)
        this.state = { showPassword: false }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
        let passwordCheckBoxValue = document.getElementById("passwordCheckBoxId").checked
        this.setState({ showPassword: passwordCheckBoxValue })
    }

    render() {
        let formType = this.state.showPassword ? "text" : "password"
        return (
            <div>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control className="SignUpForm FirstPasswordForm" id="FirstPasswordForm" type={formType} placeholder="Password" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Control className="SignUpForm SecondPasswordForm"  type={formType} id="SecondPasswordForm" placeholder="Enter Password Again" />
                        </Form>
                    </Col>
                </Row>
                <Row className="PasswordCheckBox">
                    <Form.Group controlId="formBasicCheckbox" >
                        <Form.Check type="checkbox" label="View Password" id="passwordCheckBoxId" onClick={this.handleClick} />
                    </Form.Group>
                </Row>
                <hr style={{border : "0.1px solid grey"}}/>
            </div>
        )
    }
}

export default SignUpPassword