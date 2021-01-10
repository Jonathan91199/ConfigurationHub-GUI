import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setIsUserConnected, setUserConnectedInfo} from '../../../Actions/MainReducerAction'


class SignOutButton extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.dispatch(setUserConnectedInfo({value : null}))
        this.props.dispatch(setIsUserConnected({value : false}))
    }

    render() {
        return (
            <div className="SignOutFirstBtn">
                <div className="btn-SignOutFirstBtn" onClick={this.handleClick}>
                    <span>SIGN OUT</span>
                </div>
            </div>
        )
    }
}
export default connect(store => store.Main)(SignOutButton)