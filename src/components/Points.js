import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Point from './Point'
import './Points.css'

const Points = props => {
    console.log(props.points);
    return (
        <YMaps  className='Map'>
            <Map defaultState={{ center: [51.507351, -0.127660], zoom: 9, width: '700px', height: '500px' }}> {
                props.points.map((point, index) => {
                    return (    
                        <Point key={index}
                            point = {point}
                        />
                        )
                    }) 
                }
            </Map>
        </YMaps>
    )
}

export default Points;