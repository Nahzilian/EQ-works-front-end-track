import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

export default function MultiAxisLine(props) {
    const data = {
        labels: props.data.map(x => x.date),
        datasets: [
            {
                label: '# impression',
                data: props.data.map(x => x.impressions),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y-axis-1',
            },
            {
                label: '# clicks',
                data: props.data.map(x => x.clicks),
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-2',
            },
            {
                label: '# revenue',
                data: props.data.map(x => x.revenue),
                fill: false,
                backgroundColor: 'rgb(154, 162, 235)',
                borderColor: 'rgba(100, 150, 235, 0.2)',
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
                    position: 'left',
                    id: 'y-axis-3',
                    gridLines: {
                        drawOnArea: false,
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
            <Line data={data} options={options} />
        </div>
    )
}
