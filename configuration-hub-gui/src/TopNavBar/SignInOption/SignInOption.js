import React from 'react'
import { Component } from 'react';
import { setSignInModalState } from '../../Actions/MainReducerAction'
import { connect } from 'react-redux'
import SignInIcon from '@material-ui/icons/ExitToApp'

import './Style/SignInOptionStyle.css'

class SignInOption extends Component {
    constructor(props) {
        super(props)
        this.handleSignInClick = this.handleSignInClick.bind(this)
    }

    handleSignInClick() {
        this.props.dispatch(setSignInModalState({ value: true }))

    }
    render() {
        return (
            <div className="box-1">
                <div className="SignInFirstBtn btn-one" onClick={this.handleSignInClick}>
                    <span>SIGN IN <SignInIcon /></span>
                </div>
            </div>
        )
    }
}

export default connect(store => store.Main)(SignInOption)