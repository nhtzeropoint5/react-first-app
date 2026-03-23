import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    // usestatew dite hobe shathe ekta initial man dite hobe, nahole usestate er initial man undefined thakbe

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