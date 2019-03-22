import React from 'react';
import {GeoObject } from 'react-yandex-maps';

const Point = props => {
   // console.log(props.point.value[2]);
    return (
        <GeoObject
            geometry={{
                type: 'Point',
                coordinates: [props.point.value[2],props.point.value[3]]
            }}
        />  
    )
};

export default  Point;
