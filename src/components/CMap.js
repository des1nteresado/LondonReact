import { YMaps, Map } from 'react-yandex-maps';
import React, { Component }  from 'react';

const CMap = () => (
  <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [51.507351, -0.127660], zoom: 9 }} />
    </div>
  </YMaps>
);

export default CMap;