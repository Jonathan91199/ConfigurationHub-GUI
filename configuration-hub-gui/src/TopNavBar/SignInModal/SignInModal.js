import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { setSignInModalState } from '../../Actions/MainReducerAction'
import SignInInformation from './Components/SignInInformation'
import './Style/SignInModalStyle.css'
class SignInModal extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="SignInModalMainDiv">
                <Modal
                    show={this.props.signInShowState}
                    onHide={() => this.props.dispatch(setSignInModalState({ value: false }))}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header className="SignInModalHeader">
                        <Modal.Title  className="SignInModalTitle">Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SignInInformation/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default connect(store => store.Main)(SignInModal)