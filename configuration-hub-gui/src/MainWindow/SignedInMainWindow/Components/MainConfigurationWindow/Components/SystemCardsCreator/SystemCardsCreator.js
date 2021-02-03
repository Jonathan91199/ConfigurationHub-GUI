import { DeviceSignalCellularNull } from 'material-ui/svg-icons'
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSystemId, setSystemState} from '../../../../../../Actions/MainReducerAction'
import SystemRowCreator from './Dependencies/SystemRowsCreator'
import PullSystemById from './Dependencies/PullSystemById'
import './Style/SystemCardCreatorStyle.css'

let componentDidMounted = false

class SystemCardsCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PageState : "ChooseSystem",
            AllSystemsState: null,
            AllSystemMS : null
        }
        this.handleSystemClick = this.handleSystemClick.bind(this)
    }
    handleSystemClick(id) {
        this.props.dispatch(setSelectedSystemId({ value: id }))
        this.props.dispatch(setSystemState({value : "ChooseMicroService"}))
        PullSystemById(id, this)
        this.setState({PageState : "ChooseMicroService"})
    }



    componentDidMount() {
        componentDidMounted = true
        SystemRowCreator(this)
    }

    render() {
        let pageType = {
            "ChooseSystem" : "AllSystemsState",
            "ChooseMicroService" : "AllSystemMS"
        }
        if (componentDidMounted) {
            return (
                <div>
                    {this.state[pageType[this.state.PageState]]}
                </div>
            )
        }
        return (<div></div>)

    }
}

export default connect(store => store.Main)(SystemCardsCreator)
