import React from 'react'
import { Row } from 'react-bootstrap'

export default function Explentaion() {
    return (
        <div className="ExplenationMainDiv">
            <hr className="BasicHR"></hr>
            <Row className="ExplenationRow">
                ConfigurationHub is a free and open-source version control system designed for your system’s configuration files.
            </Row>
            <Row className="ExplenationRow">
                Persist your microservices configuration on ConfigurationHub using an HTTP web interface.
            </Row>
            <Row className="ExplenationRow">
                ConfigurationHub allows you to :
                </Row>
            <Row className="ExplenationRow ExplenationListRow">
                <ol>
                    <li>Track who changed your program’s Configuration</li>
                    <li>Track when your configurations has changed</li>
                    <li>Track changes in your configuration </li>
                    <li>Query configuration by author/microservice </li>
                    <li>Query selected sections in configuration</li>
                    <li>Query configuration by system (that has many microservices)</li>
                    <li>User specific validation for json configurations using Json schema </li>
                </ol>
            </Row>
        </div>
    )
}