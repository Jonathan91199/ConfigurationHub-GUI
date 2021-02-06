import React from 'react'
import { Col, Row } from 'react-bootstrap'


export default function SystemRowCreator(that, optionArr, NumberOfRows) {
    let cols = []
    for (let rowNum = 0; rowNum < Math.floor(((optionArr.length) / NumberOfRows)) + 1; rowNum++) {
        cols[rowNum] = []
        for (let colNum = 0; colNum < NumberOfRows; colNum++) {
            let system = optionArr[(rowNum * NumberOfRows + colNum)]
            if (optionArr[(rowNum * NumberOfRows + colNum)] !== undefined) {
                cols[rowNum][colNum] =
                    <Col className="RowCreatorColMainDiv" onClick={() => that.handleClick(system)}>
                        <div className="RowCreatorCol" >{system.name}</div>
                    </Col>
            }
            else { cols[rowNum][colNum] = <Col className="EmptyCol"></Col> }
        }
    }
    let AllSystems = []
    let tempCol = []
    for (let rowNum = 0; rowNum < cols.length; rowNum++) {
        AllSystems.push(<Row className="RowCreatorRow" id={`RowNum${rowNum}`}>{tempCol}</Row>)
        for (let colNum = 0; colNum < cols[rowNum].length; colNum++) {
            tempCol.push(cols[rowNum][colNum])
        }
        tempCol = []

    }
    return AllSystems
}