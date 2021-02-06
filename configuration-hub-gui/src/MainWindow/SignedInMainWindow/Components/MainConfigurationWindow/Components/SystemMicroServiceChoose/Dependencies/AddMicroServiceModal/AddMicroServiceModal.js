import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Row, Col, Form } from 'react-bootstrap'
import { setMicroServiceModalState } from '../../../../../../../../Actions/MainReducerAction'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Axios from 'axios'
import './AddMicroServiceModalStyle.css'

class AddMicroServiceModal extends Component {
    constructor(props) {
        super(props)
        this.handleAddClick = this.handleAddClick.bind(this)
    }
    handleAddClick() {
        this.props.dispatch(setMicroServiceModalState({ value: false }))
        let name = document.getElementById('MicroServiceForm').value
        let _ = this
        Axios.post(`http://localhost:51241/api/Microservices`, {

            "name": name,
            "system": {
                "id": _.props.system.id

            }
        }, {
            headers: {
                "accept": "text/plain",
                "Authorization": `Bearer ${_.props.userConnectedInfo.token}`,
                "Content-Type": "application/json"
            }

        }).then(res => { _.props.callBack() })
    }


    render() {
        return (
            <Modal
                show={this.props.microServiceModalState}
                onHide={() => this.props.dispatch(setMicroServiceModalState({ value: false }))}
                className="AddMsModalMain"
                size={'lg'}
            >
                <Modal.Header className="AddMsModalHeader">
                    <Modal.Title className="AddMsModalTitle">{`Add Micro Service for "${this.props.system.name}"`}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="AddMsModalBody">
                    <Col>
                        <Row className="AddMsModalBodyRow">
                            <Form.Group controlId="MicroServiceForm">

                                <Col className="AddMsModalBodyCol">
                                    <Form.Control placeholder="MicroService Name" />
                                </Col>
                            </Form.Group>
                        </Row>
                    </Col>

                </Modal.Body>
                <Modal.Footer className="AddMsModalFooter">
                    <div className="AddMicroServiceButton" onClick={() => this.handleAddClick()}>
                        <AddCircleOutlineIcon className="AddMsCircleOutlineIcon" />&nbsp;Add
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default connect(store => store.Main)(AddMicroServiceModal)