import { YMaps, Map, GeoObject } from 'react-yandex-maps';
import React, { Component }  from 'react';
import Form from "./Form";

const KEY = "8649c28fd1c022b422953dbe41ca95c1";
const ID = "f07614c5";

class CMap extends Component {
  state = {
    Point: [{
      value: ''
    }]
  }
  getInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = await fetch(`https://api.tfl.gov.uk/Journey/JourneyResults/${formData.get('from')}/to/${formData.get('to')}?app_id=${ID}&app_key=%${KEY}`);
    const data = await url.json();
    console.log(data);
    console.log(data.toLocationDisambiguation.disambiguationOptions[0].parameterValue);
    data.toLocationDisambiguation.disambiguationOptions.forEach(e => this.setState({
      Point: this.state.Point.concat({value: e.parameterValue})
    }));
    console.log(this.state.Point);

  }
  render() {
    return (
      <div>
        <Form method={this.getInfo}/> 

        <YMaps>
            <Map defaultState={{ center: [51.507351, -0.127660], zoom: 9 }} >
            <GeoObject
              geometry={{
                type: 'Point',
                coordinates: [51.507351, -0.127660],
              }}
            />
            </Map>
        </YMaps>
      </div>
    );
  }
} 

export default CMap;