import React,{PureComponent} from "react"
import Form from "./form"
import Info from "./info"
import Map from "./CMap"

const KEY = '9cc7fefc8121e6149f0a825123654a2c';
const KEY2 = "8649c28fd1c022b422953dbe41ca95c1";
const KEY_MAP = '0929eb63-c524-4456-a2b2-a0151972167a';
const ID = "f07614c5";

class App extends PureComponent {
    getInfo = async (e) => {
        alert('test');
        e.preventDefault();
        const formData = new FormData(e.target);
        const url = await fetch(`https://api.tfl.gov.uk/Journey/JourneyResults/${formData.get('from')}/to/${formData.get('to')}?app_id=${ID}&app_key=%${KEY2}`);
        const data = await url.json();
        console.log(data);
        console.log(data.toLocationDisambiguation.disambiguationOptions[0].parameterValue);
    }   
    render() {
        return  (
            <div>
                <Info />
                <Form method={this.getInfo}/> 
                <Map />  
            </div>
        )
    }
}

export default App;