import React, { Component } from 'react'
import './BasicLoaderStyle.css'

class BasicLoader extends Component {
    render() {
        return (
            <div className="BasicLoaderMainDiv">
                <div className="spinner-border" style={{ width: "8rem", height: "8rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}
export default BasicLoader
