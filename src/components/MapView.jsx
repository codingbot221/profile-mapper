import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const MapView = ({ profile }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD6GPC0UlpFdthqEmH5spHT6Yqj9kWLtNY' // Replace with your actual API key
  });

  return isLoaded && profile ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={profile.location}
      zoom={10}
    >
      <Marker position={profile.location} />
    </GoogleMap>
  ) : (
    <div className="text-center mt-20">Select a profile to view location</div>
  );
};

export default React.memo(MapView);