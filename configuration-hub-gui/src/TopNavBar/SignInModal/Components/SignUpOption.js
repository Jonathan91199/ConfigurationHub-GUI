import React from 'react'
import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setSignUpModalState, setSignInModalState } from '../../../Actions/MainReducerAction'
import './Style/SignUpOptionStyle.css'

class SignUpOption extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
        this.props.dispatch(setSignInModalState({ value: false }))
        this.props.dispatch(setSignUpModalState({ value: true }))
    }

    render() {
        return (
            <Col className="SignUpCol">
                <Row className="SignUpRow">
                    <p className="SignUpPTag">Don't Have a User ? </p>
                    <div className="SignUpBtn">
                        <div className="btn-SignUpBtn" onClick={this.handleClick}>
                            <span className="SignUpSpan" >Sign Up Now !</span>
                        </div>
                    </div>
                </Row>
            </Col>
        )
    }
}
export default connect(store => store.Main)(SignUpOption)