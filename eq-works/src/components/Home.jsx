import React from 'react'

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
import Map from './map/Map'

function Dash() {
    return (
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} className="side-bar">
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
                        </Nav>
                    </Col>
                    <Col sm={10} className="tab-content-wrapper">

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Charts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Map />
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
