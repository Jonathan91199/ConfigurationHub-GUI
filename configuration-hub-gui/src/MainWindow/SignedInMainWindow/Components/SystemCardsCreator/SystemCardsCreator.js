import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSystemId, setSystemState, setShowAddNewSystemModal } from '../../../../Actions/MainReducerAction'
import SystemRowCreator from './Dependencies/SystemRowsCreator'
import { Button } from 'react-bootstrap'
import deleteSystem from './Dependencies/deleteSystem'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddNewSystemModal from './Dependencies/AddNewSystem/addNewSystem'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Style/SystemCardCreatorStyle.css'

let componentDidMounted = false

class SystemCardsCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AllSystemsState: null
        }
        this.deleteSystem = false
        this.handleClick = this.handleClick.bind(this)
        this.addNewSystemCallBack = this.addNewSystemCallBack.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleDelteIcon = this.handleDelteIcon.bind(this)
    }
    handleClick(system) {
        console.log(system)
        this.props.dispatch(setSelectedSystemId({ value: system.id }))
        this.props.dispatch(setSystemState({ value: "BasicLoader" }))
        this.props.PullSingleSystem(system.id)
        this.props.callBack(system)
    }
    handleDeleteClick(system) {
        deleteSystem(system.id, this, () => {
            this.setState({ AllSystemsState: SystemRowCreator(this, this.props.allSystems, 4, this.deleteSystem) })
        })

    }
    handleDelteIcon() {
        this.deleteSystem = !this.deleteSystem
        this.setState({ AllSystemsState: SystemRowCreator(this, this.props.allSystems, 4, this.deleteSystem) })
    }

    addNewSystemCallBack() {

    }

    componentDidMount() {
        componentDidMounted = true
        this.setState({ AllSystemsState: SystemRowCreator(this, this.props.allSystems, 4, this.deleteSystem) })
    }

    render() {
        let deleteButtonState = this.deleteSystem ?
            { variant: "warning", innerHtml: <DeleteForeverIcon className="SystemOptionsIcon" /> } :
            { variant: "danger", innerHtml: <DeleteOutlineIcon className="SystemOptionsIcon" /> }
        if (componentDidMounted) {
            return (
                <div>
                    {this.state.AllSystemsState}
                    <div className="SystemOptionsMainDiv">
                        <Button className="SystemOptionsButton" disabled={this.deleteSystem} variant="success" onClick={() => { this.props.dispatch(setShowAddNewSystemModal({ value: true })) }}><AddCircleOutlineIcon className="SystemOptionsIcon" /></Button>
                        <Button className="SystemOptionsButton" variant={deleteButtonState.variant} onClick={this.handleDelteIcon}>{deleteButtonState.innerHtml}</Button>
                    </div>
                    <AddNewSystemModal cb={() => { this.setState({ AllSystemsState: SystemRowCreator(this, this.props.allSystems, 4, this.deleteSystem) }) }} />
                </div>
            )
        }
        return (<div></div>)

    }
}

export default connect(store => store.Main)(SystemCardsCreator)
