import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: props.items || [],
            value: ""
        };
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const listItems = this.state.items.map((item, key) =>
            <li key={key}>{item}</li>
        );
        return (
            <div>
                <h2>{this.state.value}</h2>
                <ul>{listItems}</ul>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default TodoList
