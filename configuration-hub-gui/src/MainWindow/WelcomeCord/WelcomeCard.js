import React from 'react'
import { Component } from 'react';
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import './Style/WelcomeCardStyle.css'
import Explentaion from './Explenation'
import { setSignInModalState } from '../../Actions/MainReducerAction'

class WelcomeCard extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.dispatch(setSignInModalState({ value: true }))
    }

    render() {
        return (
            <div className="WelcomeCardMainDiv">
                <Card style={{ width: '50%', maxWidth: "80rem", minWidth: "40rem" }} className="WelcomeCard">
                        <Card.Body>
                            <Card.Title className="WelcomeCardTitle">Welcome To ConfigurationHub</Card.Title>
                            <Card.Subtitle className="WelcomeCardSubTitle mb-2">a REST API Configuration</Card.Subtitle>
                            <Card.Text as="div">
                                <Explentaion />
                            </Card.Text>
                            <Card.Link style={{ cursor: "pointer" }} onClick={this.handleClick}>Sign In</Card.Link>
                        </Card.Body>
                </Card>
            </div>
        )
    }
}

export default connect(store => store.Main)(WelcomeCard)