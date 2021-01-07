import React from 'react'
import { Component } from 'react';
import { Form, Row, Col, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { setSignInModalState } from '../../../Actions/MainReducerAction'
import handleFormChange from './handleFormChange'
import Validator, { resetFormColor } from './Validator'
import Axios from 'axios'
import './Style/SignInInformation.css'


class SignInInformation extends Component {
    constructor(props) {
        super(props)
        this.state = { loadingSpinner: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleValidationError = this.handleValidationError.bind(this)
        this.connectUser = this.connectUser.bind(this)

    }

    connectUser() {
        resetFormColor()
        this.setState({ loadingSpinner: true })
        var _ = this
        setTimeout(() => {
            Axios.post(`http://localhost:8000/userExist`, {
                userName: this.props.inputUserName, password: this.props.inputPassword
            }).then(res => {
                this.setState({ loadingSpinner: false })

                if (res.data[0]) {
                    _.props.dispatch(setSignInModalState({ value: false }))
                }
                else {
                    document.getElementById('NoUserError').innerHTML = '*User Name Or Password Incorrect'
                }

            })
        }, 1000)

    }



    handleValidationError(errorList) {
        resetFormColor()
        errorList.forEach(error => {
            document.getElementById(error[1]).style.border = "1px solid red"
            document.getElementById(error[1] + 'ErrorTag').innerHTML = "*" + error[2]
        })

    }
    handleClick() {
        let errorList = []
        let validationAnswer = Validator(this.props.inputUserName, this.props.inputPassword)
        validationAnswer.forEach(answer => {
            if (!answer[0]) { errorList.push(answer) }
        })
        errorList.length > 0 ? this.handleValidationError(errorList) : this.connectUser()

    }
    handleChange(type) {
        let value = document.getElementById(type).value
        handleFormChange(this, type, value)
    }
    render() {
        let loadingSpinner = this.state.loadingSpinner ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : <div>Sign In</div>

        return (
            <div className="SignInInformationMainDiv">
                <Form>
                    <Col>
                        <Row className="SignInRow NoUserError" id="NoUserError"></Row>
                        <Row className="SignInRow">
                            <Form.Control id="userName" className="SignInFormControl" placeholder="User Name" onChange={() => this.handleChange('userName')} value={this.props.inputUserName} />
                        </Row>
                        <Row className="SignInRow"><p id="userNameErrorTag"></p></Row>
                        <Row className="SignInRow">
                            <Form.Control id="password" type="password" className="SignInFormControl" placeholder="Password" onChange={() => this.handleChange('password')} value={this.props.inputPassword} />
                        </Row>
                        <Row className="SignInRow"><p id="passwordErrorTag"></p></Row>

                        <Row className="SignInRow">
                            <div className="SignInSecondBtn">
                                <div className="btn-SignInSecondBtn" onClick={this.handleClick}>
                                    <span className="SignInSpan" id="SignInSpan">{loadingSpinner}</span>
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