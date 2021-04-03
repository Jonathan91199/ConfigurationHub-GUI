import React, { Component } from 'react'
import './Style/Header.css'

class Header extends Component {
    render() {
        return (
            <div className="HeaderMainDiv">
                {this.props.headerName}
            </div>
        )
    }

}
export default Header