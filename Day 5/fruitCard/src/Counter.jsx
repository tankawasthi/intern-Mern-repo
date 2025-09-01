import { useState } from "react";

const Counter=({reverse=false})=>{
    const [count,setCount]=useState(0);
    // const handleCount=()=>{
    //     if(reverse){
    //         setCount(count-1);
    //     }else{
    //     setCount(count+1);
    //     }

    // }
    const handleIncrease=()=>{
        setCount(count+1);
    }
    const handleDecrease=()=>{
        setCount(count-1);
    }
    return(
        
        <div>
            <h2> counter:{count}</h2>
            <button onClick={handleIncrease}>increase Count</button>
            <button onClick={handleDecrease}>Decrease Count</button>
        </div>

    )
}
export default Counter;