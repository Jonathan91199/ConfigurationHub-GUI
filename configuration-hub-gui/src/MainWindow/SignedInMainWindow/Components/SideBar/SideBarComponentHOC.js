import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import { setSignedInState } from '../../../../Actions/MainReducerAction'
import './Style/SidBarStyle.css'

class SideBarComponentHOC extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.dispatch(setSignedInState({value : this.props.Name}))
        console.log(this.props.signInState)
    }

    render() {
        return (
            <span className="SideBarComponentHOCSpan" onClick={() => this.handleClick()}>
                {this.props.Name}
            </span>
        )
    }
}
export default connect(store => store.Main)(SideBarComponentHOC)