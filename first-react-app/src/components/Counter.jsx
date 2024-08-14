import React, {useState} from "react";

function Counter () {
    const [count, setCount] = useState(0);
    

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={(ev) => setCount(count + 1)}>+</button>
            <button onClick={(ev) => setCount(count - 1)}>-</button>
        </div>
    );
}
export default Counter;