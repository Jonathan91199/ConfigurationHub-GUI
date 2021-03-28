import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Button } from 'react-bootstrap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SystemRowCreator from '../SystemCardsCreator/Dependencies/SystemRowsCreator'
import { setSystemState, setMicroServiceModalState, setSelectedMicroService } from '../../../../../../Actions/MainReducerAction'
import AddMicroServiceModal from './Dependencies/AddMicroServiceModal/AddMicroServiceModal'
import PullSystemById from './Dependencies/PullSystemById'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Axios from 'axios'
import './Style/SystemMicroServiceStyle.css'
import { NotificationManager } from 'react-notifications';

class SystemMicroServiceChoose extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleGoBackClick = this.handleGoBackClick.bind(this)
        this.handleAddMsClick = this.handleAddMsClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleActiveAddMsClick = this.handleActiveAddMsClick.bind(this)
        this.handleDelteIcon = this.handleDelteIcon.bind(this)
        this.deleteMicroService = false
    }
    handleClick(microService) {
        console.log(microService)
        console.log(this.props.system)
        this.props.dispatch(setSelectedMicroService({ value: microService }))
        this.props.dispatch(setSystemState({ value: "ShowMircoServiceConfig" }))

    }
    handleDeleteClick(microService) {
        let that = this
        Axios.delete(`http://${window.location.hostname}:51241/api/Microservices/${microService.id}`, {
            headers: {
                "accept": "*/*",
                "Authorization": `Bearer ${that.props.userConnectedInfo.token}`,
            }
        })
        .then(()=>{
            NotificationManager.success('Success !','', 3000)
            PullSystemById(this.props.system.id, this)

        })
        .catch(err => {
            console.error(err)
            NotificationManager.error('Error Deleting MicroService', '', 3000)
        })

    }
    handleDelteIcon() {
        this.deleteMicroService = !this.deleteMicroService
        this.forceUpdate()
    }
    handleGoBackClick() {
        this.props.dispatch(setSystemState({ value: "ChooseSystem" }))
    }
    handleAddMsClick() {

    }
    handleActiveAddMsClick() {
        PullSystemById(this.props.system.id, this)
        this.forceUpdate()
    }

    render() {
        let microServices = this.props.selectedSystem === null ? [] : this.props.selectedSystem.microservices
        let microServiceOptions = SystemRowCreator(this, microServices, 4, this.deleteMicroService)
        let deleteButtonState = this.deleteMicroService ?
            { variant: "warning", innerHtml: <DeleteForeverIcon className="SystemOptionsIcon" /> } :
            { variant: "danger", innerHtml: <DeleteOutlineIcon className="SystemOptionsIcon" /> }
        return (
            <div>

                <div>
                    <Row className="BackToSystemsButtonRow" >
                        <div className="backToSystemChoosingArrowDiv">
                            <ArrowBackIcon className="backToSystemChoosingArrow" onClick={this.handleGoBackClick} />
                        </div>
                    </Row>
                    {microServiceOptions}

                </div>
                <div className="SystemOptionsMainDiv">
                    <Button className="SystemOptionsButton" disabled={this.deleteMicroService} variant="success" onClick={() => { this.props.dispatch(setMicroServiceModalState({ value: true })) }}><AddCircleOutlineIcon className="SystemOptionsIcon" /></Button>
                    <Button className="SystemOptionsButton" variant={deleteButtonState.variant} onClick={this.handleDelteIcon}>{deleteButtonState.innerHtml}</Button>
                </div>
                <AddMicroServiceModal system={this.props.system} callBack={() => this.handleActiveAddMsClick()} />
            </div >
        )
    }
}

export default connect(store => store.Main)(SystemMicroServiceChoose)