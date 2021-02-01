import React, { useEffect, useState } from 'react'
import VerticalBar from './VerticalBar'
import LineChart from './LineChart'
import Spinner from 'react-bootstrap/Spinner'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

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
    for (var i = 0; i < 24; i++) {
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
        } else {
            res.push({
                date: date,
                events: 0,
                hour: i
            })
        }

    }
    return res
}

export default function EventCharts(props) {
    const [eventDataDaily, setEventDaily] = useState(null);
    const [eventDataHourly, setEventHourly] = useState(null);
    const [weeklyAvg, setWeeklyAvg] = useState(0);
    const [dayWithMax, setDayWithMax] = useState(null);
    const [eventDataByTime, setDataByTime] = useState(null);
    const [reformattedHourly, setReformattedHourly] = useState(null);
    const [minday, setMinDay] = useState(null);
    const [maxday, setMaxDay] = useState(null);
    useEffect(() => {
        if (props.eventDaily && props.eventDaily.length > 0) {
            const temp = props.eventDaily;
            setMinDay(temp[0].date)
            setMaxDay(temp[temp.length - 1].date)
            setEventDaily(temp)
            var avg = temp.map(x => x.events).reduce((a, b) => parseInt(a) + parseInt(b), 0);
            setWeeklyAvg((avg / 7).toFixed(2));
            const max = temp.reduce(function (prev, current) {
                return (prev.events > current.events) ? prev : current
            })
            setDayWithMax(max)
        }

        if (props.eventHourly && props.eventHourly.length > 0) {
            const temp = props.eventHourly;
            const dataByDate = mappingHourlyData(temp, "date");
            const listOfDate = Object.keys(dataByDate)
            setReformattedHourly(dataByDate)
            setEventHourly(filledByDate(dataByDate[listOfDate[0]]));
            setDataByTime(mappingByHour(dataByDate, 0))
        }
    }, [props.eventDaily, props.eventHourly])

    const repopulateData = (value) => {
        setDataByTime(mappingByHour(reformattedHourly, value))
    }

    const repopulateDateData = (key) => {
        setEventHourly(filledByDate(reformattedHourly[key]))
    }

    return (
        <Container fluid>
            <br />
            <Col sm={12}>
                <Row>
                    <Col lg={12} xl={6}>
                        <div className="chart-wrapper">
                            <Col>
                                <Row><Col className="additional-data">Average events:</Col><Col>{weeklyAvg}</Col></Row>
                                <Row><Col>(Per week) </Col> </Row>
                            </Col>
                        </div>
                    </Col>
                    <Col lg={12} xl={6}>
                        <div className="chart-wrapper">
                            {dayWithMax ?
                                <>
                                    <Col>
                                        <Row><Col className="additional-data">Most popular day:</Col> <Col>{dayWithMax.date ? dayWithMax.date : null}</Col></Row>
                                        <Row><Col className="additional-data">Events: </Col> <Col>{dayWithMax.events ? dayWithMax.events : null}</Col></Row>
                                    </Col>
                                </> : null}
                        </div>
                    </Col>

                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataByTime ? <VerticalBar data={eventDataByTime.map(x => x.events)} labels={eventDataByTime.map(x => x.date)} title={"Events data comparing by hours"} repopulateRecall={repopulateData} hourly /> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataHourly ? <LineChart data={eventDataHourly.map(x => x.events)} labels={eventDataHourly.map(x => x.hour)} title={"Hourly events data"} repopulateRecall={repopulateDateData} min={minday} max={maxday} daily /> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
                <br />
                <Row sm={12}>
                    <Col>{eventDataDaily ? <VerticalBar data={eventDataDaily.map(x => x.events)} labels={eventDataDaily.map(x => x.date)} title={"Daily events data"} /> : <Spinner animation="border" variant="info" />}</Col>
                </Row>
            </Col>
        </Container>
    )
}
