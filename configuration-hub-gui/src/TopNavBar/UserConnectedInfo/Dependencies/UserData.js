import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
class UserData extends Component{

    render(){
        return(
            <Col>
                <Row>
                    {`First Name : ${this.props.userConnectedInfo.firstName}`}
                </Row>
                <Row>
                    {`Last Name : ${this.props.userConnectedInfo.lastName}`}
                </Row>
               
            </Col>
        )
    }
}

export default connect(store => store.Main)(UserData)