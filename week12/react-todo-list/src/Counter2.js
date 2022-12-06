import React from 'react';

function Counter2() {
    // array destructuring
    const initialCount = 0;
    let [count, setCount] = React.useState([]);
    return (
        <div>
            Count: {count} 
            <button onClick={() => setCount(initialCount)}>Reset </button>
            <button onClick={() => setCount(count += 1)}>Increment count </button>
            <button onClick={() => setCount(count -= 1)}>Decrement count </button>
        </div>
    );
}

export default Counter2;