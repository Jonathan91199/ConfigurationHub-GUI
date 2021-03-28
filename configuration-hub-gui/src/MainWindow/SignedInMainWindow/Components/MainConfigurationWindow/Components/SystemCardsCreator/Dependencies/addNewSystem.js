import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setShowAddNewSystemModal } from '../../../../../../../Actions/MainReducerAction'
import { Modal, Col, Row, Form } from 'react-bootstrap'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { NotificationManager } from 'react-notifications'
import Axios from 'axios'
import pullAllSystems from '../../../Dependencies/PullAllSystems'

class AddNewSystemModal extends Component {
    constructor(props) {
        super(props)
        this.handleAddClick = this.handleAddClick.bind(this)
    }

    handleAddClick() {
        let _ = this
        let name = document.getElementById('SystemNameForm').value
        if (name.length > 0) {
            Axios.post(`http://${window.location.hostname}:51241/api/Systems`, {
                "name": name
            },
                {
                    headers: {
                        "accept": "*/*",
                        "Authorization": `Bearer ${_.props.userConnectedInfo.token}`,
                        "Content-Type": "application/json"

                    }
                })
                .then(() => {
                    NotificationManager.success('Success !', '', 3000)
                    _.props.dispatch(setShowAddNewSystemModal({ value: false }))
                    pullAllSystems(_, 0, 15, () => {
                        _.props.cb()
                    })


                })
                .catch(err => {
                    console.error(err)
                    _.props.dispatch(setShowAddNewSystemModal({ value: false }))
                    NotificationManager.error('Error Adding System', '', 3000)
                })
        }
    }

    render() {
        return (
            <Modal
                show={this.props.addNewSystemModal}
                onHide={() => this.props.dispatch(setShowAddNewSystemModal({ value: false }))}
                className="AddMsModalMain"
                size={'lg'}
            >
                <Modal.Header className="AddMsModalHeader">
                    <Modal.Title className="AddMsModalTitle">Add A New System</Modal.Title>
                </Modal.Header>
                <Modal.Body className="AddMsModalBody">
                    <Col>
                        <Row className="AddMsModalBodyRow">
                            <Form.Group controlId="MicroServiceForm">

                                <Col className="AddMsModalBodyCol">
                                    <Form.Control placeholder="System Name" id="SystemNameForm" />
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
export default connect(store => store.Main)(AddNewSystemModal)