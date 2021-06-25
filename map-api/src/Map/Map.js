import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.166889,
  lng: 89.220032,
};
const onLoad = marker => {
  console.log('marker: ', marker)
}
function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC6qlQ9vkkSsg-qxnD-K1fKPq9n3MlEDIA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        
        center={center}
        zoom={10}
      >

        <Marker
          onLoad={onLoad}
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)