import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                Hello
                It's React app..
                <form onSubmit={this.props.method}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        );
    }
}

export default Form