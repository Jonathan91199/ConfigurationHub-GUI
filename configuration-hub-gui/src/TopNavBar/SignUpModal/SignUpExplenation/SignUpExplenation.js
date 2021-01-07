import React from 'react'
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import './Style/SignUpExplenationStyle.css'


class SignUpExplenation extends Component {
    render() {
        return (
            <div className="SignUpExplenation">
                <Col>
                    <Row>
                        <p className="Explenation">Please Fill The Following Information For Us To Create Your New ConfigurationHub User</p>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default SignUpExplenation