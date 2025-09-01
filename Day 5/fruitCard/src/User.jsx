import { useState } from "react";

function User(){
    const [display,setDisplay]=useState(true)
    return(
        <div>
            <h1>Show the content</h1>
            <button onClick={()=>setDisplay(!display)}>  {display ? "Hide" : "Show"}</button>
            {display && (
        <p className="mt-3 text-gray-700">
          👋 Hello! This is the toggled content.
        </p>
      )}
        </div>
    )
}
export default User;