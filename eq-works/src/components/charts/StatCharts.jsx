import React, {useState, useEffect} from 'react'
import MultiAxisLine from './MultiAxisLine'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

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

function mappingHourlyData(data, key) {
    return data.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {})
}
export default function StatCharts() {
    const [statDataDaily, setStatDaily] = useState(null);
    const [statDataHourly, setStatHourly] = useState(null);
    const [reformattedHourly, setReformattedHourly] = useState(null);
    const [minday, setMinDay] = useState(null);
    const [maxday, setMaxDay] = useState(null);

    const repopulateDateData = (key) => {
        setStatHourly(filledByDate(reformattedHourly[key]))
    }
    const loadData = () => {
        try {
            axios.get("http://localhost:5555/stats/daily").then((res) => {
                const temp = res.data;
                setMinDay(temp[0].date)
                setMaxDay(temp[temp.length - 1].date)
                setStatDaily(temp)
            })
        } catch (err) {
            console.error(err)
        }
        
        try {
            axios.get("http://localhost:5555/stats/hourly").then((res) => {
                const temp = res.data;
                // mappingHourlyData
                const dataByDate = mappingHourlyData(temp, "date");
                const listOfDate = Object.keys(dataByDate)
                setReformattedHourly(dataByDate)
                setStatHourly(dataByDate[listOfDate[0]])
            })
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <Container fluid>
            <br/>
            <Col>
                <Row>
                    {statDataDaily? <MultiAxisLine data = {statDataDaily} title={"Daily Statistic data"} labels={statDataDaily.map(x => x.date)}/>:  <Spinner animation="border" variant="info" />}
                </Row>
                <br/>
                <Row>{statDataHourly? <MultiAxisLine data = {statDataHourly} title={"Hourly Statistic data"} hourly min={minday} max={maxday} labels={statDataHourly.map(x => x.hour)} repopulateRecall={repopulateDateData}/>:  <Spinner animation="border" variant="info" />}</Row>
            </Col>
        </Container>
    )
}
