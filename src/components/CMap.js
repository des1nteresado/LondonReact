import React, { Component }  from 'react';
import Form from "./Form";
import Points from "./Points";

const KEY = "8649c28fd1c022b422953dbe41ca95c1";
const ID = "f07614c5";

class CMap extends Component {
  state = {
    Point: []
  }
  getInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = await fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${formData.get('name')}&app_id=${ID}&app_key=%${KEY}`);
   
    const data = await url.json();
  //  console.log(data);
    data.forEach(e => this.setState({
    Point: this.state.Point.concat({value: [e.id, e.commonName, e.lat, e.lon]})
    }));
    console.log(this.state.Point);

  }
  render() {
    return (
      <div>
        <Form method={this.getInfo}/> 
        <Points 
          points = {this.state.Point}
        />
      </div>
    );
  }
} 

export default CMap;