import { useState } from "react";

export default function Colors(){
const [color, setColor]= useState("red");
return(
    <>
    <h1>My favourite color is {color}</h1>

    <button
    type="button"
    onClick={()=>setColor("blue")}>
        change the color
    </button>
    </>
)
}