import React, { useState } from 'react'
import StatCharts from './StatCharts'
import EventCharts from './EventCharts'

import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function Charts() {

    return (
        <Container fluid>
            <br/>
            <Tabs fill variant="pills" defaultActiveKey="event" id="uncontrolled-tab-example" className = "navigate">
                <Tab eventKey="event" title="Events" >
                    <EventCharts />
                </Tab>
                <Tab eventKey="stat" title="Statistic">
                    <StatCharts />
                </Tab>
            </Tabs>
        </Container>
    )
}
