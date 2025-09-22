import React,{useEffect, useState} from "react";
export default function Toggle() {
    const [dark,setDark] = useState(()=>!localStorage.getItem("nf_dark"));

    useEffect(()=>{
        document.body.classList.toggle("dark",dark);
        localStorage.setItem("nf_dark",dark?"1":"0");
    },[dark]);
    return (
<button className="toggle" onClick={() => setDark(!dark)}>
{dark ? "🌙" : "☀️"}
</button>
);
}