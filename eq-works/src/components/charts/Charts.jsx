import React, { useEffect, useState } from 'react'
import axios from 'axios'

import StatCharts from './StatCharts'
import EventCharts from './EventCharts'

export default function Charts() {
    const [statDataDaily, setStatDaily] = useState(null);
    const [statDataHourly, setStatHourly] = useState(null)

    const loadData = () => {
       
        try {
            axios.get("http://localhost:5555/stats/daily").then((res) => {
                const temp = res.data;
                setStatDaily(temp)
            })
        } catch (err) {
            console.error(err)
        }
        
        try {
            axios.get("http://localhost:5555/stats/hourly").then((res) => {
                const temp = res.data;
                setStatHourly(temp)
            })
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <div>
            <br/>
            {/* <StatCharts statDaily = {statDataDaily} statDataHourly={statDataHourly} /> */}
            <EventCharts/>
        </div>
    )
}
