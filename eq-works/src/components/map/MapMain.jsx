import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PoiMap from './PoiMap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import EventTable from '../tables/EventTable'
import FormControl from 'react-bootstrap/FormControl'
import Fuse from 'fuse.js'
import Dropdown from 'react-bootstrap/Dropdown'



function mappingHourlyData(data, key) {
    return data.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {})
}
function generateFake(date) {
    var res = []
    for (var i = 0; i < 24; i++) {

        res.push({
            date: date,
            events: 0,
            hour: i
        })

    }
    return res
}

function filledByDate(data) {
    console.log(data)
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
export default function MapMain() {
    const options = {
        isCaseSensitive: false,
        includeScore: false,
        shouldSort: true,
        includeMatches: true,
        findAllMatches: false,
        minMatchCharLength: 1,
        location: 0,
        threshold: 0.6,
        distance: 100,
        useExtendedSearch: false,
        ignoreLocation: false,
        ignoreFieldNorm: false,
        keys: [
            "name"
        ]
    };

    const [poiData, setPoiData] = useState(null)
    const [currentPOI, setCurPoi] = useState(null)
    const [searchPattern, setSearchPattern] = useState('')
    const [fuse, setFuse] = useState(new Fuse([], options))
    const [searched, setSearched] = useState([])
    const [dailyEventCurPoi, setEventDailyPoi] = useState(null);
    const [eventCurPoi, setEventCurPoi] = useState(null);
    const [minday, setMinDay] = useState(null);
    const [maxday, setMaxDay] = useState(null);
    const [reformattedHourly, setReformattedHourly] = useState(null);

    const repopulateDateData = (key) => {
        console.log(reformattedHourly)
        if (reformattedHourly[key]) setEventCurPoi(filledByDate(reformattedHourly[key]))
        else setEventCurPoi(generateFake(key));
    }
    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/poi").then((res) => {
                const temp = res.data;
                setPoiData(temp) // Format: lat long
                setCurPoi(temp[0])
                setFuse(new Fuse(temp, options))
            })
        } catch (err) {
            console.error(err)
        }
        try {
            axios.get(`http://localhost:5555/events/daily?id=1`).then((res) => {
                const temp = res.data;
                setEventDailyPoi(temp)
                
            })
        } catch (err) {
            console.error(err)
        }
        try {
            axios.get(`http://localhost:5555/events/hourly?id=1`).then((res) => {
                const temp = res.data;
                const dataByDate = mappingHourlyData(temp, "date");
                const listOfDate = Object.keys(dataByDate)
                setReformattedHourly(dataByDate)
                setEventCurPoi(filledByDate(dataByDate[listOfDate[0]]));
                setMinDay(temp[0].date)
                setMaxDay(temp[temp.length - 1].date)
            })
        } catch (err) {
            console.error(err)
        }
    }

    const loadDataByPoi = (value) => {
        try {
            axios.get(`http://localhost:5555/events/hourly?id=${value}`).then((res) => {
                const temp = res.data;
                const dataByDate = mappingHourlyData(temp, "date");
                const listOfDate = Object.keys(dataByDate)
                setReformattedHourly(dataByDate)
                setEventCurPoi(filledByDate(dataByDate[listOfDate[0]]));
                setMinDay(temp[0].date)
                setMaxDay(temp[temp.length - 1].date)
            })
        } catch (err) {
            console.error(err)
        }
        try {
            axios.get(`http://localhost:5555/events/daily?id=${value}`).then((res) => {
                const temp = res.data;
                setEventDailyPoi(temp)
                
            })
        } catch (err) {
            console.error(err)
        }
    }

    const lookUp = (value) => {
        setSearchPattern(value);
        setSearched(fuse.search(value));
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
                        {currentPOI && poiData ? <PoiMap data={poiData} curPoi={currentPOI} /> : <Spinner animation="border" variant="info" />}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
