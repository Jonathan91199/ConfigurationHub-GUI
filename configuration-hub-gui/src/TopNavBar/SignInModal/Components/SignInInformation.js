import React from 'react'
import { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import './Style/SignInInformation.css'


class SignInInformation extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="SignInInformationMainDiv">
                <Form>
                    <Col>
                        <Row className="SignInRow">
                            <Form.Control className="SignInFormControl" placeholder="User Name" required />
                      
                        </Row>
                        <Row className="SignInRow">
                            <Form.Control type="password" className="SignInFormControl :invalid " placeholder="Password" />
                        </Row>

                        <Row className="SignInRow">
                            <div class="SignInSecondBtn">
                                <div class="btn btn-SignInSecondBtn" onClick={this.handleClick}>
                                    <span className="SignInSpan">Sign In</span>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Form>
            </div>
        )
    }
}

export default connect(store => store.Main)(SignInInformation)