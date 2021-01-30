import React, { Component } from 'react'
import SideBarComponentHOC from './SideBarComponentHOC'
class SideBar extends Component {

    render() {
        return (
            <div>

                <div className="SideBarComponentDiv">
                    <SideBarComponentHOC Name="My Configurations" />
                </div>
                <hr className="SideBarHR"></hr>
                <div className="SideBarComponentDiv LastComponent">
                    <SideBarComponentHOC Name="New Configuration" />
                </div>
                

            </div>

        )
    }
}
export default SideBar