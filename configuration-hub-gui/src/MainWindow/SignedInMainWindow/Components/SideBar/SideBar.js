import React, { Component } from 'react'
import SideBarComponentHOC from './SideBarComponentHOC'
class SideBar extends Component {

    render() {
        return (
            <div>

                <div className="SideBarComponentDiv">
                    <SideBarComponentHOC Name="My Systems" />
                </div>
                <hr className="SideBarHR"></hr>
                <div className="SideBarComponentDiv LastComponent">
                    <SideBarComponentHOC Name="New System" />
                </div>
                

            </div>

        )
    }
}
export default SideBar