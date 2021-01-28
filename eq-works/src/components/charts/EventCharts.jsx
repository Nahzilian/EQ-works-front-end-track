import React from 'react'
import VerticalBar from './VerticalBar'
import Spinner from 'react-bootstrap/Spinner'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
export default function EventCharts(props) {
    return (
        <Container fluid>
            <Col sm={12}>
                <Row sm={12}>
                    {props.eventDataHourly ? <VerticalBar data={props.eventDataHourly} /> : <Spinner animation="border" variant="info" />}
                </Row>
                <Row sm={12}>
                    {props.eventDataDaily ? <VerticalBar data={props.eventDataDaily} /> : <Spinner animation="border" variant="info" />}
                </Row>
            </Col>
        </Container>
    )
}
