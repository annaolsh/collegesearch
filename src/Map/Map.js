import React from "react"
import "./Map.css"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

export default function Map(props) {
  console.log("Map colleges ", props)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBVcGLeee4TM--ZQtIyAjL1ZiefbsVSqtU",
  })

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  }

  const center = props.colleges.length
    ? props.colleges[0].location
    : {
        lat: 39.099724,
        lng: -94.578331,
      }

  // <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

  const collegeMarkers = props.colleges.map((college) => {
    return <Marker key="college.id" position={college.location}></Marker>
  })

  return isLoaded ? (
    <section>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4.5}
        center={center}
      >
        {collegeMarkers.length && collegeMarkers}
      </GoogleMap>
    </section>
  ) : (
    <></>
  )
}
