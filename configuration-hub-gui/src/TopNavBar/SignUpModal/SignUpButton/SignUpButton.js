import React, { Component } from 'react'
import { Col, Row, Form, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import AddIcon from '@material-ui/icons/ControlPoint'
import {setSignUpUserError, setSignUpExplenationAlert} from '../../../Actions/MainReducerAction'
import SingUpValidation from '../SignUpValidation/SignUpValidation'
import SignUpNewUser from '../SignUpNewUser/SignUpNewUser'
import './Style/SignUpButtonStyle.css'

class SignUpButton extends Component {
    constructor(props) {
        super(props)
        this.state = {showLoadingSpinner : false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.dispatch(setSignUpUserError({ value: "" }))
        this.props.dispatch(setSignUpExplenationAlert({ value: 'info' }))
        if (SingUpValidation()) {
            this.setState({showLoadingSpinner : true})
            setTimeout(()=>{
                SignUpNewUser(this)
                this.setState({showLoadingSpinner : false})

            }, 1500)
        }
    }
    render() {
        let buttonType = {
            false : <AddIcon />,
            true : <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        }
        return (
            <Row>
                <Col>
                    <Form.Group controlId="formBasicCheckbox" id="termsAgreeCheckboxMain" >
                        <Form.Check type="checkbox" className="termsAgreeCheckBox" label="I Agree To The Terms Of The Service" id="termsAgreeCheckbox" />
                    </Form.Group>
                </Col>
                <Col>
                    <div className="SignUpbox">
                        <div className="SignUpSecondBtn SUBtn" onClick={this.handleClick} >
                            <span className="testSpan">{buttonType[this.state.showLoadingSpinner]}</span>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default connect(store => store.Main)(SignUpButton)
