import React, { useState, useEffect } from 'react'
import axios from 'axios'
// React bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

// Customed Bootstrap react components
import Charts from './charts/Charts'
import MapMain from './map/MapMain'
import MainTable from './tables/MainTable'
import Spinner from 'react-bootstrap/Spinner'


function Dash() {
    const [poiData, setPoiData] = useState(null);
    const [statDataHourly, setStatDataHourly] = useState(null);
    const [statDataDaily, setStatDataDaily] = useState(null);
    const [eventDataHourly, setEventDataHourly] = useState(null);
    const [eventDataDaily, setEventDataDaily] = useState(null);

    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/poi").then((res) => {
                const temp = res.data;
                setPoiData(temp); // Format: lat long
            })
        } catch (err) {
            console.error(err)
        }
        try {
            axios.get(`http://localhost:5555/events/daily?loc=true`).then((res) => {
                const temp = res.data;
                setEventDataDaily(temp)
            })
        } catch (err) {
            console.error(err);
        }
        try {
            axios.get(`http://localhost:5555/stats/daily?loc=true`).then((res) => {
                const temp = res.data;
                setStatDataDaily(temp);
            })
        } catch (err) {
            console.error(err);
        }
        try {
            axios.get(`http://localhost:5555/events/hourly?loc=true`).then((res) => {
                const temp = res.data;
                setEventDataHourly(temp)
                
            })
        } catch (err) {
            console.error(err);
        }
        try {
            axios.get(`http://localhost:5555/stats/hourly?loc=true`).then((res) => {
                const temp = res.data;
                setStatDataHourly(temp)
            })
        } catch (err) {
            console.error(err)
        }

    }

    useEffect(() => {
        loadAPI();
    },[])

    return (
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} className="side-bar fixed-side-bar">
                        <div>
                            <h1>
                                EQ Works
                            </h1>
                        </div>
                        <hr />
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <Row>
                                        <Col sm={2}>
                                            <i className="fas fa-chart-pie"></i>
                                        </Col>
                                        <Col>
                                            <strong>Overview</strong>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <Row>
                                        <Col sm={2}>
                                            <i className="fas fa-map-marked-alt"></i>
                                        </Col>
                                        <Col>
                                            <strong>Map</strong>
                                        </Col>
                                    </Row>
                                </Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <Row>
                                        <Col sm={2}>
                                            <i className="fas fa-table"></i>
                                        </Col>
                                        <Col>
                                            <strong>Tables</strong>
                                        </Col>
                                    </Row>
                                </Nav.Link>

                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10} className="tab-content-wrapper">

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Charts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {poiData? <MapMain poiData={poiData}/>:<Spinner animation="border" variant="info" />}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <MainTable />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

const Home = withRouter(Dash);
export default Home
