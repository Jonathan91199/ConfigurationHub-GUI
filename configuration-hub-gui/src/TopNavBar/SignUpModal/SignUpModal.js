import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col } from 'react-bootstrap'
import { setSignUpModalState, setSignInModalState } from '../../Actions/MainReducerAction'
import BackSign from '@material-ui/icons/ArrowBack'

import SignUpExplenation from './SignUpExplenation/SignUpExplenation'
import SignUpNameForms from './SignUpNameForms/SignUpNameForms'
import SignUpPersonalData from './SignUpPersonalData/SignUpPersonalData'
import SignUpPassword from './SignUpPasswords/SignUpPassword'
import SignUpButton from './SignUpButton/SignUpButton'
import './Style/SignUpModalStyle.css'

class SignUpModal extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.dispatch(setSignUpModalState({ value: false }))
        this.props.dispatch(setSignInModalState({ value: true }))

    }

    render() {
        return (
            <Modal
                className="SignUpModalMainDiv"
                show={this.props.signUpShowState}
                onHide={() => this.props.dispatch(setSignUpModalState({ value: false }))}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="SignUpModalHeader">
                    <Col>
                        <Row className="SignUpModalTitleRow">
                            <div className="BackSignArrowDiv" onClick={this.handleClick}>
                                <BackSign className="BackSignArrow" />
                            </div>

                            <Modal.Title className="SignUpModalTitle">Sign Up For ConfigurationHub</Modal.Title>
                        </Row>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <SignUpExplenation />
                    <SignUpNameForms />
                    <SignUpPersonalData />
                    <SignUpPassword />
                    <SignUpButton />

                </Modal.Body>

            </Modal>

        )
    }
}

export default connect(store => store.Main)(SignUpModal)