import React, { useState, useEffect } from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-date-picker';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function VerticalBar(props) {
    const [timeVar, setVarTime] = useState([]);
    const [value, onChange] = useState(new Date());
    const [time,setTime] = useState("Hour");

    const timeSelector = (value) => {
        setTime(value)
    }
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: '# of Events/hourly',
                data: props.data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
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
    }, [])



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
                            <DatePicker
                                onChange={onChange}
                                value={value} />
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

