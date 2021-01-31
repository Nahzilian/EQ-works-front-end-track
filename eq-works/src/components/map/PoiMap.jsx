import React from 'react'
import { Map, Marker, Overlay } from 'pigeon-maps'

const MAPTILER_ACCESS_TOKEN = process.env.REACT_APP_API_KEY // In env
const MAP_ID = 'basic'

function mapTilerProvider(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

export default function PoiMap(props) {

  return (
    <Map defaultCenter={[props.curPoi.lat, props.curPoi.lon]} 
      defaultZoom={4} 
      width={720} height={550}
      provider={mapTilerProvider} 
      dprs={[1, 2]} 
      >
      {props.data? props.data.map((x,index) => <Marker key={index} anchor={[x.lat,x.lon]}/>):null}
      {props.data? props.data.map((x,index) => <Overlay anchor={[x.lat,x.lon]}><div key={index} offset={[120, 79]}>{x.name}</div></Overlay>):null}
    </Map>
  )
}
