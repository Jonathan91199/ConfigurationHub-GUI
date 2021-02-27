import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import PullConfig from './Dependencies/PullConfig'
import JSONEditor from 'jsoneditor'
import './Style/MicroServiceConfigStyle.css'
import Axios from 'axios'

let editor
class MicroServiceConfig extends Component {
    constructor(props) {
        super(props)
        this.pullAndSetEditor = this.pullAndSetEditor.bind(this)
        this.getNewConfig = this.getNewConfig.bind(this)
        this.sendNewConfig = this.sendNewConfig.bind(this)
    }

    componentDidMount() {
        this.pullAndSetEditor()
    }
    pullAndSetEditor() {
        PullConfig(this.props.selectedMicroService.id, this, () => {
            console.log(this.props.configData.configContent)
            const container = document.getElementById("jsoneditor")
            console.log(container)
            const options = {}
            editor = new JSONEditor(container, options)
            const initalJSON = this.props.configData.configContent.content
            const parsedJSON = JSON.parse(initalJSON)
            editor.set(parsedJSON)

        })
    }
    getNewConfig() {
        let newData = editor.get()
        let firstStringify = JSON.stringify(newData)
        this.sendNewConfig(firstStringify)
    }
    sendNewConfig(newConfig) {
        console.log(newConfig)
        let _ = this
        Axios.put(`http://${window.location.hostname}:51241/api/Configs/${this.props.configData.configContent.id}`, {
            "id": _.props.configData.configContent.id,
            "configContent": {
                "content": newConfig,
                "id": _.props.configData.configContent.id
            }
        }, {
            headers: {
                "accept": "*/*",
                "Authorization": `Bearer ${_.props.userConnectedInfo.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                document.getElementById("jsoneditor").innerHTML = ""
                this.pullAndSetEditor()
            }
            )
            .catch(err => console.error(err))
    }
    render() {
        return (
            <div>
                <div id="jsoneditor"></div>
                <Button onClick={this.getNewConfig}>Save</Button>
            </div>

        )
    }
}
export default connect(store => store.Main)(MicroServiceConfig)
