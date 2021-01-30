import React from 'react'
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import ExplenationCard from './ExplenationCard/ExplenatiionCard'
import QuickGuid from './QuickGuide/QuickGuide'
import LiveExamples from './LiveExamples/LiveExamples'
import './Style/WelcomeCardStyle.css'


class WelcomeCard extends Component {


    render() {
        return (
            <div className="WelcomeCardMainDiv">
                <Container fluid>

                    <ExplenationCard />
                    <Row>
                        <Col>
                            <QuickGuid />
                        </Col>
                        <Col>
                            <LiveExamples />
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default connect(store => store.Main)(WelcomeCard)