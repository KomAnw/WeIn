import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { Anchor } from 'src/components/Anchor';
import 'leaflet/dist/images/marker-shadow.png';

export const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([59.93395, 30.29403], 17.5);

    if (map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(map);
      L.marker([59.9339, 30.29401]).addTo(map);

      document.querySelector('.leaflet-control-attribution.leaflet-control')?.remove();
    }

    return () => {
      map?.remove();
    };
  }, []);

  return (
    <>
      <Anchor id="mapId" />
      <MapContainer />
    </>
  );
};

const MapContainer = styled.div.attrs({ id: 'map' })`
  height: 500px;
  margin-top: 30px;
  z-index: 10;
  .leaflet-default-icon-path {
    background-image: url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png);
  }
`;
