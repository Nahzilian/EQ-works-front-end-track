import React, { useState, useEffect } from 'react'
import axios from 'axios'
// React bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from "react-router";
import Spinner from 'react-bootstrap/Spinner'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

// Customed Bootstrap react components
import Charts from './charts/Charts'
import MapMain from './map/MapMain'
import MainTable from './tables/MainTable'
import AlertBootStrap from './AlertBootStrap'


function Dash() {
    const [poiData, setPoiData] = useState(null);
    const [statDataHourly, setStatDataHourly] = useState(null);
    const [statDataDaily, setStatDataDaily] = useState(null);
    const [eventDataHourly, setEventDataHourly] = useState(null);
    const [eventDataDaily, setEventDataDaily] = useState(null);

    const [statDataHourlyTab, setStatDataHourlyTab] = useState(null);
    const [statDataDailyTab, setStatDataDailyTab] = useState(null);
    const [eventDataHourlyTab, setEventDataHourlyTab] = useState(null);
    const [eventDataDailyTab, setEventDataDailyTab] = useState(null);
    const [show, setShow] = useState(false)

    const [selectedKey, setSelectedKey] = useState("first");

    const baseAPI = process.env.REACT_APP_MODE === 'dev' ? process.env.REACT_APP_API_DEV : process.env.REACT_APP_API_PROD

    const loadAPI = () => {
        try {
            axios.get(`${baseAPI}poi`).then((res) => {
                const temp = res.data;
                setPoiData(temp); // Format: lat long
            })
        } catch (err) {
            setShow(true)
            console.error(err)
        }
        try {
            axios.get(`${baseAPI}events/daily?loc=${false}`).then((res) => {
                const temp = res.data;
                setEventDataDaily(temp)
            })
        } catch (err) {
            setShow(true)
            console.error(err);
        }
        try {
            axios.get(`${baseAPI}stats/daily?loc=${false}`).then((res) => {
                const temp = res.data;
                setStatDataDaily(temp);
            })
        } catch (err) {
            setShow(true)
            console.error(err);
        }
        try {
            axios.get(`${baseAPI}events/hourly?loc=${false}`).then((res) => {
                const temp = res.data;
                setEventDataHourly(temp)

            })
        } catch (err) {
            setShow(true)
            console.error(err);
        }
        try {
            axios.get(`${baseAPI}stats/hourly?loc=${false}`).then((res) => {
                const temp = res.data;
                setStatDataHourlyTab(temp)
            })
        } catch (err) {
            setShow(true)
            console.error(err)
        }

        try {
            axios.get(`${baseAPI}events/daily?loc=${true}`).then((res) => {
                const temp = res.data;
                setEventDataDailyTab(temp)
            })
        } catch (err) {
            setShow(true)
            console.error(err);
        }
        try {
            axios.get(`${baseAPI}stats/daily?loc=${true}`).then((res) => {
                const temp = res.data;
                setStatDataDailyTab(temp);
            })
        } catch (err) {
            setShow(true)
            console.error(err);
        }
        try {
            axios.get(`${baseAPI}events/hourly?loc=${true}`).then((res) => {
                const temp = res.data;
                setEventDataHourlyTab(temp)

            })
        } catch (err) {
            setShow(true)
            console.error(err);
        }
        try {
            axios.get(`${baseAPI}stats/hourly?loc=${true}`).then((res) => {
                const temp = res.data;
                setStatDataHourly(temp)
            })
        } catch (err) {
            setShow(true)
            console.error(err)
            console.log("here")
        }
    }

    const tempTEst = (val) => {
        console.log(val)
        setSelectedKey(val)
    }

    useEffect(() => {
        loadAPI();
    }, [])

    return (
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey={selectedKey} onSelect={(skey) => tempTEst(skey)}>
                <Row>
                    <Col sm={12} md={3} lg={3} xl={2} className="side-bar fixed-side-bar">
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
                                            <i className="fas fa-table"></i>
                                        </Col>
                                        <Col>
                                            <strong>Tables</strong>
                                        </Col>
                                    </Row>
                                </Nav.Link>

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
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
                        </Nav>
                    </Col>
                    <Col sm={12} className="invisible-blk">
                        <br/>
                        <Row>
                            <Col xs={12} sm={12}><h1>EQ Works</h1></Col>
                            <Col xs={12} sm={12}>
                                <Nav justify variant="pills" style={{width:"100%"}}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <Row>
                                                <Col xs={12} sm={2}>
                                                    <i className="fas fa-chart-pie"></i>
                                                </Col>
                                                <Col xs={12} sm={10}>
                                                    <strong>Overview</strong>
                                                </Col>
                                            </Row>
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <Row>
                                                <Col xs={12} sm={2}>
                                                    <i className="fas fa-table"></i>
                                                </Col>
                                                <Col xs={12} sm={10}>
                                                    <strong>Tables</strong>
                                                </Col>
                                            </Row>
                                        </Nav.Link>

                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            <Row>
                                                <Col xs={12} sm={2}>
                                                    <i className="fas fa-map-marked-alt"></i>
                                                </Col>
                                                <Col xs={12} sm={10}>
                                                    <strong>Map</strong>
                                                </Col>
                                            </Row>
                                        </Nav.Link>

                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>

                    </Col>
                    <Col sm={12} md={9} lg={9} xl={10} className="tab-content-wrapper">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {!show && !poiData && !statDataDailyTab && !statDataHourlyTab && !eventDataDailyTab && !eventDataHourlyTab ?
                                    <AlertBootStrap setShow={setShow} /> : null}
                                {statDataDaily && statDataHourly && eventDataDaily && eventDataHourly ?
                                    <Charts statDaily={statDataDaily}
                                        statHourly={statDataHourly}
                                        eventDaily={eventDataDaily}
                                        eventHourly={eventDataHourly} /> : null}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {!show && !poiData && !statDataDailyTab && !statDataHourlyTab && !eventDataDailyTab && !eventDataHourlyTab ?
                                    <AlertBootStrap setShow={setShow} /> : null}
                                {poiData && statDataDailyTab && statDataHourlyTab && eventDataDailyTab && eventDataHourlyTab ?
                                    <MainTable poiData={poiData} statDaily={statDataDailyTab}
                                        statHourly={statDataHourlyTab}
                                        eventDaily={eventDataDailyTab}
                                        eventHourly={eventDataHourlyTab} /> : null}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                {!show && !poiData && !statDataDailyTab && !statDataHourlyTab && !eventDataDailyTab && !eventDataHourlyTab ?
                                    <AlertBootStrap setShow={setShow} /> : null}
                                {poiData ? <MapMain poiData={poiData} /> : <Spinner animation="border" variant="info" />}
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
