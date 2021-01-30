import React from 'react'
import { Map, Marker, Overlay } from 'pigeon-maps'

const map = (
  <Map defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={600} height={400}>
    <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => {}} />

    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
)
const MAPTILER_ACCESS_TOKEN = '' // In env
const MAP_ID = 'basic'

function mapTilerProvider (x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
}
export default function PoiMap() {
    return (
        <div>
            <Map defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={600} height={400} 
    provider={mapTilerProvider} >
    <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => {}} />

  </Map>
        </div>
    )
}
