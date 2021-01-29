import React, { useEffect, useState } from 'react'
import VerticalBar from './VerticalBar'
import LineChart from './LineChart'
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

function mappingByHour(data, hour) {
    var res = []
    for (var key in data) {
        data[key].forEach(element => {
            if (element.hour === hour) res.push(element)
        });
    }
    return res
}

function filledByDate(data) {
    var res = []
    var date = data[0].date
    var count = 0;
    for (var i = 0; i < 25; i++) {
        if (count < data.length) {
            if (data[count].hour !== i) {
                res.push({
                    date: date,
                    events: 0,
                    hour: i
                })
            } else {
                res.push(data[count])
                count++;
            }
        }else {
            res.push({
                date: date,
                events: 0,
                hour: i
            })
        }

    }
    return res
}

export default function EventCharts() {
    const [eventDataDaily, setEventDaily] = useState(null);
    const [eventDataHourly, setEventHourly] = useState(null);
    const [weeklyAvg, setWeeklyAvg] = useState(0);
    const [dayWithMax, setDayWithMax] = useState(null);
    const [eventDataByTime, setDataByTime] = useState(null);
    const [reformattedHourly, setReformattedHourly] = useState(null);
    const [minday, setMinDay] = useState(null);
    const [maxday, setMaxDay] = useState(null);
    useEffect(() => {
        loadAPI();
    }, [])
    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/events/daily").then((res) => {
                const temp = res.data;
                setMinDay(temp[0].date)
                setMaxDay(temp[temp.length - 1].date)
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
                setReformattedHourly(dataByDate)
                setEventHourly(filledByDate(dataByDate[listOfDate[0]]));
                setDataByTime(mappingByHour(dataByDate, 0))
            })
        } catch (err) {
            console.error(err)
        }
    }

    const repopulateData = (value) => {
        setDataByTime(mappingByHour(reformattedHourly, value))
    }

    const repopulateDateData = (key) => {
        console.log(reformattedHourly)
        setEventHourly(filledByDate(reformattedHourly[key]))
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
                                    Popular days of event: {dayWithMax.date ? dayWithMax.date : null} <br />
                                    Events: {dayWithMax.events ? dayWithMax.events : null}
                                </> : null}
                        </div>
                    </Col>

                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataByTime ? <VerticalBar data={eventDataByTime.map(x => x.events)} labels={eventDataByTime.map(x => x.date)} title={"Events by hour"} repopulateRecall={repopulateData} hourly /> : <Spinner animation="border" variant="info" />}</Col>
                    <Col>{eventDataHourly ? <LineChart data={eventDataHourly.map(x => x.events)} labels={eventDataHourly.map(x => x.hour)} title={"Events data hourly"} repopulateRecall={repopulateDateData} min={minday} max={maxday} daily /> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataDaily ? <VerticalBar data={eventDataDaily.map(x => x.events)} labels={eventDataDaily.map(x => x.date)} title={"Events data daily"} /> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
            </Col>
        </Container>
    )
}