import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SystemRowCreator from '../SystemCardsCreator/Dependencies/SystemRowsCreator'
import { setSystemState, setMicroServiceModalState, setSelectedMicroService } from '../../../../../../Actions/MainReducerAction'
import AddMicroServiceModal from './Dependencies/AddMicroServiceModal/AddMicroServiceModal'
import PullSystemById from './Dependencies/PullSystemById'
import './Style/SystemMicroServiceStyle.css'

class SystemMicroServiceChoose extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleGoBackClick = this.handleGoBackClick.bind(this)
        this.handleAddMsClick = this.handleAddMsClick.bind(this)
        this.handleActiveAddMsClick = this.handleActiveAddMsClick.bind(this)
    }
    handleClick(microService) {
        console.log(microService)
        console.log(this.props.system)
        this.props.dispatch(setSelectedMicroService({value : microService}))
        this.props.dispatch(setSystemState({ value: "ShowMircoServiceConfig" }))

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
        let microServiceOptions = SystemRowCreator(this, microServices, 4)
        return (
            <div>

                <div>
                    <Row className="BackToSystemsButtonRow" >
                        <div className="BackToSystemsButtonDiv" onClick={() => this.handleGoBackClick()}>
                            <ArrowBackIcon className="BackToSystemsButton" />
                        &nbsp; Go Back &nbsp;
                    </div>
                    </Row>
                    {microServiceOptions}

                </div>
                <Row className="AddNewMsRow" onClick={() => this.props.dispatch(setMicroServiceModalState({ value: true }))}>
                    <i class="bi bi-file-earmark-plus"> Add Micro Service</i>
                </Row>
                <AddMicroServiceModal system={this.props.system} callBack={() => this.handleActiveAddMsClick()} />
            </div >
        )
    }
}

export default connect(store => store.Main)(SystemMicroServiceChoose)