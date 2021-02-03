import React from 'react'
import { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setSignedInState } from '../../../../../../Actions/MainReducerAction'
import './NoSystemsStyle.css'

class NoConfigurationCard extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
        this.props.dispatch(setSignedInState({ value: "New System" }))
    }

    render() {
        return (
            <div className="NoConfigurationCardDiv">

                <Card className="NoConfigurationCardMain" border="danger">
                    <Card.Header className="NoConfigurationCardHeader">Oops... <p>&#128555;</p></Card.Header>
                    <Card.Body>
                        <Card.Title className="NoConfigurationCardTitle">You Have No Systems...</Card.Title>
                        <Card.Text className="NoConfigurationCardText" as="div">
                                For Inserting a New System
                                <div className="NoConfigurationClickHereDiv" onClick={() =>  this.handleClick() } >
                                    <span className="NoConfigurationClickHere">
                                        Click Here !
                                     </span>
                                </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default connect(store => store.Main)(NoConfigurationCard)