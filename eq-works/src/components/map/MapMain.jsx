import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PoiMap from './PoiMap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

export default function MapMain() {


    const [poiData, setPoiData] = useState(null)
    const [currentPOI, setCurPoi] = useState(null)

    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/poi").then((res) => {
                const temp = res.data;
                setPoiData(temp) // Format: lat long
            })
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        loadAPI();
    }, [])

    return (
        <Container fluid>
            <br />
            <Row>
                <Col>
                    <Row>
                        { poiData ? <PoiMap data={poiData} /> : <Spinner animation="border" variant="info" />}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
