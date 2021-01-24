import React from 'react'
import { Component } from 'react';
import { Accordion, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import ExplenationCard from './ExplenationCard/ExplenatiionCard'
import QuickGuid from './QuickGuide/QuickGuide'
import LiveExamples from './LiveExamples/LiveExamples'
import './Style/WelcomeCardStyle.css'


class WelcomeCard extends Component {


    render() {
        return (
            <div className="WelcomeCardMainDiv">
                <ExplenationCard />
                <Row>
                    <Col>
                        <Accordion className="accordionStyle" defaultActiveKey="1">
                            <QuickGuid />
                        </Accordion>
                    </Col>
                    <Col>
                        <Accordion className="accordionStyle" defaultActiveKey="1">
                            <LiveExamples />
                        </Accordion>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default connect(store => store.Main)(WelcomeCard)