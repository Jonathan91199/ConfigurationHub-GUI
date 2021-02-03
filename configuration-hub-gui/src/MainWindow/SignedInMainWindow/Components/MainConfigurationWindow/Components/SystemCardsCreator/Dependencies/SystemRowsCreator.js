import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NUM_OF_SYSTEM_IN_ROW = 4

export default function SystemRowCreator(that) {
    let cols = []
    for (let rowNum = 0; rowNum < Math.floor(((that.props.allSystems.length) / NUM_OF_SYSTEM_IN_ROW)) + 1; rowNum++) {
        cols[rowNum] = []
        for (let colNum = 0; colNum < NUM_OF_SYSTEM_IN_ROW; colNum++) {
            let system = that.props.allSystems[(rowNum * NUM_OF_SYSTEM_IN_ROW + colNum)]
            if (that.props.allSystems[(rowNum * NUM_OF_SYSTEM_IN_ROW + colNum)] !== undefined) {
                cols[rowNum][colNum] =
                    <Col className="SystemColMainDiv" onClick={() => that.handleSystemClick(system.id)}>
                        <div className="SystemCol" >{system.name}</div>
                    </Col>
            }
            else { cols[rowNum][colNum] = <Col className="EmptyCol"></Col> }
        }
    }
    let AllSystems = []
    let tempCol = []
    for (let rowNum = 0; rowNum < cols.length; rowNum++) {
        AllSystems.push(<Row className="SystemRow" id={`RowNum${rowNum}`}>{tempCol}</Row>)
        for (let colNum = 0; colNum < cols[rowNum].length; colNum++) {
            tempCol.push(cols[rowNum][colNum])
        }
        tempCol = []

    }
    that.setState({ AllSystemsState: AllSystems, PageState: "ChooseSystem" })
}