import { DeviceSignalCellularNull } from 'material-ui/svg-icons'
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSystemId, setSystemState } from '../../../../../../Actions/MainReducerAction'
import SystemRowCreator from './Dependencies/SystemRowsCreator'
import PullSystemById from '../SystemMicroServiceChoose/Dependencies/PullSystemById'
import './Style/SystemCardCreatorStyle.css'

let componentDidMounted = false

class SystemCardsCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AllSystemsState: null
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(system) {
        this.props.dispatch(setSelectedSystemId({ value: system.id }))
        this.props.dispatch(setSystemState({ value: "ChooseMicroService" }))
        this.props.PullSingleSystem(system.id)
        this.props.callBack(system)

    }



    componentDidMount() {
        componentDidMounted = true
        this.setState({ AllSystemsState: SystemRowCreator(this, this.props.allSystems, 4) })
    }

    render() {

        if (componentDidMounted) {
            return (
                <div>
                    {this.state.AllSystemsState}
                </div>
            )
        }
        return (<div></div>)

    }
}

export default connect(store => store.Main)(SystemCardsCreator)
