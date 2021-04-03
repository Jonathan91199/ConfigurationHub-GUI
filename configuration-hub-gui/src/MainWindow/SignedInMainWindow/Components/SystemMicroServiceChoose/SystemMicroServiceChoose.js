import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Button } from 'react-bootstrap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SystemRowCreator from '../SystemCardsCreator/Dependencies/SystemRowsCreator'
import { setSystemState, setMicroServiceModalState, setSelectedMicroService } from '../../../../Actions/MainReducerAction'
import AddMicroServiceModal from './Dependencies/AddMicroServiceModal/AddMicroServiceModal'
import PullSystemById from './Dependencies/PullSystemById'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import deleteMicroService from './Dependencies/deleteMicroService'
import Header from '../Header/Header'
import './Style/SystemMicroServiceStyle.css'

class SystemMicroServiceChoose extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleGoBackClick = this.handleGoBackClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleActiveAddMsClick = this.handleActiveAddMsClick.bind(this)
        this.handleDelteIcon = this.handleDelteIcon.bind(this)
        this.deleteMicroServiceVarient = false
    }
    handleClick(microService) {
        this.props.dispatch(setSelectedMicroService({ value: microService }))
        this.props.dispatch(setSystemState({ value: "ShowMircoServiceConfig" }))

    }
    handleDeleteClick(microService) {
        this.deleteMicroServiceVarient = false
        deleteMicroService(microService.id, this)
    }

    handleDelteIcon() {
        this.deleteMicroServiceVarient = !this.deleteMicroServiceVarient
        this.forceUpdate()
    }
    handleGoBackClick() {
        this.props.dispatch(setSystemState({ value: "ChooseSystem" }))
    }
    handleActiveAddMsClick() {
        PullSystemById(this.props.system.id, this, ()=>this.forceUpdate)
        
    }

    render() {

        let microServices = this.props.selectedSystem === null ? [] : this.props.selectedSystem.microservices
        console.log(microServices)
        let microServiceOptions = SystemRowCreator(this, microServices, 4, this.deleteMicroServiceVarient)
        let deleteButtonState = this.deleteMicroServiceVarient ?
            { variant: "warning", innerHtml: <DeleteForeverIcon className="MsOptionsIcon" />, className: "MsOptionsButton" } :
            { variant: "danger", innerHtml: <DeleteOutlineIcon className="MsOptionsIcon" />, className: "MsOptionsButton" }

        if(microServices.length === 0){
            deleteButtonState.className = "MsOptionsButtonDisabled"
        }
        return (
            <div>
                <div>
                    <Row className="BackToSystemsButtonRow" >
                        <div className="backToSystemChoosingArrowDiv">
                            <ArrowBackIcon className="backToSystemChoosingArrow" onClick={this.handleGoBackClick} />
                        </div>
                        <Header headerName={`'${this.props.system.name}' Micro Services`} />
                        <div></div>
                    </Row>
                    {microServiceOptions}
                </div>
                <div className="SystemOptionsMainDiv">
                    <Button className="MsOptionsButton" disabled={this.deleteMicroServiceVarient} variant="success" onClick={() => { this.props.dispatch(setMicroServiceModalState({ value: true })) }}><AddCircleOutlineIcon className="MsOptionsIcon" /></Button>
                    <Button className={deleteButtonState.className} variant={deleteButtonState.variant} onClick={this.handleDelteIcon}>{deleteButtonState.innerHtml}</Button>
                </div>
                <AddMicroServiceModal system={this.props.system} callBack={() => this.handleActiveAddMsClick()} />
            </div >
        )
    }
}

export default connect(store => store.Main)(SystemMicroServiceChoose)