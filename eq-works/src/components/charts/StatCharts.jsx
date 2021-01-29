import React, {useState, useEffect} from 'react'
import MultiAxisLine from './MultiAxisLine'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'

export default function StatCharts() {
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
            {statDataDaily? <MultiAxisLine data = {statDataDaily}/>:  <Spinner animation="border" variant="info" />}
            {statDataHourly? <MultiAxisLine data = {statDataHourly}/>:  <Spinner animation="border" variant="info" />}
        </div>
    )
}
