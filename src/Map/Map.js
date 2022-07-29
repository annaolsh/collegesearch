import React, { useState } from "react"
import "./Map.css"
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api"
import { mapStyles } from "./mapStyles"

export default function Map(props) {
  const [selected, setSelected] = useState(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  const mapContainerStyle = {
    width: "100vw",
    height: "80vh",
  }

  const options = {
    styles: mapStyles,
  }

  const center = props.colleges.length
    ? props.colleges[0].location
    : {
        lat: 39.099724,
        lng: -94.578331,
      }

  // <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

  const collegeMarkers = props.colleges.map((college) => {
    return (
      <Marker
        key={college.id}
        position={college.location}
        onClick={() => setSelected(college)}
      ></Marker>
    )
  })

  const selectedMarkerInfo = selected ? (
    <InfoWindow position={selected.location}>
      <div>{selected.name}</div>
    </InfoWindow>
  ) : null

  return isLoaded ? (
    <section>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4.5}
        center={center}
        options={options}
      >
        {collegeMarkers.length && collegeMarkers}
        {selected && selectedMarkerInfo}
      </GoogleMap>
    </section>
  ) : (
    <></>
  )
}
