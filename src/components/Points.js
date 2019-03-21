import React from 'react';
import { YMaps, Map, GeoObject } from 'react-yandex-maps';


const Points = props => {
    return (
        <ul>
        { props.points.map((point, index) => {
            return (
                <YMaps>
                    <Map defaultState={{ center: [51.507351, -0.127660], zoom: 9 }} >

                    <GeoObject
                    geometry={{
                        type: 'Point',
                        coordinates: [point.value[2],point.value[3]]
                    }}
                    />
                    </Map>
                </YMaps>
            )
        }) }
       </ul>
    )
}

export default Points;