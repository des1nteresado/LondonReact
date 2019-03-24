import React, { Component } from 'react';
import Form from "./Form";
import Points from "./Points";
import "./Points.css"

const KEY = "8649c28fd1c022b422953dbe41ca95c1";
const ID = "f07614c5";

class CMap extends Component {
  state = {
    Point: []
  }

  initialState = {
    Point: []
  }

  getInfo = (e) => {
    this.setState(this.initialState);
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${formData.get('name')}&app_id=${ID}&app_key=%${KEY}`).then((data) => {
      return data.json()
    }).then((result) => {
      this.setState({
        Point: this.state.Point.concat(result.map(e => {
          return {
            value: [e.id, e.commonName, e.lat, e.lon]
          }
        }))
      })
    })
  }
  
  render() {
    return ( 
      <div className="content">
        <p>The search of bikes stations</p>
        <div className="Flex">
          <div className="Map">
            <Form method = { this.getInfo } />  
            <Points points = { this.state.Point } /> 
          </div>
          <div className="Description">
            <div className="block1">
            At this page you can search for bike stations by their name. Bike point's name often contains information about the name of the street or nearby landmarks. Also every point has unique number and coordinates. 
            </div>
            <div>
            The search term e.g. "St. James".
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default CMap;