import React,{PureComponent} from "react"
import Form from "./form"

const KEY = '9cc7fefc8121e6149f0a825123654a2c';
const KEY2 = "8649c28fd1c022b422953dbe41ca95c1";
const ID = "f07614c5";

class App extends PureComponent {
    getInfo = async (e) => {
        e.preventDefault();
        const url = await fetch(`https://api.tfl.gov.uk/AirQuality?app_id=${ID}&app_key=${KEY}`);
        const data = await url.json();
        console.log(data);
    }   
    render() {
        return  (
            <div>
                <h1>hello suak</h1>
                <Form method={this.getInfo}/>            
            </div>
        )
    }
}

export default App;