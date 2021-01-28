import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VerticalBar from './VerticalBar'
import MultiAxisLine from './MultiAxisLine'
export default function Charts() {
    const [eventDataDaily, setDataDaily] = useState(null);
    const [eventDataHourly, setEventHourly] = useState(null);
    const [statDataDaily, setStatDaily] = useState(null);
    const [statDataHourly,setStatHourly] = useState(null)
    
    const loadData = () => {
        try{
            axios.get("http://localhost:5555/events/daily").then((res) => {
            const temp = res.data;
            setDataDaily(temp)
        })
        }catch(err){
            console.error(err)
        }
        try{
            axios.get("http://localhost:5555/stats/daily").then((res) => {
            const temp = res.data;
            setStatDaily(temp)
        })
        }catch(err){
            console.error(err)
        }
        try{
            axios.get("http://localhost:5555/events/hourly").then((res) => {
            const temp = res.data;
            setEventHourly(temp)
            console.log(temp)
        })
        }catch(err){
            console.error(err)
        }
        try{
            axios.get("http://localhost:5555/stats/hourly").then((res) => {
            const temp = res.data;
            setStatHourly(temp)
            console.log(temp)
        })
        }catch(err){
            console.error(err)
        }
    }
    useEffect(() => {
        loadData();
    },[])
    return (
        <div>
            {eventDataHourly? <VerticalBar data = {eventDataHourly}/>:null}
            {eventDataDaily?<VerticalBar data = {eventDataDaily}/>:null}
            {statDataDaily? <MultiAxisLine data = {statDataDaily}/>:null}
            {statDataHourly? <MultiAxisLine data = {statDataHourly}/>:null}
        </div>
    )
}
