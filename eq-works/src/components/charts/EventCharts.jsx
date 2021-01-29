import React, { useEffect, useState } from 'react'
import VerticalBar from './VerticalBar'
import Spinner from 'react-bootstrap/Spinner'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

function mappingHourlyData(data, key) {
    return data.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {})
}

export default function EventCharts() {
    const [eventDataDaily, setEventDaily] = useState(null);
    const [eventDataHourly, setEventHourly] = useState(null);
    const [weeklyAvg, setWeeklyAvg] = useState(0);
    const [weeklyDate, setWeeklyDate] = useState([]);
    const [currentDate, setCurrentDate] = useState(null)
    const [dayWithMax, setDayWithMax] = useState(null);

    useEffect(() => {
        loadAPI();
    }, [])
    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/events/daily").then((res) => {
                const temp = res.data;
                setEventDaily(temp)
                var avg = temp.map(x => x.events).reduce((a, b) => parseInt(a) + parseInt(b), 0);
                setWeeklyAvg((avg / 7).toFixed(2));
                const max = temp.reduce(function (prev, current) {
                    return (prev.events > current.events) ? prev : current
                })
                setDayWithMax(max)
            })
        } catch (err) {
            console.error(err)
        }
        try {
            axios.get("http://localhost:5555/events/hourly").then((res) => {
                const temp = res.data;
                const dataByDate = mappingHourlyData(temp, "date");
                const listOfDate = Object.keys(dataByDate)
                setWeeklyDate(listOfDate);
                setCurrentDate(listOfDate[0]);
                setEventHourly(dataByDate[listOfDate[0]])
            })
        } catch (err) {
            console.error(err)
        }
    }

    const repopulateData = () => {

    }
    return (
        <Container fluid>
            <Col sm={12}>
                <Row>
                    <Col>
                        <div className="chart-wrapper">
                            Avg events/week: {weeklyAvg}
                        </div>
                    </Col>
                    <Col>
                        <div className="chart-wrapper">
                            {dayWithMax ?
                                <>
                                    Popular days of event: {dayWithMax.date ? dayWithMax.date : null} <br/>
                                    Events: {dayWithMax.events ? dayWithMax.events : null}
                                </> : null}
                        </div>
                    </Col>
                
                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataDaily ? <VerticalBar data={eventDataDaily.map(x=>x.events)} labels={eventDataDaily.map(x=>x.date)} title={"Events by hour"} hourly/> : <Spinner animation="border" variant="info" />}</Col>
                    <Col>{eventDataHourly ? <VerticalBar data={eventDataHourly.map(x=>x.events)} labels={eventDataHourly.map(x=>x.date)} title={"Events data hourly"} daily/> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataDaily ? <VerticalBar data={eventDataDaily.map(x=>x.events)} labels={eventDataDaily.map(x=>x.date)} title={"Events data daily"} daily/> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
            </Col>
        </Container>
    )
}
