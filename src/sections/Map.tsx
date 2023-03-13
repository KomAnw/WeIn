import { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

export const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([59.93395, 30.29403], 17.5);

    if (map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(map);
      L.marker([59.933812, 30.294077]).addTo(map);

      document.querySelector('.leaflet-control-attribution.leaflet-control')?.remove();
    }

    return () => {
      map?.remove();
    };
  }, []);

  return <MapContainer />;
};

const MapContainer = styled.div.attrs({ id: 'map' })`
  height: 500px;
  margin-top: 30px;
`;
