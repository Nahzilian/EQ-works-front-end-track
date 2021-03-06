import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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

export default function MainTable(props) {

    const [poiData, setPoiData] = useState(null);
    const [searchPattern, setSearchPattern] = useState('');
    const [fuse, setFuse] = useState(new Fuse([], options));
    const [searched, setSearched] = useState([]);

    const [dailyEventCurPoi, setEventDailyPoi] = useState(null);
    const [eventCurPoi, setEventCurPoi] = useState(null);

    const [curPoi, setCurPoi] = useState(1);

    const [dailyStatCurPoi, setStatDailyPoi] = useState(null);
    const [statCurPoi, setStatCurPoi] = useState(null);

    const [minday, setMinDay] = useState(null);
    const [maxday, setMaxDay] = useState(null);
    const [statminday, setstatMinDay] = useState(null);
    const [statmaxday, setstatMaxDay] = useState(null);

    const [reformattedEventHourly, setReformattedEventHourly] = useState(null);
    const [reformattedStatHourly, setReformattedStatHourly] = useState(null);

    const repopulateDateData = (key) => {
        if (reformattedEventHourly[key]) setEventCurPoi(reformattedEventHourly[key])
        else setEventCurPoi([])
    }

    const repopulateStatDateData = (key) => {
        if (reformattedStatHourly[key]) setStatCurPoi(reformattedStatHourly[key])
        else setStatCurPoi([])
    }

    const lookUp = (value) => {
        setSearchPattern(value)
        setSearched(fuse.search(value))
    }

    useEffect(() => {
        if (props.poiData && props.poiData.length > 0) {
            const temp = props.poiData;
            setPoiData(temp); // Format: lat long
            setFuse(new Fuse(temp, options));
            setSearchPattern(temp[curPoi - 1].name)
        }
        if (props.eventHourly && props.eventHourly.length > 0) {
            const temp = props.eventHourly;
            const dataByDate = mappingHourlyData(temp, "date");
            const listOfDate = Object.keys(dataByDate);
            setReformattedEventHourly(dataByDate);
            setEventCurPoi(dataByDate[listOfDate[0]]);
            setMinDay(temp[0].date);
            setMaxDay(temp[temp.length - 1].date);
        }
        if (props.statHourly && props.statHourly.length > 0) {
            const temp = props.statHourly;
            const dataByDate = mappingHourlyData(temp, "date");
            const listOfDate = Object.keys(dataByDate);
            setReformattedStatHourly(dataByDate);
            setStatCurPoi(dataByDate[listOfDate[0]]);
            setstatMinDay(temp[0].date);
            setstatMaxDay(temp[temp.length - 1].date);
        }
        if (props.eventDaily && props.eventDaily.length > 0) {
            setEventDailyPoi(props.eventDaily)
        }
        if (props.statDaily && props.statDaily.length > 0) {
            setStatDailyPoi(props.statDaily)
        }
        //loadAPI();
    }, [props.poiData, props.eventHourly, props.statHourly, props.eventDaily, props.statDaily,curPoi ]);

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
                                value={searchPattern}
                                onChange={(e) => lookUp(e.target.value)}
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: "100%" }} >
                            {searched.length > 0 ? searched.map(x => <Dropdown.Item className="results" onSelect={() => setCurPoi(x.item.poi_id)}>{x.item.name}</Dropdown.Item>) :
                                poiData ? poiData.map((x,index) => <Dropdown.Item key = {index} className="results" onSelect={() => setCurPoi(x.poi_id)}>{x.name}</Dropdown.Item>) : null}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <br />
                <Row>
                    {dailyEventCurPoi ? <EventTable data={dailyEventCurPoi} curPoi={curPoi} title={"Daily events"} /> : null}
                </Row>
                <br />
                <Row>
                    {eventCurPoi ? <EventTable data={eventCurPoi} min={minday} max={maxday} curPoi={curPoi} hourly repopulateRecall={repopulateDateData} title={"Hourly events"} /> : null}
                </Row>
                <br />
                <Row>
                    {dailyStatCurPoi ? <StatTable data={dailyStatCurPoi} curPoi={curPoi} title={"Daily stats"} /> : null}
                </Row>
                <br />
                <Row>
                    {statCurPoi ? <StatTable data={statCurPoi} min={statminday} max={statmaxday} curPoi={curPoi} hourly repopulateRecall={repopulateStatDateData} title={"Hourly stats"} /> : null}
                </Row>
            </Col>
        </Container>
    )
}
