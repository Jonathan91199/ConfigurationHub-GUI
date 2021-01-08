import React, { Component } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/ControlPoint'
import SingUpValidation from '../SignUpValidation/SignUpValidation'
import './Style/SignUpButtonStyle.css'

class SignUpButton extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        SingUpValidation()
    }
    render() {
        return (
            <Row>
                <Col>
                    <Form.Group controlId="formBasicCheckbox" >
                        <Form.Check type="checkbox" className="termsAgreeCheckBox" label="I Agree To The Terms Of The Service" id="termsAgreeCheckbox" onClick={this.handleClick} />
                    </Form.Group>
                </Col>
                <Col>
                    <div className="SignUpbox">
                        <div className="SignUpSecondBtn SUBtn" onClick={this.handleClick} >
                            <span className="testSpan"><AddIcon/></span>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default SignUpButton
