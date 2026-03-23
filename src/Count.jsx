import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    // usestatew dite hobe shathe ekta initial man dite hobe, nahole usestate er initial man undefined thakbe

    // const diye amra jei man dibo okhane nam , setnam emon format e likhte hobe

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: '2px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}


// components, jsx, props, state, events, conditional rendering

/// react er website e gele hook nam e bivinno jinsish dekha jay