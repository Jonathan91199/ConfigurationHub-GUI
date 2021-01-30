import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import './Style/MainWindowStyle.css'
import WelcomeCard from './WelcomeCord/WelcomeCard'
import SignedInMainWindow from './SignedInMainWindow/SignedInMainWindow'


class MainWindow extends Component {


    render() {
        return (
            
                <Container fluid className="MainWindowMainDiv">
                    {this.props.isUserConnected ? <SignedInMainWindow /> : <WelcomeCard />}
                </Container>
        )
    }
}

export default connect(store => store.Main)(MainWindow)