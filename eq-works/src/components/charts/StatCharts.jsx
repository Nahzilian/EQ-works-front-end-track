import React from 'react'
import MultiAxisLine from './MultiAxisLine'
import Spinner from 'react-bootstrap/Spinner'

export default function StatCharts(props) {
    return (
        <div>
            {props.statDataDaily? <MultiAxisLine data = {props.statDataDaily}/>:  <Spinner animation="border" variant="info" />}
            {props.statDataHourly? <MultiAxisLine data = {props.statDataHourly}/>:  <Spinner animation="border" variant="info" />}
        </div>
    )
}
