import React from 'react'
import { Component } from 'react';
import { Accordion } from 'react-bootstrap'
import { connect } from 'react-redux'
import ExplenationCard from './ExplenationCard/ExplenatiionCard'
import QuickGuid from './QuickGuide/QuickGuide'
import './Style/WelcomeCardStyle.css'


class WelcomeCard extends Component {
   
   
    render() {
        return (
            <div className="WelcomeCardMainDiv">
                <Accordion defaultActiveKey="1">
                    <ExplenationCard/>
                    <QuickGuid/>
                </Accordion>

            </div>
        )
    }
}

export default connect(store => store.Main)(WelcomeCard)