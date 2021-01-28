import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

export default function VerticalBar(props) {
    const data = {
        labels: props.data.map(x => x.date),
        datasets: [
            {
                label: '# of Events/daily',
                data: props.data.map(x => x.events),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
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
        <div className = "chart-wrapper">
            <div className='header'>
                <h1 className='title'>{props.title|| null}</h1>
                <div className='links'>
                </div>
            </div>
            <Bar data={data} options={options} width={"100vw"} height={"50vh"}/>
        </div>
    )
}

