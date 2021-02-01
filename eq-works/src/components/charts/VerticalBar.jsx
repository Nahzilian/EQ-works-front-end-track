import React, { useState, useEffect } from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function VerticalBar(props) {
    const [timeVar, setVarTime] = useState([]);
    const [date, onChangeDate] = useState(props.min);
    const [time,setTime] = useState("00:00");

    const timeSelector = (value) => {
        setTime(value);
        props.repopulateRecall(parseInt(value.slice(0,2)))
    }
    const dateSelector = (val) => {
        onChangeDate(val);
        props.repopulateRecall(val)
    }
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: '# of Events/hourly',
                data: props.data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    }
    useEffect(() => {
        if (props.hourly) {
            var temp = []
            for (var i = 0; i < 25; i++) {
                if (i < 10) temp.push(`0${i}:00`)
                else temp.push(`${i}:00`)
            }
            setVarTime(temp)
        }
    }, [props.hourly])



    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    return (
        <div className="chart-wrapper">
            <div className='header'>
                <Row>
                    <Col>
                        <h3 className='title'>{props.title || null}</h3>
                    </Col>
                    {props.daily ?
                        <Col style={{ textAlign: 'right' }}>
                            <input type="date"
                                onChange={(e)=>dateSelector(e.target.value)}
                                value={date}
                                min={props.min}
                                max={props.max}/>
                        </Col>
                        : null}
                    {props.hourly ?
                        <Col style={{ textAlign: 'right' }}>
                            <DropdownButton id="dropdown-item-button" title={time}>
                                {timeVar.length > 0 ? timeVar.map((x, index) => <Dropdown.Item key={index} as="button" onSelect={()=> timeSelector(x) }>{x}</Dropdown.Item>) : null}
                            </DropdownButton>
                        </Col>
                        : null}
                </Row>
            </div>
            <Bar data={data} options={options} width={"100vw"} height={"40vh"} />
        </div>
    )
}

