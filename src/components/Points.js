import React from 'react';
import { YMaps, Map, ZoomControl, GeolocationControl } from 'react-yandex-maps';
import Point from './Point'
import './Points.css'

const Points = props => {
    console.log(props.points);
    return (
        <YMaps>
            <Map width={700} height={400} defaultState={{ center: [51.507351, -0.127660], zoom: 11,  }} > {
                props.points.map((point, index) => {
                    return (    
                        <Point key={index}
                            point = {point}
                        />
                        )
                    }) 
                }
                <ZoomControl />
                <GeolocationControl />
            </Map>
        </YMaps>
    )
}

export default Points;