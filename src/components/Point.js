import React from 'react';
import {GeoObject } from 'react-yandex-maps';

const Point = props => {
    return (
        <GeoObject
            geometry={{
                type: 'Point',
                coordinates: [props.point.value[2],props.point.value[3]]
            }}
            properties= {{
                balloonContent: 'Bike point №' + props.point.value[0].split("_").pop() + '; Name: ' + props.point.value[1] + 
                '; Сoordinates: ' + props.point.value[2] + ' ' + props.point.value[3],
                iconContent: '🚴'
            }}
            modules= {
                ['geoObject.addon.balloon', 'geoObject.addon.hint']
            }
        />  
    )
};

export default  Point;
