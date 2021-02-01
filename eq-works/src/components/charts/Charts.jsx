import React, { useState } from 'react'
import StatCharts from './StatCharts'
import EventCharts from './EventCharts'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function Charts(props) {

    return (
        <Container fluid>
            <br/>
            <Tabs fill variant="pills" defaultActiveKey="event" id="uncontrolled-tab-example" className = "navigate">
                <Tab eventKey="event" title="Events" >
                    {props.eventDaily && props.eventHourly?<EventCharts eventDaily={props.eventDaily} eventHourly={props.eventHourly}/>: <Spinner animation="border" variant="info" />}
                </Tab>
                <Tab eventKey="stat" title="Statistic">
                    <StatCharts />
                </Tab>
            </Tabs>
        </Container>
    )
}
