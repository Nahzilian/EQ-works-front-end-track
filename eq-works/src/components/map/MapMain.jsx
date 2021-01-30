import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PoiMap from './PoiMap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function MapMain() {
    const [poiData, setPoiData] = useState(null)
    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/poi").then((res) => {
                const temp = res.data;
                setPoiData(temp) // Format: lat long
                console.log(temp)
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
            <Col>
                <Row>
                    <Col>
                        <PoiMap data={poiData} />
                    </Col>
                    <Col>
                        <div>
                            Simthing
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    Table goes here
                </Row>
            </Col>
        </Container>
    )
}
