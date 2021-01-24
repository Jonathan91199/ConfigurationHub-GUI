
import React from 'react'
import { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../Style/WelcomeCardStyle.css'


class LiveExamples extends Component {
    render() {
        return (
            <Card style={{ width: '100%', minWidth: "40rem" }} className="WelcomeCard FinalCard">
                <Card.Body>
                    <Card.Title className="WelcomeCardTitle">Live Examples</Card.Title>
                    <Card.Subtitle className="WelcomeCardSubTitle mb-2">Play With ConfigurationHub Demo Examples</Card.Subtitle>
                    <Accordion.Toggle as={"span"} style={{ cursor: "pointer" }} variant="link" eventKey="3">
                        Click Here !
                          </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <div>
                            <Card.Text as="div">
                            <hr className="BasicHR"></hr>
                                Examples...
                            </Card.Text>
                        </div>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        )
    }
}
export default connect(store => store.Main)(LiveExamples)
