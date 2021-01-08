import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap'
import { setSignUpModalState } from '../../Actions/MainReducerAction'
import SignUpExplenation from './SignUpExplenation/SignUpExplenation'
import SignUpNameForms from './SignUpNameForms/SignUpNameForms'
import SignUpPersonalData from './SignUpPersonalData/SignUpPersonalData'
import SignUpPassword from './SignUpPasswords/SignUpPassword'
import SignUpButton from './SignUpButton/SignUpButton'
import './Style/SignUpModalStyle.css'

class SignUpModal extends Component {

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
                    <Modal.Title className="SignUpModalTitle">Sign Up For ConfigurationHub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpExplenation />
                    <SignUpNameForms/>
                    <SignUpPersonalData/>
                    <SignUpPassword/>
                    <SignUpButton/>

                </Modal.Body>
               
            </Modal>

        )
    }
}

export default connect(store => store.Main)(SignUpModal)