import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { setSystemState } from '../../../../../../Actions/MainReducerAction'
import PullConfig from './Dependencies/PullConfig'
import JSONEditor from 'jsoneditor'
import './Style/MicroServiceConfigStyle.css'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Row, Col } from 'react-bootstrap'
import Axios from 'axios'

let editor
class MicroServiceConfig extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newConfig: false
        }
        this.pullAndSetEditor = this.pullAndSetEditor.bind(this)
        this.getNewConfig = this.getNewConfig.bind(this)
        this.deleteConfig = this.deleteConfig.bind(this)
        this.sendNewConfig = this.sendNewConfig.bind(this)
        this.handleBackClick = this.handleBackClick.bind(this)

    }

    componentDidMount() {
        this.pullAndSetEditor()
    }
    handleBackClick() {
        this.props.dispatch(setSystemState({ value: "ChooseMicroService" }))
    }
    pullAndSetEditor() {
        PullConfig(this.props.selectedMicroService.id, this, (response) => {

            const container = document.getElementById("jsoneditor")
            const options = {}
            editor = new JSONEditor(container, options)
            let initalJSON = {}
            if (!response) {
                this.setState({ newConfig: true })
            }
            else
                initalJSON = this.props.configData.configContent.content
            const parsedJSON = JSON.parse(initalJSON)
            editor.set(parsedJSON)

        })
    }
    getNewConfig() {
        let newData = editor.get()
        let firstStringify = JSON.stringify(newData)
        this.sendNewConfig(firstStringify)
    }
    deleteConfig(){
        let _ = this
        console.log(this.props.configData.id)
        Axios.delete(`http://${window.location.hostname}:51241/api/Configs/${this.props.configData.id}`, {
            headers: {
                "accept": "*/*",
                "Authorization": `Bearer ${_.props.userConnectedInfo.token} `
            }
        }).then(res => {
            _.handleBackClick()
        })
        
    }
    sendNewConfig(newConfig) {
        let _ = this
        let httpRequest = this.state.newConfig ?
            {
                method: "post",
                url: `http://${window.location.hostname}:51241/api/Configs`,
                data: {
                    "configContent": { "content": newConfig }, "microservice": {
                        "id": this.props.selectedMicroService.id,
                        "system": {
                            "id": this.props.selectedSystemId
                        }
                    }
                }
            }
            :
            {
                method: "put",
                url: `http://${window.location.hostname}:51241/api/Configs/${this.props.configData.configContent.id}`,
                data: {
                    id: this.props.configData.configContent.id,
                    configContent: {
                        content: newConfig,
                        id: this.props.configData.configContent.id
                    }
                }
            }
        Axios({
            method: httpRequest.method,
            url: httpRequest.url,
            data: httpRequest.data,
            headers: {
                "accept": "*/*",
                "Authorization": `Bearer ${_.props.userConnectedInfo.token} `,
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                document.getElementById("jsoneditor").innerHTML = ""
                this.setState({ newConfig: false })
                this.pullAndSetEditor()
            })
            .catch(err => console.error(err))
    }
    render() {
        let deleteButtonClassName = this.props.configData.id === undefined ? "DeleteConfigurationButtonHidden" : "DeleteConfigurationButton"
        console.log(this.props.configData.id)
        return (
            <div>
                <div className="OptionsDiv">
                        <Row className="OptionsDivRow">

                            <Col className="backToMsChoosingArrowCol">
                                <ArrowBackIcon className="backToMsChoosingArrow" onClick={this.handleBackClick} />
                            </Col>
                            <Col className="ConfigurationButtonsOptionsCol">
                                <Button className={deleteButtonClassName} id="DeleteConfigurationButton" variant="danger" onClick={this.deleteConfig}><DeleteIcon className="DeleteConfigurationIcon" /></Button>
                                <Button className="SaveConfigurationButton" variant="dark" onClick={this.getNewConfig}><SaveIcon className="SaveConfigurationIcon" /></Button>
                            </Col>
                        </Row>

                </div>
                <div id="jsoneditor"></div>
                <div className="SaveConfigurationButtonDiv">
                </div>
            </div>

        )
    }
}
export default connect(store => store.Main)(MicroServiceConfig)
