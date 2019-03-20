import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.method}>
            <input type="text" name="from" placeholder="From"/>
            <input type="text" name="to" placeholder="To"/>
            <input type="submit" value="Get"/>
            </form>
        );
    }
}

export default Form