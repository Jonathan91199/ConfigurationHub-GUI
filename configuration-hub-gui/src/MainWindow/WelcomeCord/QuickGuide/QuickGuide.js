
import React from 'react'
import { Component } from 'react';
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../Style/WelcomeCardStyle.css'


class QuickGuid extends Component {
    render() {
        return (
            <Card style={{ width: '100%', minWidth: "40rem" }} className="WelcomeCard withBorderCard">
                <Card.Body>
                    <Card.Title className="WelcomeCardTitle">Quick Guide</Card.Title>
                    <Card.Subtitle className="WelcomeCardSubTitle mb-2">Learn How To Use ConfigurationHub</Card.Subtitle>
                    <span style={{cursor : "pointer"}}>Click Here !</span>
                    
                </Card.Body>
            </Card>
        )
    }
}
export default connect(store => store.Main)(QuickGuid)
