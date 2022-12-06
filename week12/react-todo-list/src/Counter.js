import React from 'react';

function Counter() {
    // array destructuring
    let [count, setCount] = React.useState([]);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    );
}

export default Counter;