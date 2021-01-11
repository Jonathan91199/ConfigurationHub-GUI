import React from 'react'
import { Component } from 'react';
import { Card } from 'react-bootstrap'
import './Style/WelcomeCardStyle.css'
import Explentaion from './Explenation'

class WelcomeCard extends Component {

    render() {
        return (
            <div className="WelcomeCardMainDiv">
                <Card style={{ width: '50%', maxWidth:"80rem", minWidth :"40rem"}} className="WelcomeCard">
                    <Card.Body>
                        <Card.Title className="WelcomeCardTitle">Welcome To ConfigurationHub</Card.Title>
                        <Card.Subtitle className="WelcomeCardSubTitle mb-2">a REST API Configuration</Card.Subtitle>
                        <Card.Text>
                          <Explentaion/>
                    </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default WelcomeCard