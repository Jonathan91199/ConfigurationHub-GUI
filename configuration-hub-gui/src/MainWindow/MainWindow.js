import React from 'react'
import { Component } from 'react';
import './Style/MainWindowStyle.css'
import WelcomeCard from './WelcomeCord/WelcomeCard'


class MainWindow extends Component{
   

    render(){
        return(
            <div className="MainWindowMainDiv">
                <hr style={{border : "1px solid black"}}></hr>
                <WelcomeCard/>
            </div>
        )
    }
}

export default MainWindow