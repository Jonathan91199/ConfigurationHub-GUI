
import React from 'react'
import { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../Style/WelcomeCardStyle.css'


class QuickGuid extends Component {
    render() {
        return (
            <Card style={{ width: '100%', minWidth: "40rem" }} className="WelcomeCard">
                <Card.Body>
                    <Card.Title className="WelcomeCardTitle">Quick Guide</Card.Title>
                    <Card.Subtitle className="WelcomeCardSubTitle mb-2">Learn How To Use ConfigurationHub</Card.Subtitle>
                    <Accordion.Toggle as={"span"} style={{ cursor: "pointer" }} variant="link" eventKey="2">
                        Click Here !
                          </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <div>
                            <Card.Text as="div">
                            <hr className="BasicHR"></hr>

                                Guide...
                            </Card.Text>
                        </div>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        )
    }
}
export default connect(store => store.Main)(QuickGuid)
