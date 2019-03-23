import React from 'react';
import './Points.css'

class Form extends React.Component {
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.props.method}>
                    <input type="text" name="name" className="formText" placeholder="Name"/>
                    <input className="button" type="submit" value="Search"/>
                </form>
            </div>
        );
    }
}

export default Form