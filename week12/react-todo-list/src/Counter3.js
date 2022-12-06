import React from 'react';

function Counter3() {
    // array destructuring
    const initialCount = 0;
    let [name, setName] = React.useState({firstName: '', lastName: ''});
    return (
        <div>
            <form>
                {/* <input type="text" value={name.firstName} onChange={ e => {setName( {firstName: e.target.value})}}/>
                <input type="text" value={name.lastName} onChange={ e => {setName( {lastName: e.target.value})}}/> */}
                <input type="text" value={name.firstName} onChange={ e => {setName( {...name, firstName: e.target.value})}}/>
                <input type="text" value={name.lastName} onChange={ e => {setName( {...name, lastName: e.target.value})}}/>
                <h2>Your first name is {name.firstName}</h2>
                <h2>Your last name is {name.lastName}</h2>
            </form>
        </div>
    );
}

//you must notice that the name disappears, so we use spread operator to set the property
//copy everything in the name object and particular value again in firstName vaue

export default Counter3;