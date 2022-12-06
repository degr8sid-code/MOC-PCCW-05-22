//hooks are functions that accepts an initial value of the state property
// and returns the current value of the state property  
// and a method capable of updating that state property
// import React from 'react';
function Counter() {
    // array destructuring
    const [count, setCount] = React.useState([]);
    return (
        <div>
            <button onClick={
                () => setCount(count+1)}>count {count}
            </button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById("root"));