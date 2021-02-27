import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import pullAllSystems from './Dependencies/PullAllSystems'
import NoSystemsCard from './Components/NoSystemsCard/NoSystems'
import SystemCardsCreator from './Components/SystemCardsCreator/SystemCardsCreator'
import PullSystemById from './Components/SystemMicroServiceChoose/Dependencies/PullSystemById'
import SystemMicroServiceChoose from './Components/SystemMicroServiceChoose/SystemMicroServiceChoose'
import MicroServiceConfig from './Components/MicroServiceConfig/MicroServiceConfig'

class MainConfigurationWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skip: 0,
            take: 15,
            choosenSystem : null

        }
        pullAllSystems(this, this.state.skip, this.state.take)

    }


    render() {
        let SystemState = {
            "ChooseSystem": <SystemCardsCreator callBack={(system) => this.setState({choosenSystem : system})} PullSingleSystem={(id) => PullSystemById(id, this)} />,
            "ChooseMicroService": <SystemMicroServiceChoose callBack={() => this.forceUpdate()} system={this.state.choosenSystem} />,
            "ShowMircoServiceConfig" : <MicroServiceConfig/>
        }
        return this.props.allSystems.length === 0 ? <NoSystemsCard /> : SystemState[this.props.SystemState]
    }
}

export default connect(store => store.Main)(MainConfigurationWindow)