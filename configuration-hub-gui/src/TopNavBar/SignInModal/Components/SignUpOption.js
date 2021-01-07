import React from 'react'
import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import './Style/SignUpOptionStyle.css'

class SignUpOption extends Component {
    render() {
        return (
            <Col className="SignUpCol">
                <Row className="SignUpRow">
                    <p className="SignUpPTag">Don't Have a User ? </p>
                    <div className="SignUpBtn">
                        <div className="btn-SignUpBtn">
                            <span className="SignUpSpan" >Sign Up Now !</span>
                        </div>
                    </div>
                </Row>
            </Col>
        )
    }
}
export default connect(store => store.Main)(SignUpOption)