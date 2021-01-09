import React from 'react'
import { Component } from 'react';
import { Col, Row, Alert } from 'react-bootstrap'
import {connect} from 'react-redux'
import './Style/SignUpExplenationStyle.css'


class SignUpExplenation extends Component {


    render() {
        var alertType = {
            info : "Please Fill The Following Information For Us To Create Your New ConfigurationHub User",
            danger : this.props.SignUpUserError,
            success : this.props.SignUpUserError
        }
        return (
            <div className="SignUpExplenation">
                <Col>
                    <Row className="explenationRow">
                        <Alert variant={this.props.SignUpExplenation} className="Explenation">{alertType[this.props.SignUpExplenation]}</Alert>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default connect(store => store.Main)(SignUpExplenation)