import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SystemRowCreator from '../SystemCardsCreator/Dependencies/SystemRowsCreator'
import { setSystemState } from '../../../../../../Actions/MainReducerAction'
import './Style/SystemMicroServiceStyle.css'

class SystemMicroServiceChoose extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleGoBackClick = this.handleGoBackClick.bind(this)
    }
    handleClick(microService) {
        console.log(microService)
    }
    handleGoBackClick() {
        this.props.dispatch(setSystemState({ value: "ChooseSystem" }))
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
                <Row className="AddNewMsRow">
                    <i class="bi bi-file-earmark-plus"> Add Micro Service</i>
                </Row>
            </div>
        )
    }
}

export default connect(store => store.Main)(SystemMicroServiceChoose)