import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import EventTable from './EventTable'
import StatTable from './StatTable'
import FormControl from 'react-bootstrap/FormControl'
import Fuse from 'fuse.js'
import Dropdown from 'react-bootstrap/Dropdown'

function mappingHourlyData(data, key) {
    return data.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {})
}

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

export default function MainTable() {

    const [poiData, setPoiData] = useState(null);
    const [searchPattern, setSearchPattern] = useState('');
    const [fuse, setFuse] = useState(new Fuse([], options));
    const [searched, setSearched] = useState([]);
    const [dailyEventCurPoi, setEventDailyPoi] = useState(null);
    const [eventCurPoi, setEventCurPoi] = useState(null);

    const [curPoi, setCurPoi] =useState(1);

    const [dailyStatCurPoi, setStatDailyPoi] = useState(null);
    const [statCurPoi, setStatCurPoi] = useState(null);

    const [minday, setMinDay] = useState(null);
    const [maxday, setMaxDay] = useState(null);
    const [reformattedHourly, setReformattedHourly] = useState(null);

    const repopulateDateData = (key) => {
        if (reformattedHourly[key]) setEventCurPoi(reformattedHourly[key])
        else setEventCurPoi([])
    }

    const loadAPI = () => {
        try {
            axios.get("http://localhost:5555/poi").then((res) => {
                const temp = res.data;
                setPoiData(temp); // Format: lat long
                setFuse(new Fuse(temp, options));
            })
        } catch (err) {
            console.error(err)
        }
        loadDataByPoi();
    }

    const loadDataByPoi = () => {
        try {
            axios.get(`http://localhost:5555/events/hourly?loc=true`).then((res) => {
                const temp = res.data;
                const dataByDate = mappingHourlyData(temp, "date");
                const listOfDate = Object.keys(dataByDate);
                setReformattedHourly(dataByDate);
                setEventCurPoi(dataByDate[listOfDate[0]]);
                setMinDay(temp[0].date);
                setMaxDay(temp[temp.length - 1].date);
            })
        } catch (err) {
            console.error(err);
        }
        try {
            axios.get(`http://localhost:5555/events/daily?loc=true`).then((res) => {
                const temp = res.data;
                setEventDailyPoi(temp)
            })
        } catch (err) {
            console.error(err);
        }
        try {
            axios.get(`http://localhost:5555/stats/daily?loc=true`).then((res) => {
                const temp = res.data;
                setStatDailyPoi(temp);
            })
        } catch (err) {
            console.error(err);
        }
        try {
            axios.get(`http://localhost:5555/stats/hourly?loc=true`).then((res) => {
                const temp = res.data;
                const dataByDate = mappingHourlyData(temp, "date");
                const listOfDate = Object.keys(dataByDate);
                setReformattedHourly(dataByDate);
                setStatCurPoi(dataByDate[listOfDate[0]]);
                setMinDay(temp[0].date);
                setMaxDay(temp[temp.length - 1].date);
            })
        } catch (err) {
            console.error(err)
        }
    }

    const lookUp = (value) => {
        setSearchPattern(value)
        setSearched(fuse.search(value))
    }

    useEffect(() => {
        loadAPI();
    }, []);

    return (
        <Container fluid>
            <br />
            <Col>
                <Row>
                    <Dropdown style={{ width: "100%" }}>
                        <Dropdown.Toggle variant="primary" style={{ width: "100%" }}>
                            <FormControl
                                placeholder="POI Location"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                value={searchPattern?searchPattern:poiData?poiData[curPoi -1].name:null}
                                onChange={(e) => lookUp(e.target.value)}
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: "100%" }} >
                            {searched.length > 0 ? searched.map(x => <Dropdown.Item className="results" onSelect={() => setCurPoi(x.item.poi_id)}>{x.item.name}</Dropdown.Item>) :
                                poiData ? poiData.map(x => <Dropdown.Item className="results" onSelect={() => setCurPoi(x.poi_id)}>{x.name}</Dropdown.Item>) : null}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <br />
                <Row>
                    {dailyEventCurPoi ? <EventTable data={dailyEventCurPoi} min={minday} max={maxday} curPoi = {curPoi} repopulateRecall={repopulateDateData} /> : null}
                </Row>
                <Row>
                    {eventCurPoi ? <EventTable data={eventCurPoi} min={minday} max={maxday} curPoi = {curPoi} hourly repopulateRecall={repopulateDateData} /> : null}
                </Row>
                <Row>
                    {dailyStatCurPoi ? <StatTable data={dailyStatCurPoi} /> : null}
                </Row>
                <Row>
                    <StatTable data={statCurPoi} hourly min={minday} max={maxday} repopulateRecall={repopulateDateData} />
                </Row>
            </Col>
        </Container>
    )
}
