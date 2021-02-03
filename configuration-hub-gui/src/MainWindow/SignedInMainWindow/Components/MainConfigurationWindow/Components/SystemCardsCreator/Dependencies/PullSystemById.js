import Axios from 'axios'
import {Card} from 'react-bootstrap'

export default function PullSystemById(id, that) {
    Axios.get(`http://localhost:51241/api/Systems/${id}`, {
        headers: {
            "accept": "text/plain",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`
        }
    }).then(res => {
        that.setState({
            AllSystemMS: res.data.microservices.length === 0 ?
                <div className="NoConfigurationCardDiv">

                    <Card className="NoConfigurationCardMain" border="danger">
                        <Card.Header className="NoConfigurationCardHeader">Oops... <p>&#128555;</p></Card.Header>
                        <Card.Body>
                            <Card.Title className="NoConfigurationCardTitle">You Have No Systems...</Card.Title>
                            <Card.Text className="NoConfigurationCardText" as="div">
                                For Inserting a New System
                        <div className="NoConfigurationClickHereDiv" onClick={() => this.handleClick()} >
                                    <span className="NoConfigurationClickHere">
                                        Click Here !
                             </span>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div> 
                : <div></div>

        })
    })
}