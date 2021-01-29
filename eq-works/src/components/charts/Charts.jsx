import React, { useState } from 'react'
import StatCharts from './StatCharts'
import EventCharts from './EventCharts'

export default function Charts() {
    
    return (
        <div>
            <br/>
            <EventCharts/>
            <StatCharts />
        </div>
    )
}
