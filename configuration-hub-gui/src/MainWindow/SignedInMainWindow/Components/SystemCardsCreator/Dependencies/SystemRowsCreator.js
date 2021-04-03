import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';

export default function SystemRowCreator(that, optionArr, NumberOfCols, showDeleteIcon) {

    let cols = []
    for (let rowNum = 0; rowNum < Math.floor(((optionArr.length) / NumberOfCols)) + 1; rowNum++) {
        cols[rowNum] = []
        for (let colNum = 0; colNum < NumberOfCols; colNum++) {
            let system = optionArr[(rowNum * NumberOfCols + colNum)]
            if (optionArr[(rowNum * NumberOfCols + colNum)] !== undefined) {
                cols[rowNum][colNum] =
                    <Col className="RowCreatorColMainDiv" >
                        <div className="RowCreatorColFirstDiv">
                            <div className="RowCreatorColName" onClick={() => that.handleClick(system)} >
                                {system.name}
                            </div>
                        </div>
                        {
                            showDeleteIcon ?
                                <div className="RowCreatorColSecondDiv">
                                    <div className="RowCreatorColDeleteDiv" onClick={() => that.handleDeleteClick(system)}>
                                        <DeleteIcon className="DeleteSystemIcon" />
                                    </div>
                                </div> : <div></div>
                        }


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