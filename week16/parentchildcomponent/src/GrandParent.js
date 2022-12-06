import React, {useState} from 'react';
import { ParentOne } from './ParentOne';
import { ChildOne } from './ChildOne';

export const GrandParent = () => {
    const [newCount, setNewCount] = useState(0);
    console.log("Grandparen Render")
    return (
        <div>
            <button onClick = {() => setNewCount((nc) => nc + 1)}>Grandparent Count {newCount}</button>
            <ParentOne newCount={newCount}>
                <ChildOne />
            </ParentOne>
        </div>
    )
} 