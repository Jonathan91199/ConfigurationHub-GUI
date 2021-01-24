import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { setSignInModalState } from '../../Actions/MainReducerAction'
import SignInInformation from './Components/SignInInformation'
import SignUpOption from './Components/SignUpOption'
import './Style/SignInModalStyle.css'
class SignInModal extends Component {
  
    render() {
        return (
            <Modal className="SignInModalMainDiv"
                show={this.props.signInShowState}
                onHide={() => this.props.dispatch(setSignInModalState({ value: false }))}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >

                <Modal.Header className="SignInModalHeader">

                    <Modal.Title className="SignInModalTitle">Sign In</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <SignInInformation />
                </Modal.Body>

                <Modal.Footer>
                    <SignUpOption />
                </Modal.Footer>
            </Modal>
        )
    }
}
export default connect(store => store.Main)(SignInModal)