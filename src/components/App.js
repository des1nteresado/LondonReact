import React,{PureComponent} from "react";
import Map from "./CMap";
import './Points.css';

class App extends PureComponent {
    render() {
        return  (
            <div>
                <Map />  
            </div>
        )
    }
}

export default App;