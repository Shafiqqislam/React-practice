import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsService ,DirectionsRenderer} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 23.733348,
    lng: 90.406707,
};
const onLoad = marker => {
    console.log('marker: ', marker)
}
function Direction({origin,destination}) {
    const [directionResponse, setDirectionResponse] = useState(null)
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyC6qlQ9vkkSsg-qxnD-K1fKPq9n3MlEDIA"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}

                center={center}
                zoom={10}
            >
               {
                   origin !== '' && destination !=='' && <DirectionsService
                   // required
                   options={{
                       destination: destination,
                       origin: origin,
                       travelMode: 'DRIVING'
                   }}
                   // required
                   callback={res => {
                       if (res !== null){
                   setDirectionResponse(res);
                     }
                 }}
               />
               }
                
                {
                    directionResponse &&  <DirectionsRenderer
                    // required
                    options={{
                      directions:directionResponse
                    }}
                  />
                }
      </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)