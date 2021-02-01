import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PoiMap from './PoiMap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

export default function MapMain(props) {

    const [poiData, setPoiData] = useState(null)

    useEffect(() => {
        setPoiData(props.poiData || []);
    }, [props.poiData])

    return (
        <Container fluid>
            <br />
            <Row>
                <Col>
                    <Row>
                        { poiData && poiData.length > 0 ? <PoiMap data={poiData} /> : <Spinner animation="border" variant="info" />}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
