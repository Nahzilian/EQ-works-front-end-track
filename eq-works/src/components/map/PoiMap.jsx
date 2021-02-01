import React, { useState, useRef } from 'react'
// import useSwr from "swr";
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import useSupercluster from "use-supercluster";
import Container from 'react-bootstrap/Container'
import 'mapbox-gl/dist/mapbox-gl.css'
export default function PoiMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 48.2270,
    longitude: -80.3809,
    width: "100%",
    height: "95vh",
    zoom: 3
  });
  const mapRef = useRef();

  const points = props.data && props.data.length > 0? props.data.map(elem => ({
    type: "Feature",
    properties: { cluster: false, elemId: elem.poi_id, name: elem.name },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(elem.lon),
        parseFloat(elem.lat)
      ]
    }
  })): [];
  const bounds = mapRef.current && mapRef.current.getMap()
    ? mapRef.current
      .getMap()
      .getBounds()
      .toArray()
      .flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  return (
    <Container fluid className = "map-wrapper">
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );

                    setViewport({
                      ...viewport,
                      latitude,
                      longitude,
                      zoom: expansionZoom,
                      transitionInterpolator: new FlyToInterpolator({
                        speed: 2
                      }),
                      transitionDuration: "auto"
                    });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`crime-${cluster.properties.elemId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <button className="poi-marker">
                <svg width="30" height="46" viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.804443" width="30" height="36.6791" rx="11" fill="#D6186D" />
                  <path d="M15.0178 46L18.9747 37.2808H11.0609L15.0178 46Z" fill="#D6186D" />
                  <circle cx="15.0001" cy="27.0892" r="3.54749" fill="white" />
                  <rect x="11.7876" y="7.7876" width="6.42458" height="12.2346" fill="white" />
                </svg>
              </button>
              {cluster.properties.name}
            </Marker>
          );
        })}
      </ReactMapGL>
    </Container>
  );
}