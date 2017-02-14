import React from 'react';
import TodoList from './TodoList.jsx';

class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
                <TodoList items={['sujay', 'devin']} />
            </div>
        );
    }
}

export default App
