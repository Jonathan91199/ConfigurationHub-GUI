import React from 'react'
import { Component } from 'react';
import { Col, Row, Alert } from 'react-bootstrap'
import './Style/SignUpExplenationStyle.css'


class SignUpExplenation extends Component {
    render() {
        return (
            <div className="SignUpExplenation">
                <Col>
                    <Row>
                        <Alert variant="info" className="Explenation">Please Fill The Following Information For Us To Create Your New ConfigurationHub User</Alert>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default SignUpExplenation