import React, {
  Component
} from 'react';
import Form from "./Form";
import Points from "./Points";
import "./Points.css"

const KEY = "8649c28fd1c022b422953dbe41ca95c1";
const ID = "f07614c5";

class CMap extends Component {
  state = {
    Point: []
  }
  getInfo = (e) => {
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
        <p>Searcher of Bike Station's</p>
        <Form method = { this.getInfo } />  
        <Points points = { this.state.Point } /> 
      </div>
    );
  }
}

export default CMap;