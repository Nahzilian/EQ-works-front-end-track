import React, {useState} from 'react'
import { Map, Marker, Overlay } from 'pigeon-maps'

const MAPTILER_ACCESS_TOKEN = process.env.REACT_APP_API_KEY // In env
const MAP_ID = 'basic'

function mapTilerProvider(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

export default function PoiMap(props) {

  return (
    <Map defaultCenter={[0,0]} defaultZoom={4} width={686} height={500}
      provider={mapTilerProvider} >
      {props.data? props.data.map(x => <Marker anchor={[x.lat,x.lon]}/>):null}
    </Map>
  )
}
