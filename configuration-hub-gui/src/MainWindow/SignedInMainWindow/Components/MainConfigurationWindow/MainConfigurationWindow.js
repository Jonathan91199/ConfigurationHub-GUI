import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import pullAllSystems from './Dependencies/PullAllSystems'
import NoSystemsCard from './Components/NoSystemsCard/NoSystems'
import SystemCardsCreator from './Components/SystemCardsCreator/SystemCardsCreator'

class MainConfigurationWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skip : 0,
            take : 15
        }
        pullAllSystems(this, this.state.skip, this.state.take)

    }

  
    render() {
        let SystemState = {
            "ChooseSystem" : <SystemCardsCreator/>,
            "ChooseMicroService" : <SystemMicroServiceChoose/>
        }
        return this.props.allSystems.length === 0 ? <NoSystemsCard/> : <SystemCardsCreator/> 
    }
}

export default connect(store => store.Main)(MainConfigurationWindow)