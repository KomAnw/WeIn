/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { Anchor } from 'src/components/Anchor';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    });
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
`;
