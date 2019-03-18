import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.method}>
            <button>Get</button>
            </form>
        );
    }
}

export default Form