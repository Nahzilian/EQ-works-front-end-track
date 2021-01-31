import React, {useState} from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import { Line } from '@reactchartjs/react-chart.js'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function LineChart(props) {
    const [date, onChangeDate] = useState(props.min);
    const dateSelector = (val) => {
        onChangeDate(val);
        console.log(val)
        props.repopulateRecall(val)
    }
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: '# of Events/hourly',
                data: props.data,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }


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
                                onChange={(e) => dateSelector(e.target.value)}
                                value={date}
                                min={props.min}
                                max={props.max} />
                        </Col>
                        : null}
                </Row>
            </div>
            <Line data={data} options={options} width={"100vw"} height={"40vh"} />
        </div>
    )
}
