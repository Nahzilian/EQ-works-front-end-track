import React, { useState } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export default function MultiAxisLine(props) {
    const [date, onChangeDate] = useState(props.min);
    const dateSelector = (val) => {
        onChangeDate(val);
        props.repopulateRecall(val)
    }
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: '# Impression',
                data: props.data.map(x => x.impressions),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y-axis-1',
            },
            {
                label: '# Clicks',
                data: props.data.map(x => x.clicks),
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-2',
            },
            {
                label: 'Revenue',
                data: props.data.map(x => x.revenue),
                fill: false,
                backgroundColor: 'rgba(255, 200, 0, 1)',
                borderColor: 'rgba(255, 200, 0, 0.4)',
                yAxisID: 'y-axis-3',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-3',
                    gridLines: {
                        drawOnArea: false,
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
                    {props.hourly ?
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
            <Line data={data} options={options} width={"100vw"} height={"25vh"} />
        </div>
    )
}
